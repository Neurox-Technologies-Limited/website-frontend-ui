import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Broadcom", "ManageEngine", "Cisco", "Red Hat", "Thales",
  "Microsoft", "Antea", "Check Point", "Dell", "Huawei",
  "Oracle", "MongoDB", "Fortinet", "Commvault", "HPE",
  "SUSE", "DataStax", "CyberSOC",
];

const PartnersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="section-spacing border-t border-border" ref={ref}>
      <div className="container-custom">
        <motion.span
          className="label-tag"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          04 // ECOSYSTEM
        </motion.span>
        <motion.h2
          className="text-4xl md:text-5xl font-semibold tracking-tighter mt-4 uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our <span className="accent-text">Partners</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground max-w-[55ch] mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Strategic partnerships enabling access to the latest technologies
          that accelerate development and efficiency.
        </motion.p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-border mt-12">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              className="bg-background p-6 flex items-center justify-center h-24 group"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.03 }}
              whileHover={{ backgroundColor: "hsl(240 4% 10%)" }}
            >
              <span className="font-mono text-xs tracking-widest text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {partner.toUpperCase()}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
