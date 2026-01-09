import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Check for reduced motion preference
const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Scroll reveal animation for sections
export const useScrollReveal = (options?: {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { y = 40, duration = 0.8, stagger = 0.15, delay = 0 } = options || {};

  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;

    const elements = ref.current.querySelectorAll('.reveal-item');
    
    if (elements.length === 0) {
      // Animate the container itself
      gsap.fromTo(
        ref.current,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    } else {
      // Animate child elements with stagger
      gsap.fromTo(
        elements,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [y, duration, stagger, delay]);

  return ref;
};

// Parallax effect for hero background
export const useParallax = (speed: number = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;

    gsap.to(ref.current, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed]);

  return ref;
};

// Card hover animation
export const useCardHover = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (prefersReducedMotion() || !ref.current) return;
    gsap.to(ref.current, {
      y: -6,
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (prefersReducedMotion() || !ref.current) return;
    gsap.to(ref.current, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, []);

  return { ref, handleMouseEnter, handleMouseLeave };
};

// Button scale animation
export const useButtonScale = () => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (prefersReducedMotion() || !ref.current) return;
    gsap.to(ref.current, {
      scale: 1.03,
      duration: 0.2,
      ease: 'power2.out',
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (prefersReducedMotion() || !ref.current) return;
    gsap.to(ref.current, {
      scale: 1,
      duration: 0.2,
      ease: 'power2.out',
    });
  }, []);

  return { ref, handleMouseEnter, handleMouseLeave };
};

// Snowfall effect - extremely minimal
export const useSnowfall = (containerRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const container = containerRef.current;
    const snowflakes: HTMLDivElement[] = [];
    const count = 15; // Very minimal snowflakes

    for (let i = 0; i < count; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      const size = Math.random() * 4 + 2;
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.opacity = `${Math.random() * 0.4 + 0.2}`;
      container.appendChild(snowflake);
      snowflakes.push(snowflake);

      const duration = Math.random() * 15 + 20;
      const delay = Math.random() * 10;

      gsap.fromTo(
        snowflake,
        {
          y: -20,
          x: 0,
        },
        {
          y: window.innerHeight + 20,
          x: (Math.random() - 0.5) * 100,
          duration,
          delay,
          repeat: -1,
          ease: 'none',
        }
      );
    }

    return () => {
      snowflakes.forEach((flake) => {
        gsap.killTweensOf(flake);
        flake.remove();
      });
    };
  }, [containerRef]);
};

export default gsap;
