import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import MouseGlow from './components/MouseGlow';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <MouseGlow />
      <ScrollToTop />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/about"      element={<About />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact"    element={<ContactPage />} />
        <Route path="*"           element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
