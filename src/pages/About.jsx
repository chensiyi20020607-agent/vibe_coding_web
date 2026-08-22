import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AmbientOrbs from '../components/AmbientOrbs';
import AboutSection from '../sections/About';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen relative bg-surface">
      <AmbientOrbs variant="right" />
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
}
