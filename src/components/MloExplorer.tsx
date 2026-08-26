function MloExplorer() {
  const [selectedMloId, setSelectedMloId] = useState(mloItems[0].id);
  const selectedMlo = useMemo(
    () => mloItems.find((item) => item.id === selectedMloId) ?? mloItems[0],
    [selectedMloId],
  );
  const selectedIndex = mloItems.findIndex(
    (item) => item.id === selectedMlo.id,
  );

  return (
    <section
      id="learning-experience"
      className="cobes-mlo scroll-target"
      aria-labelledby="mlo-heading"
    >
      <div className="cobes-container cobes-section-content">
        <motion.div
          className="cobes-section-heading cobes-section-heading--split"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div>
            <p className="cobes-eyebrow">Minimum Learning Objectives</p>
            <h2 id="mlo-heading">Explore the fieldwork experience.</h2>
          </div>
          <p>
            Eleven objectives document what was assessed, learned, delivered and
            demonstrated during the COBES experience in Shao Community.
          </p>
        </motion.div>

        <div
          className="cobes-mlo__grid"
          role="tablist"
          aria-label="Minimum Learning Objectives"
        >
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
                className={`cobes-mlo-card ${active ? "is-active" : ""}`}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.38,
                  delay: Math.min(index * 0.035, 0.22),
                  ease: "easeOut",
                }}
                onClick={() => setSelectedMloId(item.id)}
              >
                <span className="cobes-mlo-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="cobes-mlo-card__type">
                  {groupLabels[item.kind]}
                </span>
                <strong>{item.title}</strong>
                <span className="cobes-mlo-card__arrow" aria-hidden="true">
                  <ArrowDownRight size={18} />
                </span>
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
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <header className="cobes-mlo-panel__top">
              <div>
                <p className="cobes-eyebrow">{selectedMlo.source}</p>
                <h3>{selectedMlo.title}</h3>
                <p className="cobes-mlo-panel__objective">
                  {selectedMlo.objective}.
                </p>
              </div>
              <div className="cobes-mlo-panel__badge">
                <Sparkles size={17} aria-hidden="true" />{" "}
                {String(selectedIndex + 1).padStart(2, "0")} / 11
              </div>
            </header>

            <div className="cobes-mlo-panel__flow">
              {selectedMlo.blocks.map((block, index) => {
                if (block.kind === "media")
                  return (
                    <MediaBlock
                      block={block}
                      key={`${selectedMlo.id}-media-${index}`}
                    />
                  );
                return (
                  <section
                    className="cobes-mlo-note-section"
                    key={`${selectedMlo.id}-${block.heading}-${index}`}
                  >
                    <h4>{block.heading}</h4>
                    {block.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={`${block.heading}-${paragraphIndex}`}>
                        {paragraph}
                      </p>
                    ))}
                  </section>
                );
              })}
            </div>

            <footer className="cobes-mlo-panel__footer">
              <ChevronRight size={17} aria-hidden="true" />
              <span>
                Select another objective above to continue through the MLO
                record.
              </span>
            </footer>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
export default MloExplorer;
