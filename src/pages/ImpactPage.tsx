import { projectStatus } from '../data/projectData';
export function ImpactPage() {
    return <main><section className="section-shell page-intro">
        <p>Let's impact the world ShaoNova</p>
        <div className="eyebrow">Project status</div><h1>Impact is reported when it is evidenced.</h1><p className="lede">The project is in Week {projectStatus.currentWeek}. Outcomes and impact measures will be added from verified records, rather than estimated during active fieldwork.</p><div className="impact-flow"><span>TEST</span><i>↓</i><span>DIAGNOSE</span><i>↓</i><span>TREAT</span><i>↓</i><span>MONITOR</span></div></section></main>;
}
