import React from 'react';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import InteractiveCursor from './components/InteractiveCursor';
import InteractiveControls from './components/InteractiveControls';
import Hero from './components/Hero';
import InteractiveStats from './components/InteractiveStats';
import Skills from './components/Skills';
import Education from './components/Education';
import InteractiveTimeline from './components/InteractiveTimeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import InteractiveContactForm from './components/InteractiveContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden cursor-none">
      <InteractiveCursor />
      <Navigation />
      <ParticleBackground />
      
      <main className="relative z-10">
        <Hero />
        <InteractiveStats />
        <Skills />
        <Education />
        <InteractiveTimeline />
        <Projects />
        <Contact />
        <div className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <InteractiveContactForm />
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
      <InteractiveControls />
    </div>
  );
}

export default App;