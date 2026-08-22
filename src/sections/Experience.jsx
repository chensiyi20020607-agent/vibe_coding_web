import { useRef, useState, useCallback } from 'react';
import { experiences } from '../data/experience';
import Shuffle from '../components/Shuffle';

export default function Experience() {
  const sliderRef      = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX     = useRef(0);
  const dragScrollLeft = useRef(0);

  /* ── snap to closest slide ── */
  const snapToClosest = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const idx = Math.round(slider.scrollLeft / slider.clientWidth);
    slider.scrollTo({ left: idx * slider.clientWidth, behavior: 'smooth' });
  }, []);

  /* ── drag handlers ── */
  const onMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current     = e.pageX - sliderRef.current.offsetLeft;
    dragScrollLeft.current = sliderRef.current.scrollLeft;
  };
  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    snapToClosest();
  };
  const onMouseLeave = () => {
    if (!isDragging) return;
    setIsDragging(false);
    snapToClosest();
  };
  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeft = dragScrollLeft.current - (x - dragStartX.current) * 1.5;
  };

  return (
    <div
      ref={sliderRef}
      className="relative flex-grow flex overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth w-full"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >

      {/* ── Slides ── */}
      {experiences.map((exp) => (
        <section
          key={exp.id}
          className="snap-center shrink-0 w-screen h-[calc(100vh-76px)] flex items-center justify-center px-gutter md:px-margin-desktop relative"
        >
          <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">

            {/* Left: role info */}
            <div
              className="md:col-span-5 glass-card p-8 flex flex-col justify-center"
              style={{ backdropFilter: 'blur(24px)' }}
            >
              <div className="mb-6">
                <Shuffle
                  text={`${exp.company} · ${exp.project}`}
                  tag="h2"
                  shuffleDirection="right"
                  duration={0.3}
                  animationMode="evenodd"
                  shuffleTimes={1}
                  ease="power3.out"
                  stagger={0.025}
                  threshold={0.05}
                  triggerOnce={false}
                  triggerOnHover={true}
                  respectReducedMotion={true}
                  loop={false}
                  className="font-display-logo text-[28px] leading-tight text-on-surface mb-3"
                  textAlign="left"
                />
                <span className="inline-block font-sans-body text-[15px] font-semibold text-on-primary bg-primary px-4 py-1.5 rounded-lg">
                  {exp.role}
                </span>
              </div>
              <div className="font-mono text-[12px] tracking-widest text-on-surface-variant border border-outline-variant px-4 py-2 rounded-full w-fit">
                {exp.period}
              </div>
            </div>

            {/* Right: description + deliverables */}
            <div
              className="md:col-span-7 glass-card p-8 flex flex-col justify-between"
              style={{ backdropFilter: 'blur(24px)' }}
            >
              <ul className="space-y-4 mb-8">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-0.5 shrink-0">▸</span>
                    <span className="font-sans-body text-[16px] leading-relaxed text-on-surface-variant">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div>
                <h4 className="font-mono text-[11px] tracking-widest text-on-surface-variant uppercase mb-3 pb-2 border-b border-outline-variant/40">
                  Key Deliverables
                </h4>
                <div className="flex gap-4 flex-wrap">
                  {exp.deliverables.map((d, i) => (
                    <div
                      key={i}
                      className="flex-1 min-w-[120px] h-32 border-2 border-dashed border-primary/30 rounded-xl flex items-center justify-center hover:border-primary/50 transition-colors"
                      style={{ background: 'rgba(255,255,255,0.03)' }}
                    >
                      <span className="font-mono text-[11px] text-on-surface-variant italic text-center px-2">
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
