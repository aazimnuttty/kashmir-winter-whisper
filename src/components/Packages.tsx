import { useScrollReveal } from '@/hooks/useGSAP';
import PackageCard from './PackageCard';

import package1 from '@/assets/package-1-winter.jpg';
import package2 from '@/assets/package-2-winter.jpg';
import package3 from '@/assets/package-3-winter.jpg';
import package4 from '@/assets/package-4-winter.jpg';
import package5 from '@/assets/package-5-winter.jpg';
import package6 from '@/assets/package-6-winter.jpg';

const packages = [
  {
    image: package1,
    title: 'Kashmir Family Tour',
    locations: 'Srinagar, Pahalgam & Gulmarg',
    duration: '4 Nights 5 Days',
    includes: 'Hotel, Meal & Cab',
    price: '10,000',
  },
  {
    image: package2,
    title: 'Kashmir Honeymoon Trip',
    locations: 'Srinagar, Gulmarg, Pahalgam & Sonmarg',
    duration: '6 Nights 7 Days',
    includes: 'Hotel, Meal & Cab',
    price: '13,000',
  },
  {
    image: package3,
    title: 'Incredible Kashmir Tour',
    locations: 'Srinagar, Gulmarg & Sonmarg',
    duration: '5 Nights 6 Days',
    includes: 'Hotel, Meal & Cab',
    price: '11,000',
  },
  {
    image: package4,
    title: 'Best of Kashmir',
    locations: 'Srinagar, Pahalgam, Yusmarg & Gulmarg',
    duration: '7 Nights 8 Days',
    includes: 'Hotel, Meal & Cab',
    price: '13,500',
  },
  {
    image: package5,
    title: 'Highlights of Kashmir',
    locations: 'Srinagar, Pahalgam & Gulmarg',
    duration: '3 Nights 4 Days',
    includes: 'Hotel, Meal & Cab',
    price: '9,200',
  },
  {
    image: package6,
    title: 'Amazing Kashmir Trip',
    locations: 'Srinagar, Sonmarg & Gulmarg',
    duration: '4 Nights 5 Days',
    includes: 'Hotel, Meal & Cab',
    price: '10,200',
  },
];

const Packages = () => {
  const sectionRef = useScrollReveal({ stagger: 0.1 });

  return (
    <section id="packages" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-frost opacity-50" />
      
      <div ref={sectionRef} className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12 reveal-item">
          <span className="section-subtitle">Popular Package</span>
          <h2 className="section-title">Popular Packages</h2>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.title} {...pkg} delay={index * 100} />
          ))}
        </div>
      </div>

      {/* Decorative stroke text */}
      <div className="absolute bottom-10 left-0 right-0 text-center overflow-hidden pointer-events-none">
        <span className="strock-text whitespace-nowrap">Adventure world</span>
      </div>
    </section>
  );
};

export default Packages;
