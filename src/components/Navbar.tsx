import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/personal.ts';
import { cn } from '@/lib/utils';

const navLinks: { href: string; label: string }[] = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#recognition', label: 'Recognition' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      role="navigation"
      aria-label="Main navigation"
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-[200] border-b backdrop-blur-xl transition-all duration-300',
        scrolled
          ? 'h-16 border-border bg-black/95 shadow-md'
          : 'h-[72px] border-border bg-black/80'
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6">
        <a
          href="#home"
          className="z-[100] flex items-center gap-2 font-display text-lg font-bold text-foreground"
          aria-label="Go to homepage"
        >
          <span className="tracking-tight">TREASURE.</span>
          <span
            className="animate-pulse text-sm text-accent"
            aria-hidden="true"
          >
            ●
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium">
            <span
              className="animate-pulse text-[6px] text-emerald-400"
              aria-hidden="true"
            >
              ●
            </span>
            <span className="whitespace-nowrap text-muted-foreground">
              {personalInfo.availability}
            </span>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="z-[100] p-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <X className="size-6 text-foreground" aria-hidden="true" />
          ) : (
            <Menu className="size-6 text-foreground" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 -z-10 bg-black/50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              className="fixed bottom-0 right-0 top-0 flex w-full max-w-xs flex-col items-start justify-start gap-6 border-l border-border bg-background px-6 pb-8 pt-28 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-2 text-lg font-semibold text-muted-foreground hover:text-foreground"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-4 flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium">
                <span className="animate-pulse text-[6px] text-emerald-400">
                  ●
                </span>
                <span className="text-muted-foreground">
                  {personalInfo.availability}
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
