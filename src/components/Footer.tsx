import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append('email', email.trim());
      form.append('form_type', 'newsletter');

      await fetch('/submit.php', {
        method: 'POST',
        body: form,
      });

      // Fire Google Ads conversion event
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-16973182665/YNU5CNfosrMaEMntuJ0_'
        });
      }

      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });

      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe for exclusive winter deals and travel updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  maxLength={255}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg bg-primary text-white font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                <Send className="w-4 h-4" />
              </button>
            </form>
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
