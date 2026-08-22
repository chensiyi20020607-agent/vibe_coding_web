import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center gap-6 text-center px-6">
      <p className="font-mono text-[72px] font-bold leading-none"
        style={{ background: 'linear-gradient(135deg,#ff4c87,#6d11ad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', opacity: 0.4 }}
      >
        404
      </p>
      <h1 className="font-sans-headline text-[32px] font-bold text-on-surface">Page Not Found</h1>
      <p className="font-sans-body text-[16px] text-on-surface-variant">
        The page you're looking for has vanished into the void.
      </p>
      <Link to="/" className="btn-primary mt-4">Back to Home</Link>
    </div>
  );
}
