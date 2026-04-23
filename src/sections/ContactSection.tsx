import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { Mail, MapPin, Calendar } from 'lucide-react';

/**
 * ContactSection Component
 * Design: Minimalist Scientific Precision
 * - Minimal academic-style footer
 * - Contact information and institution details
 * - Subtle divider line and professional typography
 */

const ContactSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title mt-4 mb-4">Contact & Information</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="inline-flex p-3 rounded-md bg-accent/10 mb-4">
              <Mail className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <a
              href="mailto:project@university.edu"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              project@university.edu
            </a>
          </motion.div>

          {/* Institution */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="inline-flex p-3 rounded-md bg-accent/10 mb-4">
              <MapPin className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Institution</h3>
            <p className="text-foreground/70">
              Department of Engineering<br />
              University Name
            </p>
          </motion.div>

          {/* Defense Date */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="inline-flex p-3 rounded-md bg-accent/10 mb-4">
              <Calendar className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Defense</h3>
            <p className="text-foreground/70">
              Spring {currentYear}<br />
              Final Year Project
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Footer */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-foreground/60 text-sm mb-2">
            Automated Detection and Vessel Attribution of Illegal Bilge Dumping
          </p>
          <p className="text-foreground/60 text-sm mb-4">
            Using Sentinel-1 SAR and AIS Data Fusion
          </p>
          <p className="text-foreground/40 text-xs">
            © {currentYear} Engineering Major Project. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
