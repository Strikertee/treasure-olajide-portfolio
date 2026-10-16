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
  // Scroll reveal is now handled per-component by Framer Motion
  // (see src/components/motion/Reveal.tsx with whileInView).
  // No global IntersectionObserver needed.
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
