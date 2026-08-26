import { Link } from 'react-router-dom';
import { HeroSection } from '../components/hero/HeroSection';
import { HealthBurden } from '../components/data/HealthBurden';
import { ProjectTimeline } from '../components/ProjectTimeline';

const metrics = [
  { label: 'Community regions', value: '08', detail: 'Verified community locations mapped into the digital register.' },
  { label: 'Health themes', value: '10+', detail: 'Priority conditions documented through community reporting.' },
  { label: 'Evidence-led', value: '100%', detail: 'All work is anchored to source material and field notes.' },
] as const;

export function HomePage() {
  return (
    <main>
      <HeroSection />

      <section className="section-shell editorial-intro">
        <div className="eyebrow">A community-based education and service project</div>
        <h2>Laboratory science, in conversation with community life.</h2>
        <p className="lede">
          COBES documents the University of Ilorin Medical Laboratory Science team's work with Shao Community: listening,
          assessing, educating, screening, and building evidence for responsible health action.
        </p>
        <Link to="/health-assessment" className="text-link">View the assessment dashboard →</Link>
      </section>

      <section className="metrics-strip" aria-label="Project metrics">
        {metrics.map((metric) => (
          <article key={metric.label} className="metric-card">
            <small>{metric.label}</small>
            <strong>{metric.value}</strong>
            <p>{metric.detail}</p>
          </article>
        ))}
      </section>

      <HealthBurden />
      <ProjectTimeline />
    </main>
  );
}
