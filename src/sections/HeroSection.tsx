import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * HeroSection Component
 * Design: Minimalist Scientific Precision
 * - Full-screen hero with parallax background
 * - Large bold title with subtle fade-in animation
 * - Teal accent for CTA button
 */

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663592621201/jqQFNHoPFFCeNM8Dc6umSg/hero-satellite-ocean-Fmc9NpdWP3pu3Hz9kVFhEJ.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: scrollY * 0.5,
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="section-label mb-4 inline-block">
            Engineering Major Project
          </span>
        </motion.div>

        <motion.h1
          className="display-title mb-6 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Automated Detection and Vessel Attribution of Illegal Bilge Dumping
        </motion.h1>

        <motion.p
          className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Using Sentinel-1 SAR and AIS Data Fusion for Real-Time Environmental Monitoring
        </motion.p>

        <motion.button
          onClick={() => scrollToSection('overview')}
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-primary font-semibold rounded-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore System
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-accent" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
