import { useScrollReveal } from '@/hooks/useGSAP';
import gulmargImage from '@/assets/destination-gulmarg-winter.jpg';
import pahalgamImage from '@/assets/destination-pahalgam-winter.jpg';
import sonmargImage from '@/assets/destination-sonmarg-winter.jpg';

const destinations = [
  {
    name: 'Gulmarg',
    image: gulmargImage,
  },
  {
    name: 'Pahalgam',
    image: pahalgamImage,
  },
  {
    name: 'Sonmarg',
    image: sonmargImage,
  },
];

const Destinations = () => {
  const sectionRef = useScrollReveal({ stagger: 0.2 });

  return (
    <section id="destinations" className="py-20 md:py-28 relative overflow-hidden">
      <div ref={sectionRef} className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 reveal-item">
          <span className="section-subtitle">Discover New Destinations</span>
          <h2 className="section-title">Kashmir Destinations</h2>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className="reveal-item group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Frost effect on hover */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:translate-y-[-4px] transition-transform duration-300">
                  {destination.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative stroke text */}
      <div className="absolute bottom-10 left-0 right-0 text-center overflow-hidden pointer-events-none">
        <span className="strock-text whitespace-nowrap">Best Destinations</span>
      </div>
    </section>
  );
};

export default Destinations;
