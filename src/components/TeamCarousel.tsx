import React, { useEffect, useRef, useState } from 'react';

const slides = [
  {
    name: 'Dr. A. O. Olu',
    role: 'Faculty Supervisor',
    img: 'https://picsum.photos/seed/faculty1/800/600',
  },
  {
    name: 'Prof. R. K. Bello',
    role: 'Field Coordinator',
    img: 'https://picsum.photos/seed/faculty2/800/600',
  },
  {
    name: 'Jane Doe',
    role: 'Student - MLS',
    img: 'https://picsum.photos/seed/student1/800/600',
  },
  {
    name: 'John Smith',
    role: 'Student - MLS',
    img: 'https://picsum.photos/seed/student2/800/600',
  },
  {
    name: 'Community Rep',
    role: 'Local Collaborator',
    img: 'https://picsum.photos/seed/community1/800/600',
  },
  {
    name: 'Field Support',
    role: 'Volunteer',
    img: 'https://picsum.photos/seed/community2/800/600',
  },
];

export default function TeamCarousel({ autoPlayMs = 3000 }: { autoPlayMs?: number }) {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    // autoplay timer
    timer.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, autoPlayMs);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [autoPlayMs]);

  useEffect(() => {
    // perform sliding transform
    const el = sliderRef.current;
    if (!el) return;
    const slideWidth = (el.children[0] as HTMLElement)?.offsetWidth || 320;
    const gap = 16; // matches CSS gap
    const x = -(slideWidth + gap) * index;
    el.style.transform = `translate3d(${x}px,0,0)`;
  }, [index]);

  return (
    <div className="team-carousel" aria-roledescription="carousel">
      <div className="slider" ref={sliderRef}>
        {/* duplicated slides to create a seamless feel when looping */}
        {slides.concat(slides).map((s, i) => (
          <article className="team-slide" key={`${s.name}-${i}`}>
            <img className="avatar" src={s.img} alt={`${s.name} photo`} />
            <span className="eyebrow">{s.role}</span>
            <h3>{s.name}</h3>
            <p>Profile details will be added from approved COBES project records.</p>
          </article>
        ))}
      </div>
      <div className="controls" aria-hidden>
        {slides.map((_, i) => (
          <div key={i} className={i === (index % slides.length) ? 'dot active' : 'dot'} />
        ))}
      </div>
    </div>
  );
}
