import { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AmbientOrbs from '../components/AmbientOrbs';
import Hero from '../sections/Hero';
import Ballpit from '../components/backgroundDynamic';

class BallpitBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(err) { return { error: err }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ color: '#ff6b6b', padding: 16, fontFamily: 'monospace', fontSize: 12 }}>
          Ballpit error: {String(this.state.error)}
        </div>
      );
    }
    return this.props.children;
  }
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative" style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' }}>
      <AmbientOrbs variant="default" />
      <Navbar />
      <Hero />

      <BallpitBoundary>
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%' }}>
          <Ballpit
            count={100}
            gravity={0.01}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={false}
          />
        </div>
      </BallpitBoundary>

      <Footer />
    </div>
  );
}
