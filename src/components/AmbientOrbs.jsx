export default function AmbientOrbs({ variant = 'default' }) {
  const configs = {
    default: [
      { style: { top: '-20%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(255,76,135,0.18) 0%, transparent 70%)' } },
      { style: { bottom: '-20%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(109,17,173,0.12) 0%, transparent 70%)' } },
    ],
    right: [
      { style: { top: '50%', right: '-5%', transform: 'translateY(-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(255,76,135,0.12) 0%, transparent 70%)' } },
    ],
    contact: [
      { style: { top: '-10%', left: '10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,177,194,0.12) 0%, transparent 60%)' } },
      { style: { bottom: '-10%', right: '-5%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(255,177,194,0.07) 0%, transparent 70%)' } },
    ],
  };

  return (
    <>
      {(configs[variant] || configs.default).map((orb, i) => (
        <div
          key={i}
          className="ambient-orb"
          style={{ ...orb.style, position: 'fixed', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }}
        />
      ))}
    </>
  );
}
