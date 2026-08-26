import { projectStatus, weekOneTimeline } from '../data/projectData';

export function ProjectTimeline() {
  return <section id="journey" className="section-shell py-20"><div className="eyebrow">Project journey</div><h1>Fieldwork, documented.</h1><p className="lede">Week 1 is based on the supplied COBES report. Week 2 and Week 3 intentionally contain no invented activities.</p>
    <div className="week-status"><div><span>Week 1</span><strong>COMPLETED</strong></div><div className="current"><span>Week {projectStatus.currentWeek}</span><strong>{projectStatus.state}</strong></div><div><span>Week {projectStatus.nextWeek}</span><strong>{projectStatus.nextWeekLabel}</strong></div></div>
    <ol className="timeline">{weekOneTimeline.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></li>)}</ol>
    <div className="activity-note"><strong>Week 2 activity register</strong><p>Ready for verified entries as they are documented. No current-week activities have been added from assumption.</p></div>
  </section>;
}
