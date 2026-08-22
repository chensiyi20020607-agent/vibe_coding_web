export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-surface-container-lowest border-t border-white/[0.10] w-full py-10 shrink-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-gutter max-w-[1200px] mx-auto">
        <span className="font-mono text-[12px] tracking-widest text-outline">
          © {year} Chen Siyi. Built with precision.
        </span>
        <div className="flex gap-6">
          {['LinkedIn', 'GitHub', 'Email'].map((item) => (
            <a
              key={item}
              href="#"
              className="font-mono text-[12px] tracking-widest text-outline hover:text-primary transition-colors opacity-80 hover:opacity-100"
            >
              {item}
            </a>
          ))}
        </div>
        <span className="font-display-logo text-on-surface tracking-widest uppercase text-lg hidden md:block">
          RÉSUMÉ
        </span>
      </div>
    </footer>
  );
}
