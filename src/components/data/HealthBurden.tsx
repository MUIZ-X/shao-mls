import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useMemo, useState } from 'react';
import { healthChallengeData } from '../../data/projectData';

function Segment({ item, start, active, onActive }: { item: typeof healthChallengeData[number]; start: number; active: boolean; onActive: (name?: string) => void }) {
  const geometry = useMemo(() => {
    const end = start + (item.value / 100) * Math.PI * 2;
    const shape = new THREE.Shape();
    shape.absarc(0, 0, 2.7, start + 0.012, end - 0.012, false);
    shape.absarc(0, 0, 1.35, end - 0.012, start + 0.012, true);
    shape.closePath();
    return new THREE.ExtrudeGeometry(shape, { depth: 0.42, bevelEnabled: false });
  }, [item.value, start]);
  const mid = start + (item.value / 100) * Math.PI;
  const lift = active ? 0.22 : 0;
  return <mesh geometry={geometry} position={[Math.cos(mid) * lift, Math.sin(mid) * lift, active ? 0.22 : 0]} rotation={[0, 0, 0]} onPointerOver={(event) => { event.stopPropagation(); onActive(item.name); }} onPointerOut={() => onActive()}>
    <meshStandardMaterial color={item.color} roughness={0.35} metalness={0.22} />
  </mesh>;
}

function HealthScene({ active, onActive }: { active?: string; onActive: (name?: string) => void }) {
  let start = Math.PI / 2;
  return <group>{healthChallengeData.map((item) => { const current = start; start += (item.value / 100) * Math.PI * 2; return <Segment key={item.name} item={item} start={current} active={active === item.name} onActive={onActive} />; })}</group>;
}

export function HealthBurden() {
  const [active, setActive] = useState<string>();
  const selected = healthChallengeData.find((item) => item.name === active);
  return <section id="health-burden" className="section-shell py-20">
    <div className="eyebrow">Authoritative health-challenge distribution</div><h2>What the community reports most often.</h2>
    <p className="lede">The supplied health-challenges visual is reproduced here as one shared dataset: an interactive 3D radial chart, a 2D comparison, and an accessible table.</p>
    <div className="health-layout">
      <div className="health-3d"><Canvas camera={{ position: [0, 0, 10], fov: 34 }}><ambientLight intensity={1.4} /><directionalLight position={[4, -4, 8]} intensity={2} /><HealthScene active={active} onActive={setActive} /><OrbitControls enablePan={false} minDistance={7} maxDistance={12} /></Canvas><div className="chart-tooltip">{selected ? <><strong>{selected.name.toUpperCase()}</strong><span>{selected.value}%</span><small>Community-reported health challenge</small></> : <><strong>Explore the chart</strong><small>Hover a segment for its value</small></>}</div></div>
      <div className="health-bars">{healthChallengeData.map((item) => <div key={item.name} className="bar-row"><span>{item.name}</span><div><i style={{ width: `${item.value}%`, background: item.color }} /></div><b>{item.value}%</b></div>)}</div>
    </div>
    <div className="table-wrap"><table><caption>Health challenge distribution from supplied HEALTH-PROBLEMS.jpg</caption><thead><tr><th>Health challenge</th><th>Reported distribution</th></tr></thead><tbody>{healthChallengeData.map((item) => <tr key={item.name}><td>{item.name}</td><td>{item.value}%</td></tr>)}</tbody></table></div>
  </section>;
}
