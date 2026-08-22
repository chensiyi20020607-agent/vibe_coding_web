import { useNavigate } from 'react-router-dom';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import Shuffle from '../components/Shuffle';

const contactItems = [
  { icon: 'mail',         value: 'hello@chensiyi.com' },
  { icon: 'smartphone',   value: '+86 138 0000 0000'  },
  { icon: 'chat',         value: 'chensiyi_wx'        },
];

const strengths = [
  'User Research & Insight Analysis',
  'Agile Product Management',
  'Product Roadmap & Strategy',
  'Cross-functional Team Leadership',
];

export default function About() {
  const navigate = useNavigate();
  const { copy, copiedKey } = useCopyToClipboard();

  return (
    <main className="flex-grow px-margin-mobile md:px-margin-desktop py-12 md:py-24 max-w-[1200px] mx-auto w-full relative z-10">

      {/* Section header */}
      <header className="mb-16">
        <Shuffle
          text="About Me"
          tag="h2"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.04}
          threshold={0.2}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
          loop={false}
          className="font-sans-headline text-[32px] leading-[40px] tracking-tight font-bold text-primary mb-2"
          textAlign="left"
        />
        <p className="font-sans-body text-[16px] text-on-surface-variant mb-6">
          A little bit about who I am
        </p>
        <div className="w-16 h-px bg-primary" />
      </header>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left — text panels */}
        <div className="lg:col-span-7 space-y-6">
          <section className="glass-card p-8 md:p-10">
            <h3 className="font-sans-headline text-[24px] font-semibold text-primary mb-5">
              Background
            </h3>
            <p className="font-sans-body text-[16px] leading-relaxed text-on-surface-variant">
              I am a passionate Product Manager based in Shanghai with a focus on
              creating seamless digital experiences. With a background spanning
              both business strategy and technology, I enjoy solving complex
              problems through elegant design and data-driven decision making.
            </p>
          </section>

          <section className="glass-card p-8 md:p-10">
            <h3 className="font-sans-headline text-[24px] font-semibold text-primary mb-5">
              Strengths
            </h3>
            <ul className="space-y-3">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-3 font-sans-body text-[16px] text-on-surface-variant">
                  <span className="text-primary text-[10px] mt-1.5">●</span>
                  {s}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right — utility panels */}
        <div className="lg:col-span-5 space-y-6">
          <section className="glass-card p-8">
            <h3 className="font-sans-headline text-[24px] font-semibold text-primary mb-6">
              Contact
            </h3>
            <div className="space-y-5">
              {contactItems.map(({ icon, value }) => (
                <div key={value} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-lg">{icon}</span>
                    <span className="font-sans-body text-[15px]">{value}</span>
                  </div>
                  <button
                    aria-label={`Copy ${value}`}
                    className="text-outline hover:text-primary transition-colors"
                    onClick={() => copy(value)}
                    title={copiedKey === value ? 'Copied!' : 'Copy'}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {copiedKey === value ? 'check_circle' : 'content_copy'}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card p-8 hover:border-primary/50 transition-colors duration-300 group cursor-pointer"
            onClick={() => navigate('/experience')}
          >
            <h3 className="font-sans-headline text-[24px] font-semibold text-primary mb-3">
              Work Experience
            </h3>
            <p className="font-sans-body text-[14px] text-on-surface-variant mb-5 leading-relaxed">
              I've led teams to ship products that reached over 1M users.
              See the full breakdown of my professional journey.
            </p>
            <span className="inline-flex items-center gap-1 text-primary font-sans-body text-[14px] font-semibold group-hover:gap-2 transition-all">
              View full experience
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </section>
        </div>
      </div>
    </main>
  );
}
