import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="cobes-hero">
      <div className="cobes-hero__backdrop" aria-hidden="true" />
      <div className="cobes-container cobes-hero__layout">
        <div className="cobes-hero__copy">
          <img
            className="cobes-hero__brand"
            src="/cobes-data/shao-imgs/shaonova-logo.png"
            alt="SHAONOVA"
          />
          <p className="cobes-eyebrow">COBES / SHAO COMMUNITY</p>
          <h1>
            Together for Health:
            <span>Stand with Science.</span>
          </h1>
          <p className="cobes-hero__lede">
            Improving community health through evidence, education, prevention and accessible
            laboratory services.
          </p>
          <div className="cobes-button-row">
            <Link className="cobes-button cobes-button--primary" to="/shao-community">
              Explore our community
            </Link>
            <Link className="cobes-button cobes-button--quiet" to="/project">
              Explore our project
            </Link>
          </div>
        </div>

        <aside className="cobes-hero__who-card">
          <div className="cobes-hero__who-topline">
            <span>Community-based learning</span>
            <span>SHAONOVA</span>
          </div>
          <div className="cobes-hero__who-image-wrap">
            <img src="/cobes-data/shao-imgs/WHO-IMG.png" alt="World Health Organization" />
          </div>
          <p className="cobes-eyebrow">Our work in Shao</p>
          <h2>Evidence, education and service.</h2>
          <p>
            A community partnership documenting local health needs and supporting informed action.
          </p>
        </aside>
      </div>
    </section>
  );
}