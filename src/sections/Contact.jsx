import { useState } from 'react';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import Shuffle from '../components/Shuffle';

const contactItems = [
  { icon: 'mail',       label: 'Email',  value: 'hello@chensiyi.com'  },
  { icon: 'phone_iphone', label: 'Phone', value: '+86 138 0000 0000'  },
  { icon: 'chat',       label: 'WeChat', value: 'chensiyi_wx'         },
];

export default function Contact() {
  const { copy, copiedKey } = useCopyToClipboard();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sent

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <main className="flex-grow px-margin-mobile md:px-margin-desktop py-12 md:py-24 max-w-[1200px] mx-auto w-full relative z-10">

      {/* Header */}
      <header className="mb-12 md:mb-16">
        <Shuffle
          text="Get In Touch"
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
        <p className="font-sans-body text-[16px] text-on-surface-variant max-w-xl">
          I usually respond within 1–2 business days.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

        {/* Left — contact info */}
        <div className="lg:col-span-5">
          <div className="glass-card p-8 flex flex-col h-full">
            <h3 className="font-sans-headline text-[20px] font-semibold text-primary mb-8">
              Reach Me Directly
            </h3>

            <div className="space-y-4 mb-8 flex-grow">
              {contactItems.map(({ icon, label, value }) => (
                <div key={label} className="glass-card rounded-xl p-4 flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {icon}
                    </span>
                    <div>
                      <div className="font-mono text-[12px] tracking-widest text-on-surface-variant mb-0.5">
                        {label}
                      </div>
                      <div className="font-sans-body text-[15px] font-medium text-on-surface truncate max-w-[160px] sm:max-w-none">
                        {value}
                      </div>
                    </div>
                  </div>
                  <button
                    className={`copy-btn shrink-0 ${copiedKey === value ? 'copied' : ''}`}
                    onClick={() => copy(value)}
                  >
                    {copiedKey === value ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-primary/20 my-2 mb-6" />

            <div className="flex gap-6 items-center">
              {['GitHub', 'LinkedIn'].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="text-primary hover:text-primary-fixed transition-colors flex items-center gap-1 text-sm font-semibold group font-sans-body"
                >
                  {name}
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    open_in_new
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — message form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 h-full">
            <h3 className="font-sans-headline text-[20px] font-semibold text-primary mb-8">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[12px] tracking-widest text-on-surface-variant mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name" name="name" type="text"
                    value={form.name} onChange={handleChange}
                    className="glass-input" placeholder="John Doe" required
                  />
                </div>
                <div>
                  <label className="block font-mono text-[12px] tracking-widest text-on-surface-variant mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email" name="email" type="email"
                    value={form.email} onChange={handleChange}
                    className="glass-input" placeholder="john@example.com" required
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[12px] tracking-widest text-on-surface-variant mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message" name="message" rows={6}
                  value={form.message} onChange={handleChange}
                  className="glass-input resize-y min-h-[140px]"
                  placeholder="How can I help you?" required
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-4 text-lg"
                disabled={status === 'sent'}
              >
                {status === 'idle' ? (
                  <>Send Message <span className="material-symbols-outlined text-base">send</span></>
                ) : (
                  <>Sent ✓</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
