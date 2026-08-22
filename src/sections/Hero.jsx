import { useNavigate } from 'react-router-dom';
import Shuffle from '../components/Shuffle';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <main className="max-w-[1200px] mx-auto px-gutter py-[96px] min-h-[calc(100vh-76px)] flex items-center relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">

        {/* Left: hero copy */}
        <div className="md:col-span-7 flex flex-col justify-center gap-6">
          <Shuffle
            text="PRODUCT MANAGER · 2 YRS EXPERIENCE"
            tag="span"
            shuffleDirection="right"
            duration={0.3}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.025}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
            loop={false}
            className="font-mono text-[12px] leading-4 tracking-widest text-primary uppercase"
            textAlign="left"
          />

          <Shuffle
            text="Hi, I'm Chen Siyi."
            tag="h1"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
            loop={false}
            className="font-sans-headline text-[48px] md:text-[56px] leading-[1.1] font-extrabold tracking-tight text-primary"
            textAlign="left"
          />

          <p className="font-sans-body text-[18px] leading-[28px] text-on-surface-variant max-w-xl">
            24 years old. I build user-centered products that bridge
            technology and business value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="btn-primary" onClick={() => navigate('/experience')}>
              View My Work
            </button>
            <button className="btn-ghost" onClick={() => navigate('/contact')}>
              Contact Me
            </button>
          </div>
        </div>

        {/* Right: personal info glass card */}
        <div className="md:col-span-5 flex justify-center items-center mt-12 md:mt-0">
          <div
            className="glass-card-hover w-full max-w-sm p-8 relative overflow-hidden group"
            style={{ boxShadow: '0 0 40px rgba(255,76,135,0.08)' }}
          >
            {/* Inner soft glow on hover */}
            <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />

            <div className="space-y-8 relative z-10">
              {/* Abstract glow circle (no photo) */}
              <div
                className="w-24 h-24 mx-auto rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #ff4c87, #6d11ad)',
                  opacity: 0.85,
                  filter: 'blur(1px)',
                  boxShadow: '0 0 24px rgba(255,76,135,0.5)',
                }}
              >
                <span className="material-symbols-outlined text-4xl text-white" style={{ filter: 'blur(0)' }}>
                  person
                </span>
              </div>

              {/* Stats */}
              <div className="space-y-4">
                {[
                  { label: 'Name',       value: 'Chen Siyi',  highlight: false },
                  { label: 'Age',        value: '24',          highlight: false },
                  { label: 'Experience', value: '2 Years',     highlight: true  },
                ].map(({ label, value, highlight }, i, arr) => (
                  <div
                    key={label}
                    className={`flex justify-between items-center pb-3 ${
                      i < arr.length - 1 ? 'border-b border-white/[0.10]' : ''
                    }`}
                  >
                    <span className="font-mono text-[12px] tracking-widest text-on-surface-variant">
                      {label}
                    </span>
                    <span
                      className={`font-sans-body text-[16px] font-semibold ${
                        highlight ? 'text-primary' : 'text-on-surface'
                      }`}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
