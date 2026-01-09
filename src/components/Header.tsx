import { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import gsap from 'gsap';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Packages', href: '#packages' },
  { label: 'About Us', href: '#aboutus' },
  { label: 'Why Choose us', href: '#whychooseus' },
  { label: 'Destinations', href: '#destinations' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      );
    }
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        );
      }
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-frost py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="https://taxi.golddustkashmirtravels.in/assets/images/logo.png"
            alt="Gold Dust Holidays Logo"
            className="h-12 md:h-14"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <div
            className={`flex items-center gap-1 px-6 py-3 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'bg-secondary/50'
                : 'bg-white/20 backdrop-blur-md'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-foreground hover:bg-primary hover:text-primary-foreground'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:8493907781"
          className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
            isScrolled
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30'
          }`}
        >
          <Phone className="w-4 h-4" />
          <span>8493907781</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
            isScrolled
              ? 'text-foreground hover:bg-secondary'
              : 'text-white hover:bg-white/20'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-frost-lg border-t border-border"
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground font-medium hover:bg-secondary transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:8493907781"
              className="flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>8493907781</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
