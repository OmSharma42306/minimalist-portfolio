import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;