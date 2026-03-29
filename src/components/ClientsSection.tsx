import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "FCMB", "Fidelity Bank", "GTCO", "UBA", "Stanbic IBTC",
  "Keystone Bank", "Signature Bank", "Optimus Bank", "MTN",
  "Honda", "MainOne", "Mota-Engil", "Radisson Blu",
  "Alpha Morgan", "Uraga Real Estate", "Spectranet",
  "Fidelity Pensions", "Stanbic Pensions",
];

const ClientsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-spacing border-t border-border" ref={ref}>
      <div className="container-custom">
        <motion.span
          className="label-tag"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          05 // TRUST NETWORK
        </motion.span>
        <motion.h2
          className="text-4xl md:text-5xl font-semibold tracking-tighter mt-4 uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our <span className="accent-text">Clients</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground max-w-[55ch] mt-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Encompassing finance, healthcare, manufacturing, telecommunications,
          and beyond.
        </motion.p>

        {/* Ticker */}
        <div className="mt-12 overflow-hidden border-t border-b border-border py-6">
          <div className="flex animate-ticker-scroll whitespace-nowrap">
            {[...clients, ...clients].map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="font-mono text-xs tracking-widest text-muted-foreground mx-8 shrink-0"
              >
                {client.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
