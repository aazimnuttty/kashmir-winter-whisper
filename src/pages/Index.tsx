import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Snowfall from '@/components/Snowfall';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EnquiryForm from '@/components/EnquiryForm';
import Packages from '@/components/Packages';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Destinations from '@/components/Destinations';
import ThingsToDo from '@/components/ThingsToDo';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Index = () => {
  useEffect(() => {
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh();

    return () => {
      // Cleanup all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Subtle Snowfall Effect */}
      <Snowfall />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Enquiry Form */}
        <EnquiryForm />

        {/* Popular Packages */}
        <Packages />

        {/* About Section */}
        <About />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Destinations */}
        <Destinations />

        {/* Things to Do */}
        <ThingsToDo />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top */}
      <BackToTop />
    </div>
  );
};

export default Index;
