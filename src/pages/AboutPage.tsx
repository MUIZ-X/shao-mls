import TeamCarousel from '../components/TeamCarousel';

const pillars = [
  ['Listen first', 'Document community priorities before proposing interventions.'],
  ['Stand with science', 'Connect diagnosis, laboratory knowledge, prevention, and care.'],
  ['Work with community', 'Build trust with residents, leaders, health workers, and institutions.'],
] as const;

export function AboutPage() {
  return (
    <main className="section-shell page-intro">
      <div className="eyebrow">About COBES</div>
      <h1>Education and service, accountable to evidence.</h1>
      <p className="lede">The Community-Based Education and Service programme brings Medical Laboratory Science students into a community setting to understand health needs, support health literacy, and inform responsible action through collaborative fieldwork.</p>

      <div id="objectives" className="principles">
        {pillars.map(([title, detail]) => (
          <article key={title}><b>{title}</b><p>{detail}</p></article>
        ))}
      </div>

      <section id="project-information" className="about-detail">
        <div>
          <span className="eyebrow">Project information</span>
          <h2>Evidence before assertion.</h2>
        </div>
        <p>COBES records its work from supplied source material and separates verified findings from information that requires further review. Community data, fieldwork activity, and supporting documentation are available throughout this project archive.</p>
      </section>

      <section id="team" className="team-section">
        <div className="team-heading">
          <div>
            <span className="eyebrow">Project team</span>
            <h2>The people behind the fieldwork.</h2>
          </div>
          <p className="lede">Team profiles will be published here when names, roles, biographies, and approved images have been verified for public release.</p>
        </div>

        {/* Replace static grid with an automatic, looping carousel of dummy team images */}
        <TeamCarousel />

      </section>

      <section id="theme" className="theme-line">TOGETHER FOR HEALTH <span>&middot;</span> STAND WITH SCIENCE</section>
    </main>
  );
}
