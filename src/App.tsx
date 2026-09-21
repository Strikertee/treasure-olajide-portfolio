import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Projects from './sections/Projects';
import DevionsSection from './sections/Devions';
import Recognition from './sections/Recognition';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import CurrentlyBuilding from './sections/CurrentlyBuilding';
import Contact from './sections/Contact';
import './styles/globals.css';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);
    
    // Observe sections for scroll animations
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <Projects />
        <DevionsSection />
        <Recognition />
        <About />
        <Experience />
        <Skills />
        <CurrentlyBuilding />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;