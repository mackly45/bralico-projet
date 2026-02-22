import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Scene from './components/canvas/Scene';
import Navbar from './components/ui/Navbar';
import Hero from './sections/Hero';
import Brands from './sections/Brands';
import About from './sections/About';
import News from './sections/News';
import Contact from './sections/Contact';
import './App.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Scene />
      <main>
        <Hero />
        <Brands />
        <About />
        <News />
        <Contact />
      </main>
    </>
  );
}

export default App;
