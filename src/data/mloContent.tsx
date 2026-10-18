import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, ArrowUp, ChevronRight, Play, Image as ImageIcon, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { mloItems, type MloContentBlock } from '../components/mloContent';
import { getObjectiveThumbnail } from './objectiveMedia';
 
const groupLabels = {
  general: 'General MLO',
  specific: 'Specific MLO',
  optional: 'Optional Study',
} as const;
 
function MediaBlock({ block }: { block: Extract<MloContentBlock, { kind: 'media' }> }) {
  return (
    <motion.div
      className={`cobes-mlo-media-block cobes-mlo-media-block--${block.type}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="cobes-mlo-media-block__label">
        {block.type === 'video' ? <Play size={17} aria-hidden="true" /> : <ImageIcon size={17} aria-hidden="true" />}
        <span>{block.type === 'video' ? 'Video evidence' : 'Visual evidence'}</span>
      </div>
 
      {block.src ? (
        block.type === 'video' ? (
          <video className="cobes-mlo-media-block__asset" src={block.src} poster={block.poster} controls preload="metadata" />
        ) : (
          <img className="cobes-mlo-media-block__asset" src={block.src} alt={block.alt ?? block.label} />
        )
      ) : (
        <div className="cobes-mlo-media-placeholder">
          {block.type === 'video' ? <Play size={34} aria-hidden="true" /> : <ImageIcon size={34} aria-hidden="true" />}
          <strong>{block.label}</strong>
          <span>{block.description}</span>
          <small>{block.type === 'video' ? 'Add an MP4/WebM path to src.' : 'Add a JPG/PNG/WebP path to src.'}</small>
        </div>
      )}
    </motion.div>
  );
}
 
export function MloExplorer() {
  const [selectedMloId, setSelectedMloId] = useState(mloItems[0].id);
  const [showBackToObjectives, setShowBackToObjectives] = useState(false);
  const scrollTimer = useRef<number | undefined>(undefined);
  const selectedMlo = useMemo(
    () => mloItems.find((item) => item.id === selectedMloId) ?? mloItems[0],
    [selectedMloId],
  );
  const selectedIndex = mloItems.findIndex((item) => item.id === selectedMlo.id);

  useEffect(() => () => window.clearTimeout(scrollTimer.current), []);
 
  return (
    <section id="learning-experience" className="cobes-mlo scroll-target" aria-labelledby="mlo-heading">
      <div className="cobes-container cobes-section-content">
        <motion.div
          className="cobes-section-heading cobes-section-heading--split"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div>
            <p className="cobes-eyebrow">Minimum Learning Objectives</p>
            <h2 id="mlo-heading">Explore the fieldwork experience.</h2>
          </div>
          <p>Eleven objectives document what was assessed, learned, delivered and demonstrated during the COBES experience in Shao Community.</p>
        </motion.div>
 
        <div className="cobes-mlo__grid" role="tablist" aria-label="Minimum Learning Objectives">
          {mloItems.map((item, index) => {
            const active = item.id === selectedMlo.id;
            return (
              <motion.button
                key={item.id}
                id={`mlo-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls={`mlo-panel-${item.id}`}
                className={`cobes-mlo-card ${active ? 'is-active' : ''}`}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.38, delay: Math.min(index * 0.035, 0.22), ease: 'easeOut' }}
                onClick={() => {
                  setSelectedMloId(item.id);
                  setShowBackToObjectives(true);
                  window.clearTimeout(scrollTimer.current);
                  scrollTimer.current = window.setTimeout(() => {
                    document.getElementById(`mlo-panel-${item.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
              >
                <img className="cobes-mlo-card__image" src={getObjectiveThumbnail(item.id)} alt="" loading="lazy" />
                <span className="cobes-mlo-card__type">{groupLabels[item.kind]}</span>
                <strong>{item.title}</strong>
                <span className="cobes-mlo-card__arrow" aria-hidden="true"><ArrowDownRight size={18} /></span>
              </motion.button>
            );
          })}
        </div>
 
        <AnimatePresence mode="wait">
          <motion.article
            key={selectedMlo.id}
            id={`mlo-panel-${selectedMlo.id}`}
            role="tabpanel"
            aria-labelledby={`mlo-tab-${selectedMlo.id}`}
            className="cobes-mlo-panel"
            initial={{ opacity: 0, y: 24, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <header className="cobes-mlo-panel__top">
              <div>
                <p className="cobes-eyebrow">{selectedMlo.source}</p>
                <h3>{selectedMlo.title}</h3>
                <p className="cobes-mlo-panel__objective">{selectedMlo.objective}.</p>
              </div>
              <div className="cobes-mlo-panel__badge"><Sparkles size={17} aria-hidden="true" /> {String(selectedIndex + 1).padStart(2, '0')} / 11</div>
            </header>
 
            <div className="cobes-mlo-panel__flow">
              {selectedMlo.blocks.map((block, index) => {
                if (block.kind === 'media') return <MediaBlock block={block} key={`${selectedMlo.id}-media-${index}`} />;
                return (
                  <section className="cobes-mlo-note-section" key={`${selectedMlo.id}-${block.heading}-${index}`}>
                    <h4>{block.heading}</h4>
                    {block.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={`${block.heading}-${paragraphIndex}`}>{paragraph}</p>
                    ))}
                  </section>
                );
              })}
            </div>
 
            <footer className="cobes-mlo-panel__footer">
              <ChevronRight size={17} aria-hidden="true" />
              <span>Select another objective above to continue through the MLO record.</span>
            </footer>

            <AnimatePresence>
              {showBackToObjectives && (
                <motion.button
                  type="button"
                  className="cobes-mlo-panel__back"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  onClick={() => {
                    setShowBackToObjectives(false);
                    document.getElementById(`mlo-tab-${selectedMlo.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                >
                  <span className="cobes-mlo-panel__back-icon"><ArrowUp size={17} aria-hidden="true" /></span>
                  <span><strong>Back to learning experience</strong><small>Return to {selectedMlo.title}</small></span>
                </motion.button>
              )}
            </AnimatePresence>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
