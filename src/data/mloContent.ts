import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, ChevronRight, Play, Image as ImageIcon, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { mloItems, type MloContentBlock } from '../data/mloContent_v2';
 
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
  const selectedMlo = useMemo(
    () => mloItems.find((item) => item.id === selectedMloId) ?? mloItems[0],
    [selectedMloId],
  );
  const selectedIndex = mloItems.findIndex((item) => item.id === selectedMlo.id);
 
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
                onClick={() => setSelectedMloId(item.id)}
              >
                <span className="cobes-mlo-card__number">{String(index + 1).padStart(2, '0')}</span>
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
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
 
3. MLO CSS to inject into index.css
/* =========================================================
   MLO EXPLORER — SHA0 COBES PALETTE
   Inject once into index.css.
   Uses only the approved website colours:
   #0A192F #112240 #1B2A41 #1DB954 #1ED760
   #FFFFFF #A8B2D1 #B3B3B3 #233554
========================================================= */
 
.cobes-mlo {
  position: relative;
  padding: 5.5rem 0;
  background: #0A192F;
  color: #FFFFFF;
}
 
.cobes-mlo__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.85rem;
  margin-top: 2rem;
}
 
.cobes-mlo-card {
  position: relative;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0.35rem;
  padding: 1.15rem;
  overflow: hidden;
  border: 1px solid #233554;
  border-radius: 16px;
  background: #112240;
  color: #FFFFFF;
  font: inherit;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 12px 28px rgba(0,0,0,.16);
  transition: transform .28s ease, border-color .28s ease, box-shadow .28s ease, background .28s ease;
}
 
.cobes-mlo-card:hover {
  transform: translateY(-4px);
  border-color: #1DB954;
  box-shadow: 0 18px 34px rgba(0,0,0,.22);
}
 
.cobes-mlo-card.is-active {
  transform: translateY(8px);
  background: #1B2A41;
  border-color: #1DB954;
  box-shadow: 0 20px 38px rgba(0,0,0,.28);
}
 
.cobes-mlo-card__number {
  position: absolute;
  top: .8rem;
  right: .9rem;
  color: #A8B2D1;
  font-size: .72rem;
  font-weight: 800;
  letter-spacing: .08em;
}
 
.cobes-mlo-card.is-active .cobes-mlo-card__number { color: #1DB954; }
 
.cobes-mlo-card__type {
  color: #A8B2D1;
  font-size: .68rem;
  font-weight: 750;
  letter-spacing: .08em;
  text-transform: uppercase;
}
 
.cobes-mlo-card strong {
  max-width: 12rem;
  color: #FFFFFF;
  font-size: 1.08rem;
  line-height: 1.2;
  letter-spacing: -.02em;
}
 
.cobes-mlo-card__arrow {
  position: absolute;
  right: .9rem;
  bottom: .85rem;
  color: #A8B2D1;
  opacity: .75;
  transition: transform .25s ease, color .25s ease;
}
 
.cobes-mlo-card:hover .cobes-mlo-card__arrow,
.cobes-mlo-card.is-active .cobes-mlo-card__arrow {
  transform: translate(3px,3px);
  color: #1DB954;
}
 
.cobes-mlo-panel {
  margin-top: 1.8rem;
  overflow: hidden;
  border: 1px solid #233554;
  border-radius: 22px;
  background: #112240;
  box-shadow: 0 24px 55px rgba(0,0,0,.28);
}
 
.cobes-mlo-panel__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  padding: clamp(1.25rem, 3vw, 2.25rem);
  border-bottom: 1px solid #233554;
  background: #1B2A41;
}
 
.cobes-mlo-panel__top h3 {
  margin: .25rem 0 .75rem;
  color: #FFFFFF;
  font-size: clamp(1.55rem, 3vw, 2.3rem);
  line-height: 1.15;
}
 
.cobes-mlo-panel__objective {
  max-width: 850px;
  margin: 0;
  color: #A8B2D1;
  font-size: .96rem;
  line-height: 1.7;
}
 
.cobes-mlo-panel__badge {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  padding: .55rem .75rem;
  border: 1px solid #233554;
  border-radius: 999px;
  color: #1DB954;
  background: #112240;
  font-size: .78rem;
  font-weight: 800;
}
 
.cobes-mlo-panel__flow {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: clamp(1rem, 3vw, 2rem);
}
 
.cobes-mlo-note-section {
  padding: 1.15rem 0;
}
 
.cobes-mlo-note-section + .cobes-mlo-note-section {
  border-top: 1px solid #233554;
}
 
.cobes-mlo-note-section h4 {
  margin: 0 0 .7rem;
  color: #FFFFFF;
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  line-height: 1.3;
  letter-spacing: -.01em;
}
 
.cobes-mlo-note-section h4::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 1.05em;
  margin-right: .6rem;
  vertical-align: -.12em;
  border-radius: 4px;
  background: #1DB954;
}
 
.cobes-mlo-note-section p {
  max-width: 920px;
  margin: 0 0 .85rem;
  color: #A8B2D1;
  font-size: clamp(.92rem, 1.6vw, 1rem);
  line-height: 1.85;
}
 
.cobes-mlo-note-section p:last-child { margin-bottom: 0; }
 
.cobes-mlo-media-block {
  margin: .8rem 0 1.35rem;
  padding: 1rem;
  border: 1px solid #233554;
  border-radius: 16px;
  background: #1B2A41;
}
 
.cobes-mlo-media-block__label {
  display: flex;
  align-items: center;
  gap: .45rem;
  margin-bottom: .75rem;
  color: #1DB954;
  font-size: .78rem;
  font-weight: 800;
  letter-spacing: .04em;
  text-transform: uppercase;
}
 
.cobes-mlo-media-block__asset {
  display: block;
  width: 100%;
  max-height: 560px;
  object-fit: cover;
  border-radius: 11px;
  background: #0A192F;
}
 
.cobes-mlo-media-placeholder {
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .55rem;
  padding: 2rem;
  border: 1px dashed #233554;
  border-radius: 11px;
  background: #0A192F;
  text-align: center;
}
 
.cobes-mlo-media-placeholder svg { color: #1DB954; }
.cobes-mlo-media-placeholder strong { color: #FFFFFF; font-size: 1rem; }
.cobes-mlo-media-placeholder span,
.cobes-mlo-media-placeholder small { max-width: 520px; color: #A8B2D1; line-height: 1.6; }
.cobes-mlo-media-placeholder small { color: #B3B3B3; font-size: .76rem; }
 
.cobes-mlo-panel__footer {
  display: flex;
  align-items: center;
  gap: .45rem;
  padding: 1rem clamp(1rem, 3vw, 2rem);
  border-top: 1px solid #233554;
  color: #A8B2D1;
  font-size: .8rem;
  background: #0A192F;
}
 
.cobes-mlo-panel__footer svg { color: #1DB954; flex: 0 0 auto; }
 
@media (max-width: 980px) {
  .cobes-mlo__grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
 
@media (max-width: 720px) {
  .cobes-mlo { padding: 4rem 0; }
  .cobes-mlo__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .7rem; }
  .cobes-mlo-card { min-height: 132px; padding: 1rem; border-radius: 14px; }
  .cobes-mlo-card strong { font-size: 1rem; }
  .cobes-mlo-panel__top { flex-direction: column; gap: 1rem; }
  .cobes-mlo-panel__badge { align-self: flex-start; }
  .cobes-mlo-media-placeholder { min-height: 210px; padding: 1.5rem; }
}
 
@media (max-width: 460px) {
  .cobes-mlo__grid { grid-template-columns: 1fr; }
  .cobes-mlo-card { min-height: 112px; }
  .cobes-mlo-card strong { font-size: .98rem; }
  .cobes-mlo-panel { border-radius: 16px; }
  .cobes-mlo-panel__top,
  .cobes-mlo-panel__flow { padding: 1rem; }
  .cobes-mlo-note-section p { font-size: .9rem; line-height: 1.78; }
}
