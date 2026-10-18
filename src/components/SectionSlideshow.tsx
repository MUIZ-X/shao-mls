import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type SectionSlideshowProps = {
  slides: readonly string[];
};

export function SectionSlideshow({ slides }: SectionSlideshowProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="cobes-section-slideshow" aria-hidden="true">
      <AnimatePresence initial={false}>
        <motion.img
          key={slides[activeSlide]}
          src={slides[activeSlide]}
          alt=""
          className="cobes-section-slideshow__image"
          initial={{ opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.015 }}
          transition={{ duration: 1.25, ease: 'easeInOut' }}
        />
      </AnimatePresence>
      <div className="cobes-section-slideshow__scrim" />
    </div>
  );
}
