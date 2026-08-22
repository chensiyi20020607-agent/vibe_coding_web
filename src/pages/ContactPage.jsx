import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AmbientOrbs from '../components/AmbientOrbs';
import ContactSection from '../sections/Contact';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen relative" style={{ background: 'radial-gradient(ellipse at 15% 50%, rgba(255,177,194,0.12) 0%, transparent 50%), radial-gradient(ellipse at 85% 30%, rgba(255,76,135,0.12) 0%, transparent 50%), #131316' }}>
      <AmbientOrbs variant="contact" />
      <Navbar />
      <ContactSection />
      <Footer />
    </div>
  );
}
