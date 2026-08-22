import { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home',            to: '/' },
  { label: 'About',           to: '/about' },
  { label: 'Work Experience', to: '/experience' },
  { label: 'Contact',         to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <nav className="glass-nav sticky top-0 w-full z-50">
      <div className="flex justify-between items-center px-gutter py-4 max-w-[1200px] mx-auto">

        {/* Logo */}
        <div className="flex flex-col cursor-pointer" onClick={() => navigate('/')}>
          {isHome && (
            <span className="font-mono text-[12px] leading-4 tracking-widest text-on-surface-variant mb-0.5">
              Welcome to Chen's Space
            </span>
          )}
          <span className="font-display-logo text-primary tracking-widest uppercase">
            RÉSUMÉ
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `font-sans-body text-[16px] leading-6 transition-colors duration-200 pb-1 ${
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA button */}
        <button
          className="hidden md:block btn-primary"
          onClick={() => navigate('/contact')}
        >
          Get in Touch
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-on-surface p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-card mx-4 mb-4 rounded-xl overflow-hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 font-sans-body text-[16px] border-b border-white/5 transition-colors ${
                  isActive
                    ? 'text-primary font-semibold bg-white/5'
                    : 'text-on-surface-variant hover:text-primary hover:bg-white/[0.03]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
