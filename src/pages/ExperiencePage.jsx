import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ExperienceSlider from '../sections/Experience';

export default function ExperiencePage() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden"
      style={{ background: 'linear-gradient(135deg, #131316 0%, #1f1f22 100%)' }}
    >
      {/* Ambient glow top-left */}
      <div
        className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(255,177,194,0.12) 0%, transparent 70%)' }}
      />
      <Navbar />
      <ExperienceSlider />
      <Footer />
    </div>
  );
}
