import { Html, OrbitControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { useEffect, useMemo } from 'react';
import * as THREE from 'three';
import {
  fieldMapLandmarks,
  fieldMapLocations,
  type FieldMapLandmark,
  type FieldMapLocationId,
} from '../../data/fieldMapLocations';

const MAP_CROP_LEFT = 0.12;
const MAP_WIDTH = 16.4;
const MAP_DEPTH = 11.4;
const SURFACE_SUBDIVISIONS = 4;
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const locationById = (id: FieldMapLocationId) => fieldMapLocations.find((location) => location.id === id)!;

// A deliberately angular town outline: stepped northern crown, zigzag western
// edge, and a narrow southeast switchback that carries the Sobi Hills ridge.
const mapBoundaryUV: [number, number][] = [
  [0.04, 0.055], [0.11, 0.055], [0.11, 0.11], [0.17, 0.11], [0.17, 0.16],
  [0.23, 0.16], [0.23, 0.09], [0.30, 0.09], [0.30, 0.145], [0.36, 0.145],
  [0.36, 0.075], [0.43, 0.075], [0.43, 0.07], [0.50, 0.07], [0.50, 0.06],
  [0.57, 0.06], [0.57, 0.07], [0.63, 0.07], [0.63, 0.045], [0.70, 0.045],
  [0.70, 0.12], [0.76, 0.12], [0.76, 0.065], [0.83, 0.065], [0.83, 0.04],
  [0.90, 0.04], [0.90, 0.08], [0.96, 0.08], [0.96, 0.16], [0.92, 0.16],
  [0.92, 0.22], [0.97, 0.22], [0.97, 0.29], [0.92, 0.29], [0.92, 0.35],
  [0.97, 0.35], [0.97, 0.42], [0.92, 0.42], [0.92, 0.48], [0.87, 0.48],
  [0.87, 0.54], [0.92, 0.54], [0.92, 0.60], [0.87, 0.60], [0.87, 0.66],
  [0.92, 0.66], [0.92, 0.71], [0.98, 0.71], [0.98, 0.77], [0.92, 0.77],
  [0.92, 0.82], [0.97, 0.82], [0.97, 0.88], [0.92, 0.88], [0.92, 0.93],
  [0.97, 0.93], [0.97, 0.99], [0.82, 0.99], [0.82, 0.94], [0.77, 0.94],
  [0.77, 0.89], [0.72, 0.89], [0.72, 0.96], [0.66, 0.96], [0.66, 0.99],
  [0.60, 0.99], [0.60, 0.94], [0.53, 0.94], [0.53, 0.99], [0.46, 0.99],
  [0.46, 0.97], [0.39, 0.97], [0.39, 0.99], [0.32, 0.99], [0.32, 0.93],
  [0.25, 0.93], [0.25, 0.88], [0.19, 0.88], [0.19, 0.81], [0.14, 0.81],
  [0.14, 0.75], [0.09, 0.75], [0.09, 0.68], [0.04, 0.68], [0.04, 0.61],
  [0.09, 0.61], [0.09, 0.54], [0.04, 0.54], [0.04, 0.47], [0.09, 0.47],
  [0.09, 0.40], [0.04, 0.40], [0.04, 0.33], [0.09, 0.33], [0.09, 0.26],
  [0.04, 0.26], [0.04, 0.19], [0.02, 0.19], [0.02, 0.14], [0.04, 0.14],
];
const townBoundary: [number, number][] = mapBoundaryUV.flatMap(([u, v], index) => {
  const next = mapBoundaryUV[(index + 1) % mapBoundaryUV.length];
  const start: [number, number] = [(u - 0.5) * MAP_WIDTH, (0.5 - v) * MAP_DEPTH];
  const end: [number, number] = [(next[0] - 0.5) * MAP_WIDTH, (0.5 - next[1]) * MAP_DEPTH];
  const dx = end[0] - start[0];
  const dz = end[1] - start[1];
  const length = Math.hypot(dx, dz);
  const points: [number, number][] = [start];

  if (length > 0.68) {
    const normalX = -dz / length;
    const normalZ = dx / length;
    const irregularity = (index % 2 === 0 ? 1 : -1) * (0.035 + (index % 4) * 0.012);
    points.push([
      (start[0] + end[0]) / 2 + normalX * irregularity,
      (start[1] + end[1]) / 2 + normalZ * irregularity,
    ]);
  }
  return points;
});
const boundaryCenter: [number, number] = townBoundary.reduce(
  (center, point) => [center[0] + point[0] / townBoundary.length, center[1] + point[1] / townBoundary.length],
  [0, 0],
);

function sourcePointToWorld(sourceU: number, sourceV: number): [number, number] {
  const u = clamp((sourceU - MAP_CROP_LEFT) / (1 - MAP_CROP_LEFT), 0.015, 0.985);
  const v = clamp(sourceV, 0.025, 0.975);
  return [(u - 0.5) * MAP_WIDTH, (0.5 - v) * MAP_DEPTH];
}

const locationPoint = (id: FieldMapLocationId) => {
  const [u, v] = locationById(id).mapPosition;
  return sourcePointToWorld(u, v);
};

const landmarkPoint = (landmark: FieldMapLandmark) =>
  sourcePointToWorld(landmark.mapPosition[0], landmark.mapPosition[1]);

const roadRoutes: { id: string; label: string; points: [number, number][] }[] = [
  {
    id: 'main-road',
    label: 'MAIN ROAD',
    points: [[0.34, 0.59], [0.47, 0.52], [0.52, 0.47], [0.62, 0.4], [0.71, 0.32], [0.8, 0.2], [0.87, 0.24]],
  },
  {
    id: 'community-road',
    label: 'COMMUNITY ROAD',
    points: [[0.31, 0.52], [0.47, 0.52], [0.59, 0.6], [0.72, 0.59], [0.83, 0.77]],
  },
  {
    id: 'school-road',
    label: 'SCHOOL ROAD',
    points: [[0.52, 0.47], [0.55, 0.61], [0.58, 0.76], [0.59, 0.9]],
  },
].map((route) => ({
  ...route,
  points: route.points.map(([u, v]) => sourcePointToWorld(u, v)),
}));
function gaussianRidge(
  x: number,
  z: number,
  centerX: number,
  centerZ: number,
  radiusX: number,
  radiusZ: number,
  height: number,
  phase: number,
) {
  const dx = (x - centerX) / radiusX;
  const dz = (z - centerZ) / radiusZ;
  const distance = Math.sqrt(dx * dx + dz * dz);
  const falloff = Math.exp(-2.7 * distance * distance);
  const angle = Math.atan2(dz, dx);
  const ridgeShape = 0.96 + 0.04 * Math.cos(angle * 3 + phase) * (1 - distance * 0.28);
  const flankTexture = 1 + Math.sin(angle * 7 + distance * 11 + phase) * 0.012;
  return height * falloff * ridgeShape * flankTexture;
}

function distanceToSegment(x: number, z: number, start: [number, number], end: [number, number]) {
  const dx = end[0] - start[0];
  const dz = end[1] - start[1];
  const lengthSquared = dx * dx + dz * dz;
  const projection = lengthSquared === 0
    ? 0
    : clamp(((x - start[0]) * dx + (z - start[1]) * dz) / lengthSquared, 0, 1);
  return Math.hypot(x - (start[0] + projection * dx), z - (start[1] + projection * dz));
}

function roadChannelAt(x: number, z: number) {
  let heightChange = 0;
  for (const route of roadRoutes) {
    for (let index = 0; index < route.points.length - 1; index += 1) {
      const distance = distanceToSegment(x, z, route.points[index], route.points[index + 1]);
      const channel = Math.exp(-(distance * distance) / (2 * 0.11 * 0.11));
      const shoulderDistance = distance - 0.2;
      const shoulder = Math.exp(-(shoulderDistance * shoulderDistance) / (2 * 0.13 * 0.13));
      heightChange += -0.065 * channel + 0.018 * shoulder;
    }
  }
  return heightChange;
}

function distanceToBoundary(x: number, z: number) {
  let nearest = Number.POSITIVE_INFINITY;
  for (let index = 0; index < townBoundary.length; index += 1) {
    const start = townBoundary[index];
    const end = townBoundary[(index + 1) % townBoundary.length];
    nearest = Math.min(nearest, distanceToSegment(x, z, start, end));
  }
  return nearest;
}

function terrainHeightAt(x: number, z: number) {
  const edgeFade = clamp(distanceToBoundary(x, z) / 0.58, 0, 1);
  const broadRelief =
    Math.sin(x * 0.49 + z * 0.22) * 0.07 +
    Math.cos(z * 0.73 - x * 0.31) * 0.055 +
    Math.sin((x - z) * 1.21) * 0.025;
  let height = 0.08 + edgeFade * (0.12 + broadRelief);

  const okeIboo = locationPoint('oke-iboo');
  const okeSinniga = locationPoint('oke-sinniga');
  const sobi = locationPoint('sobi-hills');

  height += gaussianRidge(x, z, okeIboo[0], okeIboo[1], 0.86, 0.58, 0.72, 0.9);
  height += gaussianRidge(x, z, okeSinniga[0], okeSinniga[1], 1.2, 0.82, 2.0, 1.8);

  // The Sobi ridge is deliberately the tallest and broadest landform.
  height += gaussianRidge(x, z, sobi[0] - 0.62, sobi[1] + 0.58, 1.2, 0.88, 2.25, 0.3);
  height += gaussianRidge(x, z, sobi[0] - 0.04, sobi[1] + 0.46, 1.14, 0.92, 3.25, 2.1);
  height += gaussianRidge(x, z, sobi[0] + 0.55, sobi[1] + 0.58, 0.98, 0.82, 1.85, 3.5);

  const reliefEnvelope = edgeFade * (0.55 + 0.45 * edgeFade);
  return height + roadChannelAt(x, z) * reliefEnvelope;
}

function terrainColorAt(x: number, z: number, height: number) {
  const lowland = new THREE.Color('#d9e5c0');
  const dryGround = new THREE.Color('#dcc49b');
  const weatheredRock = new THREE.Color('#bab2a5');
  const elevation = clamp((height - 0.24) / 1.15, 0, 1);
  const summit = clamp((height - 1.35) / 1.7, 0, 1);
  lowland.lerp(dryGround, elevation * 0.66);
  lowland.lerp(weatheredRock, summit * 0.84);
  const terrainVariation = 0.96 +
    0.025 * Math.sin(x * 1.7 + z * 0.8) +
    0.018 * Math.cos(z * 2.1 - x * 0.7);
  return lowland.multiplyScalar(terrainVariation);
}

function createSurfaceGeometry() {
  const shape = new THREE.Shape();
  townBoundary.forEach(([x, z], index) => {
    if (index === 0) shape.moveTo(x, z);
    else shape.lineTo(x, z);
  });
  shape.closePath();

  const baseGeometry = new THREE.ShapeGeometry(shape);
  const basePositions = Array.from(baseGeometry.getAttribute('position').array as ArrayLike<number>);
  const positions: number[] = [];
  const colors: number[] = [];
  for (let index = 0; index < basePositions.length; index += 3) {
    positions.push(basePositions[index], 0, basePositions[index + 1]);
  }
  let indices = Array.from(baseGeometry.getIndex()!.array as ArrayLike<number>);
  baseGeometry.dispose();

  // ShapeGeometry triangulates the concave town polygon. Repeated midpoint
  // subdivision keeps its sharp outline while adding enough detail for relief.
  for (let level = 0; level < SURFACE_SUBDIVISIONS; level += 1) {
    const midpointCache = new Map<string, number>();
    const subdivided: number[] = [];
    const midpoint = (a: number, b: number) => {
      const low = Math.min(a, b);
      const high = Math.max(a, b);
      const key = `${low}:${high}`;
      const cached = midpointCache.get(key);
      if (cached !== undefined) return cached;
      const index = positions.length / 3;
      positions.push(
        (positions[a * 3] + positions[b * 3]) / 2,
        0,
        (positions[a * 3 + 2] + positions[b * 3 + 2]) / 2,
      );
      midpointCache.set(key, index);
      return index;
    };

    for (let index = 0; index < indices.length; index += 3) {
      const a = indices[index];
      const b = indices[index + 1];
      const c = indices[index + 2];
      const ab = midpoint(a, b);
      const bc = midpoint(b, c);
      const ca = midpoint(c, a);
      subdivided.push(a, ab, ca, ab, b, bc, ca, bc, c, ab, bc, ca);
    }
    indices = subdivided;
  }

  for (let index = 0; index < positions.length; index += 3) {
    const x = positions[index];
    const z = positions[index + 2];
    const height = terrainHeightAt(x, z);
    positions[index + 1] = height;
    colors.push(...terrainColorAt(x, z, height).toArray());
  }

  // Ensure the terrain faces upward after mapping the shape's 2D plane to X/Z.
  const firstA = indices[0] * 3;
  const firstB = indices[1] * 3;
  const firstC = indices[2] * 3;
  const abX = positions[firstB] - positions[firstA];
  const abZ = positions[firstB + 2] - positions[firstA + 2];
  const acX = positions[firstC] - positions[firstA];
  const acZ = positions[firstC + 2] - positions[firstA + 2];
  if (abZ * acX - abX * acZ < 0) {
    for (let index = 0; index < indices.length; index += 3) {
      [indices[index + 1], indices[index + 2]] = [indices[index + 2], indices[index + 1]];
    }
  }

  const uvs: number[] = [];
  for (let index = 0; index < positions.length; index += 3) {
    uvs.push(positions[index] / MAP_WIDTH + 0.5, positions[index + 2] / MAP_DEPTH + 0.5);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function createEarthEdgeGeometry() {
  const edgeStepsPerSegment = 2 ** SURFACE_SUBDIVISIONS;
  const edgeSegments = townBoundary.length * edgeStepsPerSegment;
  const rings = Array.from({ length: 6 }, (_, index) => {
    const progress = index / 5;
    return {
      scale: 1 - progress * 0.014,
      drop: progress * 0.19,
      progress,
    };
  });
  const positions: number[] = [];
  const colors: number[] = [];
  const indices: number[] = [];

  rings.forEach((ring, ringIndex) => {
    for (let segment = 0; segment < edgeSegments; segment += 1) {
      const boundaryIndex = Math.floor(segment / edgeStepsPerSegment);
      const fraction = (segment % edgeStepsPerSegment) / edgeStepsPerSegment;
      const start = townBoundary[boundaryIndex];
      const end = townBoundary[(boundaryIndex + 1) % townBoundary.length];
      const startX = boundaryCenter[0] + (start[0] - boundaryCenter[0]) * ring.scale;
      const startZ = boundaryCenter[1] + (start[1] - boundaryCenter[1]) * ring.scale;
      const endX = boundaryCenter[0] + (end[0] - boundaryCenter[0]) * ring.scale;
      const endZ = boundaryCenter[1] + (end[1] - boundaryCenter[1]) * ring.scale;
      const x = startX + (endX - startX) * fraction;
      const z = startZ + (endZ - startZ) * fraction;
      positions.push(x, terrainHeightAt(x, z) - ring.drop, z);

      const baseColor = new THREE.Color('#897553').lerp(new THREE.Color('#514b3e'), ring.progress);
      const stoneGrain = 0.97 + 0.03 * Math.sin(segment * 0.81 + ringIndex * 2.7);
      baseColor.multiplyScalar(stoneGrain);
      colors.push(baseColor.r, baseColor.g, baseColor.b);
    }
  });

  for (let ring = 0; ring < rings.length - 1; ring += 1) {
    const currentStart = ring * edgeSegments;
    const nextStart = (ring + 1) * edgeSegments;
    for (let segment = 0; segment < edgeSegments; segment += 1) {
      const next = (segment + 1) % edgeSegments;
      const a = currentStart + segment;
      const b = currentStart + next;
      const c = nextStart + segment;
      const d = nextStart + next;
      indices.push(a, c, b, b, c, d);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}
function seededRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function createTerrainTexture() {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d');
  if (!context) return new THREE.CanvasTexture(canvas);
  const random = seededRandom(51226);
  const pixels = context.createImageData(size, size);

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const index = (y * size + x) * 4;
      const fieldPattern = Math.sin(x * 0.022 + Math.sin(y * 0.015) * 2.1) * 5.2;
      const vegetationPattern = Math.cos(y * 0.034 - x * 0.012) * 4.1;
      const grain = (random() - 0.5) * 25;
      pixels.data[index] = clamp(112 + fieldPattern + grain, 0, 255);
      pixels.data[index + 1] = clamp(117 + vegetationPattern + grain * 0.84, 0, 255);
      pixels.data[index + 2] = clamp(83 + grain * 0.58, 0, 255);
      pixels.data[index + 3] = 255;
    }
  }
  context.putImageData(pixels, 0, 0);

  for (let patch = 0; patch < 110; patch += 1) {
    const centerX = random() * size;
    const centerY = random() * size;
    const radiusX = 9 + random() * 48;
    const radiusY = 6 + random() * 27;
    const palette = patch % 4;
    context.fillStyle = palette === 0
      ? 'rgba(54, 76, 48, 0.17)'
      : palette === 1
        ? 'rgba(146, 117, 73, 0.17)'
        : palette === 2
          ? 'rgba(45, 64, 42, 0.12)'
          : 'rgba(166, 139, 91, 0.11)';
    context.beginPath();
    for (let point = 0; point < 9; point += 1) {
      const angle = (point / 9) * Math.PI * 2;
      const irregularRadius = 0.78 + random() * 0.38;
      const x = centerX + Math.cos(angle) * radiusX * irregularRadius;
      const y = centerY + Math.sin(angle) * radiusY * irregularRadius;
      if (point === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.closePath();
    context.fill();
  }

  context.lineCap = 'round';
  for (let mark = 0; mark < 10500; mark += 1) {
    const x = random() * size;
    const y = random() * size;
    const length = 1 + random() * 6;
    context.strokeStyle = random() > 0.5 ? 'rgba(38, 57, 38, 0.15)' : 'rgba(192, 158, 98, 0.13)';
    context.lineWidth = 0.45 + random() * 1.25;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + length, y - length * (0.22 + random() * 0.5));
    context.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  return texture;
}

function createRoadTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 384;
  const context = canvas.getContext('2d');
  if (!context) return new THREE.CanvasTexture(canvas);
  const random = seededRandom(26026);
  context.fillStyle = '#8c7550';
  context.fillRect(0, 0, canvas.width, canvas.height);
  for (let mark = 0; mark < 15000; mark += 1) {
    const x = random() * canvas.width;
    const y = random() * canvas.height;
    const radius = 0.35 + random() * 1.6;
    context.fillStyle = random() > 0.52 ? 'rgba(49, 53, 39, 0.24)' : 'rgba(195, 160, 103, 0.24)';
    context.beginPath();
    context.ellipse(x, y, radius * 1.3, radius, random() * Math.PI, 0, Math.PI * 2);
    context.fill();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.needsUpdate = true;
  return texture;
}

function createRoadGeometry() {
  const positions: number[] = [];
  const colors: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];
  const crossSection = [-1, -0.58, 0, 0.58, 1];
  const roadWidths = [0.19, 0.135, 0.115, 0.135, 0.19];
  const roadTones = [
    new THREE.Color('#96927d'),
    new THREE.Color('#c5b48f'),
    new THREE.Color('#e1cca1'),
    new THREE.Color('#c5b48f'),
    new THREE.Color('#96927d'),
  ];

  roadRoutes.forEach((route) => {
    const curve = new THREE.CatmullRomCurve3(
      route.points.map(([x, z]) => new THREE.Vector3(x, 0, z)),
      false,
      'centripetal',
    );
    const samples = curve.getPoints(Math.max(48, route.points.length * 18));
    const routeVertexStart = positions.length / 3;
    let distanceAlongRoute = 0;

    samples.forEach((sample, sampleIndex) => {
      const previous = samples[Math.max(sampleIndex - 1, 0)];
      const next = samples[Math.min(sampleIndex + 1, samples.length - 1)];
      const tangentX = next.x - previous.x;
      const tangentZ = next.z - previous.z;
      const tangentLength = Math.max(Math.hypot(tangentX, tangentZ), 0.0001);
      const normalX = -tangentZ / tangentLength;
      const normalZ = tangentX / tangentLength;
      if (sampleIndex > 0) distanceAlongRoute += Math.hypot(sample.x - previous.x, sample.z - previous.z);

      crossSection.forEach((direction, laneIndex) => {
        const x = sample.x + normalX * roadWidths[laneIndex] * direction;
        const z = sample.z + normalZ * roadWidths[laneIndex] * direction;
        positions.push(x, terrainHeightAt(x, z) + 0.022, z);
        uvs.push(laneIndex / (crossSection.length - 1), distanceAlongRoute * 1.65);
        const shoulderShade = laneIndex === 0 || laneIndex === crossSection.length - 1 ? 0.88 : 1;
        const tone = roadTones[laneIndex].clone().multiplyScalar(shoulderShade);
        colors.push(tone.r, tone.g, tone.b);
      });
    });

    for (let sample = 0; sample < samples.length - 1; sample += 1) {
      for (let lane = 0; lane < crossSection.length - 1; lane += 1) {
        const a = routeVertexStart + sample * crossSection.length + lane;
        const b = a + crossSection.length;
        indices.push(a, b, a + 1, a + 1, b, b + 1);
      }
    }
  });

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function TexturedTerrain() {
  const texture = useMemo(createTerrainTexture, []);
  const geometry = useMemo(createSurfaceGeometry, []);
  const earthEdge = useMemo(createEarthEdgeGeometry, []);
  const { gl } = useThree();

  useEffect(() => {
    texture.anisotropy = Math.min(12, gl.capabilities.getMaxAnisotropy());
    return () => texture.dispose();
  }, [gl, texture]);

  return (
    <group>
      <mesh geometry={geometry} receiveShadow castShadow>
        <meshStandardMaterial map={texture} vertexColors roughness={0.98} metalness={0} />
      </mesh>
      <mesh geometry={earthEdge} receiveShadow castShadow>
        <meshStandardMaterial vertexColors roughness={0.99} metalness={0} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function RoadNetwork() {
  const geometry = useMemo(createRoadGeometry, []);
  const texture = useMemo(createRoadTexture, []);

  useEffect(() => () => texture.dispose(), [texture]);

  return (
    <group>
      <mesh geometry={geometry} receiveShadow castShadow>
        <meshStandardMaterial map={texture} vertexColors roughness={0.99} metalness={0} side={THREE.DoubleSide} />
      </mesh>
      {roadRoutes.map((route) => {
        const curve = new THREE.CatmullRomCurve3(
          route.points.map(([x, z]) => new THREE.Vector3(x, 0, z)),
          false,
          'centripetal',
        );
        const point = curve.getPointAt(route.id === 'main-road' ? 0.6 : 0.52);
        return (
          <Html
            key={route.id}
            position={[point.x, terrainHeightAt(point.x, point.z) + 0.78, point.z]}
            center
            distanceFactor={16}
            zIndexRange={[25, 0]}
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          >
            <span className="cobes-map-road-label">{route.label}</span>
          </Html>
        );
      })}
    </group>
  );
}

function groundPoint(sourceU: number, sourceV: number, offsetX = 0, offsetZ = 0): [number, number, number] {
  const [x, z] = sourcePointToWorld(sourceU, sourceV);
  const px = x + offsetX;
  const pz = z + offsetZ;
  return [px, terrainHeightAt(px, pz) + 0.025, pz];
}

function GableRoof({ width, depth, eave, ridge, color = '#78513c' }: { width: number; depth: number; eave: number; ridge: number; color?: string }) {
  const geometry = useMemo(() => {
    const hw = width / 2;
    const hd = depth / 2;
    const vertices = [
      -hw, eave, -hd, 0, ridge, -hd, 0, ridge, hd, -hw, eave, hd,
      0, ridge, -hd, hw, eave, -hd, hw, eave, hd, 0, ridge, hd,
      -hw, eave, -hd, hw, eave, -hd, 0, eave, 0,
      -hw, eave, hd, 0, eave, 0, hw, eave, hd,
    ];
    const indices = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 11, 12, 13];
    const roof = new THREE.BufferGeometry();
    roof.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    roof.setIndex(indices);
    roof.computeVertexNormals();
    return roof;
  }, [depth, eave, ridge, width]);

  return (
    <mesh geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial color={color} roughness={0.88} side={THREE.DoubleSide} />
    </mesh>
  );
}

function House({ position, rotation = 0, roofColor = '#875a40' }: {
  position: [number, number, number];
  rotation?: number;
  roofColor?: string;
}) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh position={[0, 0.105, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.29, 0.21, 0.25]} />
        <meshStandardMaterial color="#786f58" roughness={0.96} />
      </mesh>
      <mesh position={[0, 0.115, 0.128]}>
        <boxGeometry args={[0.045, 0.11, 0.008]} />
        <meshStandardMaterial color="#536156" roughness={0.78} />
      </mesh>
      <GableRoof width={0.34} depth={0.3} eave={0.21} ridge={0.36} color={roofColor} />
    </group>
  );
}

function VillageHomes() {
  const settlements = [
    { id: 'oke-lade', offsets: [[-0.38, -0.22], [0.2, -0.32], [-0.1, 0.37]] as const },
    { id: 'isale-oja', offsets: [[-0.4, -0.24], [0.22, -0.31], [0.42, 0.15]] as const },
    { id: 'oju-oja', offsets: [[-0.28, 0.32], [0.36, -0.18]] as const },
    { id: 'ogidi', offsets: [[-0.34, 0.24], [0.31, 0.18]] as const },
    { id: 'ode-alawon', offsets: [[-0.28, 0.3], [0.34, 0.17]] as const },
    { id: 'ode-aare', offsets: [[-0.32, -0.22], [0.31, 0.22]] as const },
  ] as const;
  const roofs = ['#80543d', '#906044', '#71503d'];

  return (
    <group>
      {settlements.flatMap((settlement, settlementIndex) => {
        const [sourceU, sourceV] = locationById(settlement.id).mapPosition;
        return settlement.offsets.map(([dx, dz], houseIndex) => (
          <House
            key={settlement.id + '-' + houseIndex}
            position={groundPoint(sourceU, sourceV, dx, dz)}
            rotation={(settlementIndex * 0.59 + houseIndex * 0.87) % (Math.PI * 2)}
            roofColor={roofs[(settlementIndex + houseIndex) % roofs.length]}
          />
        ));
      })}
    </group>
  );
}

function Mosque({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0, 0.18, 0]}>
      <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.68, 0.52, 0.58]} />
        <meshStandardMaterial color="#81745a" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.35, 0.299]}>
        <boxGeometry args={[0.17, 0.32, 0.018]} />
        <meshStandardMaterial color="#725944" roughness={0.86} />
      </mesh>
      <mesh position={[0, 0.68, 0]} castShadow>
        <sphereGeometry args={[0.2, 32, 20, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#697e65" roughness={0.75} />
      </mesh>
      <mesh position={[0, 0.81, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 0.17, 8]} />
        <meshStandardMaterial color="#907b52" metalness={0.18} roughness={0.56} />
      </mesh>
      {[-0.42, 0.42].map((x) => (
        <group key={x} position={[x, 0, -0.14]}>
          <mesh position={[0, 0.43, 0]} castShadow>
            <cylinderGeometry args={[0.052, 0.068, 0.86, 18]} />
            <meshStandardMaterial color="#746b55" roughness={0.92} />
          </mesh>
          <mesh position={[0, 0.89, 0]}>
            <sphereGeometry args={[0.074, 18, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#697e65" roughness={0.72} />
          </mesh>
          <mesh position={[0, 1.01, 0]}>
            <coneGeometry args={[0.032, 0.14, 12]} />
            <meshStandardMaterial color="#907b52" roughness={0.62} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Church({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0, -0.18, 0]}>
      <mesh position={[0, 0.24, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.65, 0.4, 0.53]} />
        <meshStandardMaterial color="#77705c" roughness={0.94} />
      </mesh>
      <GableRoof width={0.71} depth={0.59} eave={0.45} ridge={0.62} />
      <mesh position={[-0.23, 0.56, 0.18]} castShadow>
        <boxGeometry args={[0.17, 0.56, 0.18]} />
        <meshStandardMaterial color="#77705c" roughness={0.94} />
      </mesh>
      <mesh position={[-0.23, 0.88, 0.18]} castShadow>
        <coneGeometry args={[0.105, 0.2, 4]} />
        <meshStandardMaterial color="#75513d" roughness={0.86} />
      </mesh>
      <mesh position={[-0.23, 1.03, 0.18]}>
        <boxGeometry args={[0.035, 0.15, 0.035]} />
        <meshStandardMaterial color="#927b50" roughness={0.65} />
      </mesh>
    </group>
  );
}

function Clinic({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0, 0.24, 0]}>
      <mesh position={[0, 0.23, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.76, 0.4, 0.55]} />
        <meshStandardMaterial color="#6e745b" roughness={0.94} />
      </mesh>
      <mesh position={[0, 0.46, 0]} castShadow>
        <boxGeometry args={[0.82, 0.055, 0.62]} />
        <meshStandardMaterial color="#777a6c" roughness={0.92} />
      </mesh>
      {[-0.24, 0.24].map((x) => (
        <mesh key={x} position={[x, 0.27, 0.281]}>
          <boxGeometry args={[0.13, 0.15, 0.012]} />
          <meshStandardMaterial color="#64716a" roughness={0.82} />
        </mesh>
      ))}
      <mesh position={[0, 0.3, 0.284]}>
        <boxGeometry args={[0.09, 0.19, 0.018]} />
        <meshStandardMaterial color="#765843" roughness={0.86} />
      </mesh>
      <mesh position={[0, 0.72, 0.24]}>
        <boxGeometry args={[0.25, 0.22, 0.028]} />
        <meshStandardMaterial color="#9e4940" roughness={0.72} />
      </mesh>
      <mesh position={[0, 0.72, 0.258]}>
        <boxGeometry args={[0.045, 0.17, 0.012]} />
        <meshStandardMaterial color="#c49b58" roughness={0.82} />
      </mesh>
      <mesh position={[0, 0.72, 0.259]}>
        <boxGeometry args={[0.17, 0.045, 0.012]} />
        <meshStandardMaterial color="#c49b58" roughness={0.82} />
      </mesh>
    </group>
  );
}

function Palace({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0, -0.12, 0]}>
      <mesh position={[0, 0.55, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.38, 1.08, 0.42]} />
        <meshStandardMaterial color="#867555" roughness={0.92} />
      </mesh>
      <mesh position={[0, 1.12, 0]} castShadow>
        <boxGeometry args={[0.46, 0.09, 0.5]} />
        <meshStandardMaterial color="#78604a" roughness={0.85} />
      </mesh>
      <mesh position={[0, 1.23, 0]} castShadow>
        <coneGeometry args={[0.2, 0.2, 4]} />
        <meshStandardMaterial color="#76513d" roughness={0.87} />
      </mesh>
      {[-0.12, 0.12].map((x) => (
        <mesh key={x} position={[x, 0.79, 0.213]}>
          <boxGeometry args={[0.055, 0.16, 0.012]} />
          <meshStandardMaterial color="#59665b" roughness={0.79} />
        </mesh>
      ))}
      <mesh position={[0, 0.19, 0.214]}>
        <boxGeometry args={[0.09, 0.32, 0.016]} />
        <meshStandardMaterial color="#735642" roughness={0.88} />
      </mesh>
    </group>
  );
}

const regionLabelSides: Partial<Record<FieldMapLocationId, 1 | -1>> = {
  'oke-lade': 1,
  'isale-oja': 1,
  'oju-oja': 1,
  'ogidi': -1,
  'ode-alawon': -1,
  'oke-iboo': 1,
  'ode-aare': 1,
  'oke-sinniga': 1,
  'sobi-hills': -1,
};

function LandmarkShape({ landmark }: { landmark: FieldMapLandmark }) {
  const position: [number, number, number] = [0, 0, 0];
  switch (landmark.type) {
    case 'mosque':
      return <Mosque position={position} />;
    case 'church':
      return <Church position={position} />;
    case 'clinic':
      return <Clinic position={position} />;
    case 'palace':
      return <Palace position={position} />;
    default:
      return null;
  }
}

function LandmarkModels() {
  return (
    <group>
      {fieldMapLandmarks.map((landmark) => {
        const [x, z] = landmarkPoint(landmark);

        return (
          <group key={landmark.id} position={[x, terrainHeightAt(x, z) + 0.025, z]}>
            <LandmarkShape landmark={landmark} />
          </group>
        );
      })}
    </group>
  );
}

function InteractiveRegionLabels({ selectedLocationId, onSelect }: {
  selectedLocationId: FieldMapLocationId;
  onSelect: (locationId: FieldMapLocationId) => void;
}) {
  return (
    <group>
      {fieldMapLocations.map((location) => {
        const [x, z] = locationPoint(location.id);
        const y = terrainHeightAt(x, z);
        const active = selectedLocationId === location.id;
        const side = regionLabelSides[location.id] ?? (x < 0 ? 1 : -1);
        const labelLift = Math.max(y + 1.15, 2.35);
        const mapU = clamp(location.mapPosition[0], 0, 1);
        const mapV = clamp(location.mapPosition[1], 0, 1);
        const previewPosition = `${150 * mapU - 25}% ${150 * mapV - 25}%`;

        return (
          <group key={location.id} position={[x, 0, z]}>
            <Html position={[side * 0.72, labelLift, 0]} center distanceFactor={13} zIndexRange={[30, 0]} style={{ pointerEvents: 'auto' }}>
              <button
                type="button"
                className={'cobes-map-region-tag ' + (side > 0 ? 'cobes-map-region-tag--east' : 'cobes-map-region-tag--west') + (active ? ' is-active' : '')}
                aria-label={`Show ${location.label} assessment`}
                aria-pressed={active}
                onPointerDown={(event) => event.stopPropagation()}
                onClick={(event) => { event.stopPropagation(); onSelect(location.id); }}
                onPointerEnter={() => { document.body.style.cursor = 'pointer'; }}
                onPointerLeave={() => { document.body.style.cursor = 'auto'; }}
              >
                <span className="cobes-map-region-tag__dot" aria-hidden="true" />
                {location.label}
                <span
                  className="cobes-map-region-tag__preview"
                  style={{ backgroundPosition: previewPosition }}
                  aria-hidden="true"
                />
              </button>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

function LandscapeControls() {
  const { camera, size } = useThree();
  const portrait = size.width / size.height < 1.35;

  useEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;
    camera.position.set(0, portrait ? 12.4 : 9.3, portrait ? 22.8 : 17.2);
    camera.fov = portrait ? 44 : 31;
    camera.updateProjectionMatrix();
  }, [camera, portrait]);

  return (
    <OrbitControls
      makeDefault
      target={[0, 0.45, 0]}
      enablePan={false}
      enableZoom={false}
      enableRotate
      enableDamping
      dampingFactor={0.08}
      rotateSpeed={portrait ? 0.46 : 0.74}
      autoRotate={false}
      minPolarAngle={0.18}
      maxPolarAngle={Math.PI * 0.49}
    />
  );
}

export function FieldLocationsMap({ selectedLocationId, onSelect }: {
  selectedLocationId: FieldMapLocationId;
  onSelect: (locationId: FieldMapLocationId) => void;
}) {
  return (
    <Canvas
      className="cobes-field-map-canvas"
      camera={{ position: [0, 9.3, 17.2], fov: 31, near: 0.1, far: 80 }}
      dpr={[1, 1.45]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      shadows
    >
      <hemisphereLight args={['#cdbb92', '#554b3c', 1.5]} />
      <ambientLight color="#c8b992" intensity={0.48} />
      <directionalLight
        position={[-7, 13, 9]}
        color="#d6c4a0"
        intensity={2.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-12}
        shadow-camera-right={12}
        shadow-camera-top={12}
        shadow-camera-bottom={-12}
        shadow-bias={-0.0002}
      />
      <directionalLight position={[8, 7, -8]} color="#9da992" intensity={0.8} />
      <group>
        <TexturedTerrain />
        <RoadNetwork />
        <VillageHomes />
        <LandmarkModels />
        <InteractiveRegionLabels selectedLocationId={selectedLocationId} onSelect={onSelect} />
      </group>
      <LandscapeControls />
    </Canvas>
  );
}
