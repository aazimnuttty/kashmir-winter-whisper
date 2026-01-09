import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src="https://taxi.golddustkashmirtravels.in/assets/images/logo.png"
              alt="Gold Dust Holidays"
              className="h-14 mb-6"
            />
            <p className="text-white/70 leading-relaxed mb-6">
              Your premier travel agency for unforgettable Kashmir experiences. Discover the winter wonderland with us.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Packages', 'About Us', 'Destinations', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Packages */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Popular Packages</h4>
            <ul className="space-y-3">
              {[
                'Kashmir Family Tour',
                'Honeymoon Trip',
                'Incredible Kashmir',
                'Best of Kashmir',
                'Adventure Tour',
              ].map((pkg) => (
                <li key={pkg}>
                  <a
                    href="#packages"
                    className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {pkg}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/70">Srinagar, Kashmir, India</span>
              </li>
              <li>
                <a
                  href="tel:8493907781"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>8493907781</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@golddustholidays.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@golddustholidays.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2024 Gold Dust Holidays. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Registered with J&K Tourism - JKEA00003043
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
