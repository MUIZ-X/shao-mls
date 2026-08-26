import { useState } from 'react';
import { canonicalRegions } from '../data/projectData';
import { RegionDataExplorer } from './data/RegionDataExplorer';
import { CommunityScene } from './3d/CommunityScene';

export function CommunityMap() {
  const [selected, setSelected] = useState<(typeof canonicalRegions)[number]>('OKE LADE');
  return <section id="community-map" className="section-shell py-20"><div className="eyebrow">Community data explorer</div><h2>Regional evidence, made legible.</h2><p className="lede">Select a verified community region to review its source-backed response distribution. Geographic coordinates are not yet verified, so this register prioritizes data clarity over an implied map.</p><div className="community-network"><CommunityScene selected={selected} onSelect={setSelected} /></div><div className="region-focus-inline"><span>Selected registry region</span><strong>{selected}</strong><p>Region {String(canonicalRegions.indexOf(selected) + 1).padStart(2, '0')} of {canonicalRegions.length} in the verified Shao community register. Click a network point or select a region below to inspect its responses.</p></div><div className="map-register" role="tablist" aria-label="Community regions">{canonicalRegions.map((region, index) => <button type="button" role="tab" aria-selected={selected === region} key={region} className={selected === region ? 'selected' : ''} onClick={() => setSelected(region)}><span>0{index + 1}</span><b>{region}</b><i>View data</i></button>)}</div><RegionDataExplorer region={selected} /></section>;
}