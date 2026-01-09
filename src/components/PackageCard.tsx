import { useRef, useEffect } from 'react';
import { Clock, Star, HelpCircle } from 'lucide-react';
import gsap from 'gsap';

interface PackageCardProps {
  image: string;
  title: string;
  locations: string;
  duration: string;
  includes: string;
  price: string;
  delay?: number;
}

const PackageCard = ({
  image,
  title,
  locations,
  duration,
  includes,
  price,
  delay = 0,
}: PackageCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !cardRef.current) return;

    // Hover animation setup
    const card = cardRef.current;
    
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        scale: 1.02,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="reveal-item card-winter group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="font-display text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{locations}</p>
        </div>

        {/* Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" />
            {duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-primary" />
            {includes}
          </span>
        </div>

        {/* Price */}
        <a
          href="#enquiry"
          className="block text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          Starting from <span className="text-xl">₹{price}/person</span>
        </a>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href="#enquiry"
            className="btn-winter-primary flex items-center justify-center gap-1.5 py-2.5 text-xs"
          >
            Enquire Now
            <HelpCircle className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=918493907781&text=Hi,%20I%20have%20a%20Query%20for%20Kashmir%20Tour%20Package"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-winter-secondary flex items-center justify-center gap-1.5 py-2.5 text-xs"
          >
            Whatsapp Us
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
