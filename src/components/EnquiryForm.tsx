import { useRef, useEffect, useState } from 'react';
import { User, Mail, Phone, Users, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { toast } from '@/hooks/use-toast';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const EnquiryForm = () => {
  const formRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pax: '',
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !formRef.current) return;

    gsap.fromTo(
      formRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append('name', formData.name.trim());
      form.append('email', formData.email.trim());
      form.append('phone', formData.phone.trim());
      form.append('pax', formData.pax);
      form.append('form_type', 'enquiry');

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
        title: "Enquiry Submitted!",
        description: "Thank you! We'll get back to you shortly.",
      });

      setFormData({ name: '', email: '', phone: '', pax: '' });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry" ref={formRef} className="relative -mt-20 z-10">
      <div className="container mx-auto px-4">
        <div className="glass-frost rounded-2xl p-6 md:p-8 shadow-frost-lg">
          <form onSubmit={handleSubmit} className="flex flex-wrap items-end gap-4">
            {/* Name Field */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-frost w-full pl-10"
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-frost w-full pl-10"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* Phone Field */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  maxLength={20}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="input-frost w-full pl-10"
                />
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* Number of People Field */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-foreground mb-2">
                No. of People
              </label>
              <div className="relative">
                <input
                  type="number"
                  placeholder="No. of People"
                  required
                  min="1"
                  max="100"
                  value={formData.pax}
                  onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
                  className="input-frost w-full pl-10"
                />
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full md:w-auto">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-winter-primary w-full md:w-auto whitespace-nowrap disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Enquire Now'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
