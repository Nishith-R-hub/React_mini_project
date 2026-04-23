import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

/**
 * ResultsSection Component
 * Design: Minimalist Scientific Precision
 * - Large satellite image with detection overlay
 * - Side panel showing vessel attribution details
 * - Zoom-in animation on scroll reveal
 * - Glowing border accent
 */

const ResultsSection = () => {
  const detectionData = {
    vesselName: 'Ocean Explorer',
    mmsi: '538004111',
    timestamp: '2024-05-20 02:14:37 UTC',
    confidence: '94.7%',
    detectedArea: '1,250 km²',
    spillType: 'Thick Oil',
  };

  return (
    <section id="results" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="mb-16">
            <span className="section-label">Detection Results</span>
            <h2 className="section-title mt-4 mb-4">Sample Analysis Output</h2>
            <p className="text-foreground/70 max-w-2xl text-lg leading-relaxed">
              Real-time detection and vessel attribution from satellite imagery analysis combined with AIS tracking data.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Image */}
          <motion.div
            className="lg:col-span-2 relative rounded-lg overflow-hidden border border-accent/50 glow-accent-border"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663592621201/jqQFNHoPFFCeNM8Dc6umSg/hero-satellite-ocean-Fmc9NpdWP3pu3Hz9kVFhEJ.webp"
              alt="Satellite Detection Results"
              className="w-full h-auto"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Details Panel */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
                Vessel Information
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1">
                    Vessel Name
                  </p>
                  <p className="text-foreground font-semibold">
                    {detectionData.vesselName}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1">
                    MMSI
                  </p>
                  <p className="text-foreground font-mono">
                    {detectionData.mmsi}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1">
                    Timestamp
                  </p>
                  <p className="text-foreground font-mono text-sm">
                    {detectionData.timestamp}
                  </p>
                </div>

                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1">
                    Confidence
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: '94.7%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-accent font-semibold text-sm">
                      {detectionData.confidence}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
                Detection Metrics
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1">
                    Detected Area
                  </p>
                  <p className="text-foreground font-semibold">
                    {detectionData.detectedArea}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1">
                    Spill Type
                  </p>
                  <p className="text-foreground font-semibold">
                    {detectionData.spillType}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
