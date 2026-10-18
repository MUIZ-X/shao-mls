import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, CircleCheck, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { learningExperiences } from '../data/cobesContent';

export function LearningExperiencesSection() {
  const [activeExperienceId, setActiveExperienceId] = useState<string | null>(null);
  const activeExperience = learningExperiences.find((experience) => experience.id === activeExperienceId) ?? null;

  useEffect(() => {
    if (!activeExperience) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveExperienceId(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [activeExperience]);

  return (
    <section id="learning-experience" className="cobes-learning scroll-target" aria-labelledby="learning-heading">
      <div className="cobes-container cobes-section-content">
        <motion.div
          className="cobes-section-heading cobes-section-heading--split"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div>
            <p className="cobes-eyebrow">Learning experience</p>
            <h2 id="learning-heading">Shared moments from the field.</h2>
          </div>
          <p>Open a fieldwork story to see a few moments and a short note from our time in Shao.</p>
        </motion.div>

        <div className="cobes-learning-row" aria-label="Learning experience cards">
          {learningExperiences.map((experience, index) => (
            <motion.button
              id={`learning-${experience.id}`}
              key={experience.id}
              type="button"
              className="cobes-learning-card"
              onClick={() => setActiveExperienceId(experience.id)}
              aria-haspopup="dialog"
              aria-label={`View photos and note about ${experience.title}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.36, delay: index * 0.07 }}
            >
              <img src={experience.image} alt="" loading="lazy" />
              <span className="cobes-learning-card__shade" />
              <span className="cobes-learning-card__meta">Field experience</span>
              <strong>{experience.title}</strong>
              <span className="cobes-learning-card__arrow"><ArrowDownRight aria-hidden="true" size={19} /></span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeExperience && (
          <motion.div
            className="cobes-learning-modal-backdrop"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setActiveExperienceId(null);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.section
              className="cobes-learning-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="learning-modal-title"
              initial={{ opacity: 0, y: 20, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.99 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <button type="button" className="cobes-modal__close" aria-label="Close learning experience" onClick={() => setActiveExperienceId(null)}>
                <X aria-hidden="true" size={19} />
              </button>
              <div className="cobes-learning-modal__gallery" aria-label={`${activeExperience.title} photos`}>
                {activeExperience.gallery.map((photo, index) => (
                  <figure className={index === 0 ? 'is-featured' : undefined} key={photo.src}>
                    <img src={photo.src} alt={photo.alt} />
                    <figcaption>{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
              <div className="cobes-learning-modal__content">
                <p className="cobes-eyebrow">Learning experience · Shao</p>
                <h2 id="learning-modal-title">{activeExperience.title}</h2>
                <p>{activeExperience.description}</p>
                <div className="cobes-learning-feature__outcome">
                  <CircleCheck aria-hidden="true" size={18} />
                  <span>{activeExperience.outcome}</span>
                </div>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
