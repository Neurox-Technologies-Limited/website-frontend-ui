import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-spacing border-t border-border grid-overlay" ref={ref}>
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-6">
          <motion.span
            className="label-tag"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            06 // INITIALIZE
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-semibold tracking-tighter mt-4 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to
            <br />
            <span className="accent-text">Execute?</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground mt-6 max-w-[40ch]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Reach out to our team to discuss your infrastructure needs and
            explore how Neurox can architect your success.
          </motion.p>
        </div>

        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="label-tag block mb-2">NAME</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="label-tag block mb-2">EMAIL</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div>
              <label className="label-tag block mb-2">ORGANIZATION</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="Company name"
              />
            </div>
            <div>
              <label className="label-tag block mb-2">MESSAGE</label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Describe your infrastructure requirements..."
              />
            </div>
            <button type="submit" className="cta-button">
              TRANSMIT REQUEST
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
