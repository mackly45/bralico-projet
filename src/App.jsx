import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Scene from './components/canvas/Scene';
import Navbar from './components/ui/Navbar';
import Hero from './sections/Hero';
import Brands from './sections/Brands';
import About from './sections/About';
import News from './sections/News';
import Contact from './sections/Contact';
import Preloader from './components/ui/Preloader';
import './App.css';

function App() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (loading) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Navbar />
      <React.Suspense fallback={null}>
        <Scene />
      </React.Suspense>
      <main style={{ opacity: loading ? 0 : 1, transition: 'opacity 1s ease' }}>
        <Hero />
        <About />
        <Brands />
        <News />
        <Contact />
      </main>
    </>
  );
}

export default App;
