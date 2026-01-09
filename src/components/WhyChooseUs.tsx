import { useScrollReveal } from '@/hooks/useGSAP';
import { Award, HeadphonesIcon, CalendarX, MapPin } from 'lucide-react';

const features = [
  {
    number: '1',
    icon: Award,
    title: 'Best Amenities',
    description:
      'Discover unparalleled luxury and convenience with the best amenities at Hagia Sophia Holidays, ensuring an unforgettable travel experience.',
    color: 'bg-primary',
  },
  {
    number: '2',
    icon: HeadphonesIcon,
    title: 'Quality Support',
    description:
      'Experience seamless journeys with dedicated support from Gold Dust Holidays, our team is committed to provide personalised assistance.',
    color: 'bg-accent',
  },
  {
    number: '3',
    icon: CalendarX,
    title: 'Easy Cancellation',
    description:
      "Enjoy stress free planning with Gold Dust Holidays's flexible cancellation policy, allowing you to adapt your travel plans with ease.",
    color: 'bg-cta-secondary',
  },
  {
    number: '4',
    icon: MapPin,
    title: 'Captivating Tours',
    description:
      "Embark on enchanting journey with Gold Dust Holidays's tours. Explore the beauty of Kashmir with meticulously crafted itineraries.",
    color: 'bg-cta-primary',
  },
];

const WhyChooseUs = () => {
  const sectionRef = useScrollReveal({ stagger: 0.15 });

  return (
    <section id="whychooseus" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-ice" />
      
      <div ref={sectionRef} className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-item">
          <h2 className="section-title">Why Choose Us</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="reveal-item glass-frost rounded-xl p-6 md:p-8 flex gap-5 group hover:shadow-frost-lg transition-all duration-300"
            >
              {/* Number */}
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full ${feature.color} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.number}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
