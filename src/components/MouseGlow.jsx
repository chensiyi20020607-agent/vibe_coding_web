import { useEffect, useRef, useState } from 'react';

export default function MouseGlow() {
  const pos       = useRef({ x: -300, y: -300 });
  const rafRef    = useRef(null);
  const wrapRef   = useRef(null);
  const [pressing, setPressing] = useState(false);

  useEffect(() => {
    /* smooth follow via rAF */
    const target = { x: -300, y: -300 };
    let current  = { x: -300, y: -300 };

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const onDown = () => setPressing(true);
    const onUp   = () => setPressing(false);

    const tick = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      if (wrapRef.current) {
        wrapRef.current.style.transform =
          `translate(${current.x}px, ${current.y}px) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const beamLen  = pressing ? 180 : 110;
  const beamW    = pressing ? 3   : 2;
  const dotSize  = pressing ? 10  : 6;
  const glowSize = pressing ? 60  : 40;

  const beamStyle = (dir) => {
    const isH = dir === 'left' || dir === 'right';
    const base = {
      position: 'absolute',
      borderRadius: 9999,
      pointerEvents: 'none',
      transition: 'width 180ms ease, height 180ms ease, opacity 180ms ease',
    };

    if (isH) {
      return {
        ...base,
        width:  beamLen,
        height: beamW,
        top: '50%',
        transform: 'translateY(-50%)',
        ...(dir === 'left'  ? { right: '50%' }  : { left: '50%' }),
        background: dir === 'left'
          ? 'linear-gradient(to left,  #ffb1c2 0%, rgba(255,76,135,0.4) 60%, transparent 100%)'
          : 'linear-gradient(to right, #ffb1c2 0%, rgba(255,76,135,0.4) 60%, transparent 100%)',
        boxShadow: `0 0 8px 2px rgba(255,76,135,${pressing ? '0.9' : '0.55'})`,
      };
    }
    return {
      ...base,
      width:  beamW,
      height: beamLen,
      left: '50%',
      transform: 'translateX(-50%)',
      ...(dir === 'up'   ? { bottom: '50%' } : { top: '50%' }),
      background: dir === 'up'
        ? 'linear-gradient(to top,    #ffb1c2 0%, rgba(255,76,135,0.4) 60%, transparent 100%)'
        : 'linear-gradient(to bottom, #ffb1c2 0%, rgba(255,76,135,0.4) 60%, transparent 100%)',
      boxShadow: `0 0 8px 2px rgba(255,76,135,${pressing ? '0.9' : '0.55'})`,
    };
  };

  return (
    <div
      ref={wrapRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    >
      {/* outer diffuse glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width:  glowSize * 2,
        height: glowSize * 2,
        borderRadius: '50%',
        background: pressing
          ? 'radial-gradient(circle, rgba(255,76,135,0.30) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(255,177,194,0.18) 0%, transparent 70%)',
        transition: 'width 180ms ease, height 180ms ease',
        pointerEvents: 'none',
      }} />

      {/* four beams */}
      {['left', 'right', 'up', 'down'].map((dir) => (
        <div key={dir} style={beamStyle(dir)} />
      ))}

      {/* center dot */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width:  dotSize,
        height: dotSize,
        borderRadius: '50%',
        background: '#ffffff',
        boxShadow: pressing
          ? '0 0 12px 5px rgba(255,76,135,1), 0 0 24px 8px rgba(255,76,135,0.5)'
          : '0 0 7px 3px rgba(255,177,194,0.9)',
        transition: 'width 180ms ease, height 180ms ease, box-shadow 180ms ease',
        pointerEvents: 'none',
      }} />
    </div>
  );
}
