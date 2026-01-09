import { useScrollReveal } from '@/hooks/useGSAP';
import aboutImage from '@/assets/about-winter.jpg';

const About = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="aboutus" className="py-20 md:py-28">
      <div ref={sectionRef} className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="reveal-item order-2 lg:order-1">
            <h2 className="section-title mb-6">
              <span className="text-primary">About</span> Us
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Welcome to Gold Dust Holidays, your premier travel agency based in the heart
              of Kashmir. We specialize in crafting unforgettable tours that showcase the beauty
              and cultural richness of this enchanting region. Our mission is to provide you
              with the most enriching and seamless travel experiences in Kashmir.
            </p>

            <div className="glass-frost rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground mb-1">
                  Registered with Department of Tourism, J&K, under Registration Number
                </p>
                <p className="font-semibold text-foreground">JKEA00003043</p>
              </div>
              <img
                src="https://www.golddustkashmirtravels.in/assets/img/logo/jktourism.png"
                alt="JK Tourism Logo"
                className="h-16 object-contain"
              />
            </div>
          </div>

          {/* Image */}
          <div className="reveal-item order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-2xl" />
              <img
                src={aboutImage}
                alt="Kashmir Winter Houseboat"
                className="relative rounded-xl shadow-frost-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
