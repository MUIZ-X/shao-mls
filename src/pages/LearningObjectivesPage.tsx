import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { LearningExperiencesSection } from '../components/LearningExperiencesSection';
import { SectionSlideshow } from '../components/SectionSlideshow';
import { Navbar } from '../components/navigation/Navbar';
import { mloItems, type MloContentBlock, type MloItem } from '../components/mloContent';
import { getObjectiveThumbnail } from '../data/objectiveMedia';

const minimumObjectives = mloItems.filter((item) => item.kind === 'general');
const specificObjectives = mloItems.filter((item) => item.kind === 'specific');
const objectiveBackdropSlides = ['/cobes-data/shao-imgs/shao-mls-outreach.jpg', '/cobes-data/shao-imgs/shao-village.jpg', '/cobes-data/shao-imgs/shaonova-img.jpg'];
const objectiveGroups = {
  general: minimumObjectives,
  specific: specificObjectives,
} as const;

function ActivityVideo({ objective }: { objective: MloItem }) {
  const videoBlock = objective.blocks.find((block) => block.kind === 'media' && block.type === 'video');
  const poster = videoBlock?.kind === 'media' && videoBlock.poster
    ? videoBlock.poster
    : '/cobes-data/shao-imgs/shao-mls-outreach.jpg';

  return (
    <div className="cobes-activity-video" role="group" aria-label={`${objective.title} activity video`}>
      {videoBlock?.kind === 'media' && videoBlock.src ? (
        <video src={videoBlock.src} poster={poster} controls preload="metadata" />
      ) : (
        <>
          <img src={poster} alt="Students taking part in a community health outreach in Shao" />
          <div className="cobes-activity-video__overlay">
            <span className="cobes-activity-video__play"><Play size={25} fill="currentColor" aria-hidden="true" /></span>
            <strong>Activity video coming soon</strong>
            <span>{videoBlock?.kind === 'media' ? videoBlock.description : 'Add a short recording of this activity when footage is available.'}</span>
          </div>
        </>
      )}
    </div>
  );
}

function ObjectiveGallery() {
  const images = [
    { src: '/cobes-data/shao-imgs/shao-mls-outreach.jpg', alt: 'Community medical laboratory science outreach in Shao', caption: 'Community outreach and health education' },
    { src: '/cobes-data/shao-imgs/shaonova-img.jpg', alt: 'Shaonova COBES student team', caption: 'Students learning and working together' },
    { src: '/cobes-data/shao-imgs/shao-village.jpg', alt: 'View of Shao community', caption: 'The community at the centre of the experience' },
  ];

  return (
    <div className="cobes-objective-gallery" role="group" aria-label="COBES activity photographs">
      {images.map((image) => (
        <figure key={image.src}>
          <img src={image.src} alt={image.alt} loading="lazy" />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
function LearningFooter() {
  return (
    <footer className="cobes-footer">
      <div className="cobes-container">
        <div>
          <p className="cobes-eyebrow">University of Ilorin Â· Department of Medical Laboratory Science</p>
          <h2>COBES / Shao Community</h2>
        </div>
        <p>Together for health. Stand with science.</p>
        <Link to="/">Back to home <ArrowRight aria-hidden="true" size={15} /></Link>
      </div>
    </footer>
  );
}

export function LearningObjectivesPage() {
  const location = useLocation();

  useEffect(() => {
    const targetId = decodeURIComponent(location.hash.slice(1));
    if (targetId) {
      window.setTimeout(() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  const [activeGroup, setActiveGroup] = useState<'general' | 'specific'>('general');
  const objectives = objectiveGroups[activeGroup];
  const label = activeGroup === 'general' ? 'MLO' : 'SLO';

  return (
    <div className="cobes-site-shell">
      <Navbar currentPage="learning-objectives" />
      <main>
        <section id="learning-objectives" className="cobes-mlo cobes-objectives-page" aria-labelledby="objectives-heading">
          <SectionSlideshow slides={objectiveBackdropSlides} />
          <div className="cobes-container cobes-section-content">
            <motion.header
              className="cobes-section-heading cobes-objectives-heading"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <p className="cobes-eyebrow">Fieldwork record</p>
              <h1 id="objectives-heading">Learning objectives</h1>
              <p>Explore the six minimum learning objectives and four specific learning objectives from the COBES experience in Shao.</p>
            </motion.header>

            <div className="cobes-objective-tabs" role="tablist" aria-label="Learning objective types">
              <button
                id="objectives-tab-mlo"
                type="button"
                role="tab"
                aria-selected={activeGroup === 'general'}
                aria-controls="objectives-panel"
                className={activeGroup === 'general' ? 'is-active' : ''}
                onClick={() => setActiveGroup('general')}
              >
                Minimum learning objectives <span>6</span>
              </button>
              <button
                id="objectives-tab-slo"
                type="button"
                role="tab"
                aria-selected={activeGroup === 'specific'}
                aria-controls="objectives-panel"
                className={activeGroup === 'specific' ? 'is-active' : ''}
                onClick={() => setActiveGroup('specific')}
              >
                Specific learning objectives <span>4</span>
              </button>
            </div>

            <div id="objectives-panel" role="tabpanel" aria-labelledby={`objectives-tab-${activeGroup === 'general' ? 'mlo' : 'slo'}`}>
              <div className="cobes-mlo__grid cobes-objective-grid">
                {objectives.map((item, index) => (
                  <Link key={item.id} to={`/learning-objectives/${item.id}`} className="cobes-mlo-card">
                    <img className="cobes-mlo-card__image" src={getObjectiveThumbnail(item.id)} alt="" loading="lazy" />
                    <span className="cobes-mlo-card__number">{label} {String(index + 1).padStart(2, '0')}</span>
                    <span className="cobes-mlo-card__type">{label} {index + 1}</span>
                    <strong>{item.title}</strong>
                    <span className="cobes-mlo-card__arrow" aria-hidden="true"><ArrowRight size={18} /></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        <LearningExperiencesSection />
      </main>
      <LearningFooter />
    </div>
  );
}

export function LearningObjectiveDetailPage() {
  const { objectiveId } = useParams<{ objectiveId: string }>();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [objectiveId]);
  const objective = mloItems.find((item) => item.id === objectiveId && item.kind !== 'optional');

  return (
    <div className="cobes-site-shell">
      <Navbar currentPage="learning-objectives" />
      <main>
        <section className="cobes-mlo cobes-objectives-page" aria-labelledby="objective-detail-heading">
          <SectionSlideshow slides={objectiveBackdropSlides} />
          <div className="cobes-container cobes-section-content">
            <Link to="/learning-objectives" className="cobes-objective-back"><ArrowLeft size={17} aria-hidden="true" /> All learning objectives</Link>
            {objective ? <ObjectiveDetail objective={objective} /> : (
              <div className="cobes-mlo-panel cobes-objective-not-found">
                <p className="cobes-eyebrow">Objective not found</p>
                <h1 id="objective-detail-heading">This learning objective is unavailable.</h1>
                <Link className="cobes-button cobes-button--primary" to="/learning-objectives">Return to learning objectives</Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <LearningFooter />
    </div>
  );
}

function ObjectiveDetail({ objective }: { objective: MloItem }) {
  const group = objective.kind === 'general' ? minimumObjectives : specificObjectives;
  const number = group.findIndex((item) => item.id === objective.id) + 1;
  const label = objective.kind === 'general' ? 'MLO' : 'SLO';

  return (
    <motion.article
      className="cobes-mlo-panel cobes-objective-detail"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <header className="cobes-mlo-panel__top">
        <div>
          <p className="cobes-eyebrow">{label === 'MLO' ? 'Minimum learning objective' : 'Specific learning objective'}</p>
          <h1 id="objective-detail-heading">{objective.title}</h1>
          <p className="cobes-mlo-panel__objective">{objective.objective}.</p>
        </div>
        <div className="cobes-mlo-panel__badge"><Sparkles size={17} aria-hidden="true" /> {label} {String(number).padStart(2, '0')} / {group.length}</div>
      </header>

      <ActivityVideo objective={objective} />
      <ObjectiveGallery />

      <div className="cobes-mlo-panel__flow">
        {objective.blocks
          .filter((block): block is Extract<MloContentBlock, { kind: 'content' }> => block.kind === 'content')
          .map((block, index) => (
            <section className="cobes-mlo-note-section" key={`${objective.id}-${block.heading}-${index}`}>
              <h2>{block.heading}</h2>
              {block.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={`${objective.id}-${block.heading}-${paragraphIndex}`}>{paragraph}</p>
              ))}
            </section>
          ))}
      </div>
    </motion.article>
  );
}



