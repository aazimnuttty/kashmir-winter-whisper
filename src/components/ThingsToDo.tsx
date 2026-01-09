import { useScrollReveal } from '@/hooks/useGSAP';
import activitiesImage from '@/assets/activities-winter.jpg';

const activities = [
  {
    icon: 'https://www.golddustkashmirtravels.in/assets/img/icon/horse.png',
    title: 'Pony Riding',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: 'https://www.golddustkashmirtravels.in/assets/img/icon/gondola.png',
    title: 'Gondola Ride',
    color: 'from-accent/20 to-accent/5',
  },
  {
    icon: 'https://www.golddustkashmirtravels.in/assets/img/icon/shikara.png',
    title: 'Shikara Ride',
    color: 'from-cta-secondary/20 to-cta-secondary/5',
  },
  {
    icon: 'https://www.golddustkashmirtravels.in/assets/img/icon/trekking.png',
    title: 'Trekking',
    color: 'from-cta-primary/20 to-cta-primary/5',
  },
];

const ThingsToDo = () => {
  const sectionRef = useScrollReveal({ stagger: 0.1 });

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div ref={sectionRef} className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 reveal-item">
          <h2 className="section-title mb-4">
            <span className="text-primary">Things</span> to Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore Kashmir's Majestic Landscapes, Thrilling Adventures, and Rich Culture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Activities Grid */}
          <div className="grid grid-cols-2 gap-4 reveal-item">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="glass-frost rounded-xl p-5 flex items-center gap-4 group hover:shadow-frost-lg transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <img
                    src={activity.icon}
                    alt={activity.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {activity.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="reveal-item">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-2xl" />
              <img
                src={activitiesImage}
                alt="Winter Activities in Kashmir"
                className="relative rounded-xl shadow-frost-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThingsToDo;
