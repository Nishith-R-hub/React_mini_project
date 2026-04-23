import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

/**
 * PipelineSection Component
 * Design: Minimalist Scientific Precision
 * - Timeline-style connected step cards
 * - Staggered animation on scroll reveal
 * - Teal accents for visual flow
 */

const PipelineSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Sentinel-1 SAR Acquisition',
      description: 'Synthetic Aperture Radar satellite imagery captures ocean surface data with high resolution.',
    },
    {
      number: '02',
      title: 'Image Preprocessing',
      description: 'Raw satellite data undergoes calibration, filtering, and normalization for analysis.',
    },
    {
      number: '03',
      title: 'Oil Spill Detection',
      description: 'Advanced algorithms identify anomalies and potential oil spills in preprocessed imagery.',
    },
    {
      number: '04',
      title: 'AIS Vessel Data Extraction',
      description: 'Automatic Identification System data provides vessel positions and vessel characteristics.',
    },
    {
      number: '05',
      title: 'Data Fusion & Attribution',
      description: 'Detected spills are correlated with vessel positions to identify responsible vessels.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="pipeline" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="mb-16">
            <span className="section-label">System Architecture</span>
            <h2 className="section-title mt-4 mb-4">Detection Pipeline</h2>
            <p className="text-foreground/70 max-w-2xl text-lg leading-relaxed">
              Our multi-stage pipeline integrates satellite imagery analysis with vessel tracking to provide comprehensive detection and attribution capabilities.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="flex gap-4 md:gap-6"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                <span className="text-accent font-bold text-lg">{step.number}</span>
              </div>

              <div className="flex-1 pt-2">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-4 bg-gradient-to-b from-accent/50 to-accent/0" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 rounded-lg overflow-hidden border border-border"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663592621201/jqQFNHoPFFCeNM8Dc6umSg/pipeline-visualization-kzRbBYEdPXhLQ4tbL8z9ov.webp"
            alt="System Pipeline Visualization"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PipelineSection;
