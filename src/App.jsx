import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toast, setToast] = useState(null);

  const showToast = (toastData) => {
    setToast(toastData);
  };

  const handleCloseToast = () => {
    setToast(null);
  };

  return (
    <div className="relative min-h-screen bg-[#07040d] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onNotify={showToast} />
        <About />
        <Skills />
        <Projects onNotify={showToast} />
        <Experience />
        <Education />
        <Certifications />
        <Contact onNotify={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Toast Notification */}
      <Toast toast={toast} onClose={handleCloseToast} />
    </div>
  );
}
