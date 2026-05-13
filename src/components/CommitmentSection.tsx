import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CommitmentSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-spacing border-t border-border relative overflow-hidden" ref={ref}>
      <div aria-hidden className="gradient-hairline absolute top-0 left-0 right-0" />
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <motion.span
            className="label-tag"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            03 // PHILOSOPHY
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-semibold tracking-tighter mt-4 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Commitment
            <br />
            to <span className="gradient-text">Excellence</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg leading-relaxed max-w-[55ch] mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our commitment to excellence is reflected in our approach to
            technology integration. We set trends by not proffering a one cap
            fits all approach to our customers IT needs. We have over the years
            formed strategic partnerships with notable OEM's.
          </motion.p>
          <motion.a
            href="#contact"
            className="gradient-cta h-12 px-6 mt-8 rounded-md font-sans text-sm font-medium inline-flex items-center justify-center w-fit transition-transform active:scale-[0.98]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Execute Partnership
          </motion.a>
        </div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 gap-px bg-border">
            {["ARCHITECTURE", "DEPLOYMENT", "MONITORING", "OPTIMIZATION"].map(
              (label, i) => (
                <div
                  key={label}
                  className="bg-background p-8 flex flex-col items-start justify-end aspect-square"
                >
                  <span className="font-mono text-[40px] font-semibold leading-none" style={{ color: "hsl(var(--accent-2))" }}>
                    0{i + 1}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground mt-3">
                    {label}
                  </span>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommitmentSection;
