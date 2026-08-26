import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import type { Group } from 'three';
import type { CanonicalRegion } from '../../data/projectData';

const anchors: Record<CanonicalRegion, [number, number, number]> = {
  'OKE LADE': [-1.85, 1.05, 0.42],
  'ISALE OJA': [-0.75, 1.65, 0.18],
  'OGIDIYI': [0.45, 1.45, 0.26],
  'OKEBO': [1.85, 0.85, 0.12],
  'ODE ALAWON': [1.7, -0.1, 0.2],
  'AJAKITIPA': [0.9, -1.3, 0.16],
  'OKE SINNIGA': [-0.8, -1.2, 0.12],
  'OJU OJA': [-1.9, -0.35, 0.26],
};

function communityRadius(theta: number) {
  const wide = 1.85;
  const tall = 0.96;
  const bump =
    0.18 * Math.sin(theta * 2.1 + 0.5) +
    0.14 * Math.cos(theta * 4.1 - 1.2) +
    0.12 * Math.sin(theta * 7.4 + 2.8) +
    0.08 * Math.cos(theta * 11.6 - 2.4);
  return (wide + bump) * (0.7 + 0.3 * Math.cos(theta * 0.8));
}

function terrainNoise(x: number, y: number) {
  return (
    Math.sin(x * 1.6 + y * 1.15) * 0.18 +
    Math.cos(y * 1.85 - x * 0.9) * 0.12 +
    Math.sin((x - y) * 0.95) * 0.07
  );
}

function CommunityMapPoints({ baseRadius = 3.0 }: { baseRadius?: number }) {
  const { viewport } = useThree();
  const density = viewport.width < 420 ? 0.22 : viewport.width < 900 ? 0.15 : 0.11;

  const data = useMemo(() => {
    const positions: number[] = [];
    const colors: number[] = [];

    for (let x = -baseRadius * 1.45; x <= baseRadius * 1.45; x += density) {
      for (let y = -baseRadius * 1.1; y <= baseRadius * 1.1; y += density) {
        const theta = Math.atan2(y, x);
        const radial = Math.hypot(x, y);
        const boundary = communityRadius(theta) * 1.1;

        if (radial <= boundary) {
          const z = terrainNoise(x, y) * 0.8;
          positions.push(x, y, z);

          const depth = THREE.MathUtils.clamp(0.38 + z * 0.7, 0.18, 1);
          colors.push(
            THREE.MathUtils.lerp(0.16, 0.85, depth),
            THREE.MathUtils.lerp(0.38, 0.96, depth),
            THREE.MathUtils.lerp(0.54, 1, depth),
          );
        }
      }
    }

    return { positions: new Float32Array(positions), colors: new Float32Array(colors) };
  }, [baseRadius, density]);

  return (
    <points rotation={[-0.42, 0.1, 0.12]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[data.positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[data.colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={viewport.width < 600 ? 0.04 : 0.055}
        sizeAttenuation
        transparent
        opacity={0.92}
        depthWrite={false}
      />
    </points>
  );
}

function RegionNetwork({ selected, onSelect }: { selected: CanonicalRegion; onSelect: (region: CanonicalRegion) => void }) {
  const group = useRef<Group>(null);
  const baseRadius = 3.0;

  // small glow helper using additive blending — refined and subtly animated
  function GlowSphere({ active, color }: { active: boolean; color: string }) {
    const ref = useRef<THREE.Mesh>(null);
    useFrame((state) => {
      if (!ref.current) return;
      const t = Math.sin(state.clock.elapsedTime * 2.0) * 0.5 + 0.5;
      const base = active ? 0.08 : 0.04;
      // material can be an array or single material — cast to any to set opacity safely
      const mat: any = ref.current.material;
      if (mat) mat.opacity = base + (active ? t * 0.04 : t * 0.02);
    });
    return (
      <mesh ref={ref} scale={active ? [2.6, 2.6, 2.6] : [2, 2, 2]}>
        <sphereGeometry args={[active ? 0.14 : 0.12, 16, 12]} />
        <meshBasicMaterial color={color} transparent opacity={active ? 0.08 : 0.04} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    );
  }

  const boundary = useMemo(() => {
    const pts: [number, number, number][] = [];
    const steps = 220;
    for (let i = 0; i < steps; i++) {
      const theta = (i / steps) * Math.PI * 2;
      const radial = communityRadius(theta) * 1.15;
      const x = Math.cos(theta) * radial;
      const y = Math.sin(theta) * radial * 0.72;
      const z = terrainNoise(x, y) * 0.9;
      pts.push([x, y, z]);
    }
    return pts;
  }, []);

  const contourLines = useMemo(() => {
    return Array.from({ length: 5 }, (_, index) => {
      const offset = 0.18 + index * 0.14;
      const pts: [number, number, number][] = [];
      const steps = 120;
      for (let i = 0; i < steps; i++) {
        const theta = (i / steps) * Math.PI * 2;
        const radial = communityRadius(theta) * (1 + offset * 0.2);
        const x = Math.cos(theta) * radial;
        const y = Math.sin(theta) * radial * 0.72;
        const z = terrainNoise(x, y) * 0.85 + offset * 0.06;
        pts.push([x, y, z]);
      }
      return pts;
    });
  }, []);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.09;
      group.current.rotation.x = -0.34 + Math.sin(state.clock.elapsedTime * 0.25) * 0.12;
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.18) * 0.08;
    }
  });

  const regionEntries = Object.entries(anchors) as [CanonicalRegion, [number, number, number]][];

  return (
    <group ref={group}>
      {/* region boundary and contour lines removed for a seamless, integrated look */}

      {regionEntries.map(([region, anchor]) => {
        const active = selected === region;
        const x = anchor[0];
        const y = anchor[1];
        const z = anchor[2] + terrainNoise(x, y) * 0.32 + (active ? 0.08 : 0);
        return (
          <group key={region} position={[x, y, z]}>
            {/* Replaced sprites with small embedded spheres so points sit flush on terrain */}
            <mesh
              onClick={() => onSelect(region)}
              onPointerOver={(event) => {
                event.stopPropagation();
                document.body.style.cursor = 'pointer';
              }}
              onPointerOut={() => {
                document.body.style.cursor = 'auto';
              }}
              scale={active ? [1.15, 1.15, 1.15] : [1, 1, 1]}
            >
              <sphereGeometry args={[active ? 0.12 : 0.08, 16, 12]} />
              <meshStandardMaterial
                color={active ? '#dfffe8' : '#58e08b'}
                emissive={active ? '#86ffb0' : '#2ea86a'}
                emissiveIntensity={active ? 1.0 : 0.6}
                metalness={0.18}
                roughness={0.28}
                transparent
                opacity={0.98}
                depthWrite={false}
              />
            </mesh>
            {/* refined glow proxy (animated) */}
            <GlowSphere active={active} color={active ? '#86ffb0' : '#3ad17a'} />


            <Html
              center
              distanceFactor={7}
              style={{
                pointerEvents: 'none',
                opacity: active ? 1 : 0.85,
                filter: active ? 'drop-shadow(0 0 12px rgba(46, 168, 106, 0.6))' : 'none',
              }}
            >
              <span className={active ? 'network-label active' : 'network-label'}>{region}</span>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export function CommunityScene({ selected, onSelect }: { selected: CanonicalRegion; onSelect: (region: CanonicalRegion) => void }) {
  return (
    <div className="community-scene">
      <Canvas camera={{ position: [0, 0, 9.2], fov: 38 }} dpr={[1, 1.5]}>
        <fog attach="fog" args={['#050b12', 8, 18]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 5, 6]} color="#58e08b" intensity={1.4} />
        <pointLight position={[0, 3.5, 5]} color="#3ad17a" intensity={3.2} />
        <pointLight position={[-5, -4, 3]} color="#2ea86a" intensity={1.2} />
        <Stars radius={35} depth={16} count={120} factor={1.25} saturation={0.1} fade />
        <CommunityMapPoints baseRadius={3.1} />
        <RegionNetwork selected={selected} onSelect={onSelect} />

        <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.45} dampingFactor={0.08} />
      </Canvas>
      <div className="network-caption"><i /> COMMUNITY MAP</div>
    </div>
  );
}
