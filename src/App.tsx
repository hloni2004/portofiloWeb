import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';  // ← Make sure this line exists
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden">
      <ParticleBackground />
      
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Education />  {/* ← Make sure this line exists */}
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;