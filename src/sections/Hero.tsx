import { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo } from '../data/personal.ts';
import Button from '../components/Button.tsx';
import HeroVisual from './HeroVisual.tsx';
import './Hero.css';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = useRef(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion.current) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % personalInfo.hero.rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const fadeUp = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <motion.section
      id="home"
      className="hero"
      aria-labelledby="hero-title"
      initial={reduceMotion ? {} : { opacity: 0 }}
      animate={reduceMotion ? {} : { opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-badge" aria-hidden="true">
            <span className="badge-dot" aria-hidden="true"></span>
            <span>{personalInfo.status}</span>
          </div>

          <motion.h1 id="hero-title" className="hero-headline display-lg" {...fadeUp(0)}>
            {personalInfo.hero.headline}
          </motion.h1>

          <motion.p className="hero-subheadline text-lg text-secondary" style={{ maxWidth: '720px' }} {...fadeUp(0.1)}>
            {personalInfo.hero.subheadline}
          </motion.p>

          <motion.div className="hero-rotating" aria-live="polite" aria-atomic="true" {...fadeUp(0.2)}>
            <span className="rotating-label">BUILDING:</span>
            <span className="rotating-text-container">
              <span
                className="rotating-text"
                style={{ '--index': currentIndex }}
              >
                {personalInfo.hero.rotatingTexts.map((text, i) => (
                  <span key={i} className="rotating-item" style={{ '--i': i }}>
                    {text}
                  </span>
                ))}
              </span>
            </span>
          </motion.div>

          <motion.div className="hero-actions" {...fadeUp(0.3)}>
            <Button variant="primary" size="lg" className="hero-cta-primary">
              View My Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
            <Button variant="secondary" size="lg" className="hero-cta-secondary">
              Let's Talk
            </Button>
          </motion.div>

          <motion.div className="hero-links" {...fadeUp(0.4)}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-link">
              GitHub
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div className="hero-visual-wrapper" aria-hidden="true" {...fadeUp(0.5)}>
          <HeroVisual />
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        aria-hidden="true"
        animate={reduceMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </motion.section>
  );
}