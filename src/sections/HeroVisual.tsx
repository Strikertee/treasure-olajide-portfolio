import { useEffect, useRef, useState, useCallback } from 'react';

const images = [
  {
    src: '/Treasure_with_Sodiq_on_the_way_to_LAUTECH.jpg',
    alt: 'Treasure with Sodiq on the way to LAUTECH',
    caption: 'Journey to LAUTECH'
  },
  {
    src: '/Olajide_Treasure_Boluwatife_1.jpg',
    alt: 'Olajide Treasure Boluwatife',
    caption: 'Portrait'
  },
  {
    src: '/Picture_with_the_DeanoffacultyofComputing.jpg',
    alt: 'Picture with the Dean of Faculty of Computing',
    caption: 'With Dean of Computing'
  },
  {
    src: '/Afretec_competition.jpg',
    alt: 'AFRETEC Competition',
    caption: 'AFRETEC Competition'
  },
  {
    src: '/Afretec_bootcamp.jpg',
    alt: 'AFRETEC Bootcamp',
    caption: 'AFRETEC Bootcamp'
  }
];

export default function HeroVisual() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const nextImage = useCallback(() => {
    if (prefersReducedMotion) return;
    setCurrentIndex(prev => (prev + 1) % images.length);
  }, [prefersReducedMotion]);

  const prevImage = useCallback(() => {
    if (prefersReducedMotion) return;
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  }, [prefersReducedMotion]);

  const goToImage = useCallback((index: number) => {
    if (prefersReducedMotion || index === currentIndex) return;
    setCurrentIndex(index);
  }, [prefersReducedMotion, currentIndex]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextImage, prefersReducedMotion]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <div 
      className="hero-visual" 
      ref={containerRef}
      role="region"
      aria-label="Image gallery"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="visual-background" aria-hidden="true">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="gradient-orb orb-4"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="image-carousel">
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          
          return (
            <div
              key={index}
              className={`carousel-slide ${isActive ? 'active' : ''}`}
              style={{
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? 'auto' : 'none',
                transition: 'opacity 1000ms cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              aria-hidden={!isActive}
            >
              <div className="slide-frame">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading={isActive ? 'eager' : 'lazy'}
                  className="slide-img"
                />
                <div className="slide-overlay">
                  <div className="overlay-gradient"></div>
                  <div className="slide-caption">
                    <span className="caption-text">{image.caption}</span>
                    <span className="caption-index">{index + 1} / {images.length}</span>
                  </div>
                </div>
                <div className="frame-border"></div>
                <div className="frame-glow"></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="navigation-controls" aria-hidden="true">
        <button 
          className="nav-btn prev-btn"
          onClick={prevImage}
          aria-label="Previous image"
          disabled={prefersReducedMotion}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button 
          className="nav-btn next-btn"
          onClick={nextImage}
          aria-label="Next image"
          disabled={prefersReducedMotion}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="indicators" aria-hidden="true">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
            aria-label={`Go to image ${index + 1}`}
          >
            <span className="indicator-dot"></span>
          </button>
        ))}
      </div>

      <div className="floating-elements" aria-hidden="true">
        <div className="float-element float-1">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div className="float-element float-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
        <div className="float-element float-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <div className="float-element float-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        </div>
        <div className="float-element float-5">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
      </div>
    </div>
  );
}