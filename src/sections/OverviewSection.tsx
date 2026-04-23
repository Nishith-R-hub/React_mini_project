import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { AlertTriangle, Zap, Target } from 'lucide-react';

/**
 * OverviewSection Component
 * Design: Minimalist Scientific Precision
 * - Card-based layout with scroll reveal animation
 * - Teal accents for visual hierarchy\n * - Asymmetric layout with generous whitespace
 */

const OverviewSection = () => {
  const cards = [
    {
      icon: AlertTriangle,
      title: 'Marine Pollution Problem',
      description: 'Illegal bilge dumping contributes significantly to ocean pollution, causing environmental damage and threatening marine ecosystems.',
    },
    {
      icon: Zap,
      title: 'Automated Detection',
      description: 'Advanced satellite imagery analysis enables rapid identification of oil spills and pollution events in real-time.',
    },
    {
      icon: Target,
      title: 'Vessel Attribution',
      description: 'AIS data fusion provides vessel identification and accountability for detected illegal dumping incidents.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="overview" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="mb-16">
            <span className="section-label">Project Overview</span>
            <h2 className="section-title mt-4 mb-4">Understanding the Challenge</h2>
            <p className="text-foreground/70 max-w-2xl text-lg leading-relaxed">
              Illegal bilge dumping represents a critical environmental threat to our oceans. This project develops an automated system to detect and attribute these violations using cutting-edge satellite technology and vessel tracking data.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="p-6 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
              >
                <div className="mb-4 inline-flex p-3 rounded-md bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;
