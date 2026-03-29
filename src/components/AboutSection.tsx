import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "99.99%", label: "UPTIME SLA" },
  { value: "150+", label: "ENTERPRISE CLIENTS" },
  { value: "24/7", label: "SUPPORT COVERAGE" },
  { value: "15+", label: "OEM PARTNERSHIPS" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-spacing border-t border-border" ref={ref}>
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <motion.span
            className="label-tag"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            01 // WHO WE ARE
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-semibold tracking-tighter mt-4 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our
            <br />
            <span className="accent-text">Technology</span>
          </motion.h2>
        </div>

        <div className="lg:col-span-7">
          <motion.p
            className="text-muted-foreground text-lg leading-relaxed max-w-[60ch]"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At Neurox Technologies, we are not just keeping pace with
            technological advancements; we are at the forefront, leading the way
            with the latest innovations. We understand that to deliver
            exceptional IT solutions, we must have access to the most advanced
            technologies.
          </motion.p>
          <motion.p
            className="text-muted-foreground text-base leading-relaxed max-w-[60ch] mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            That's why we have cultivated strong partnerships and alliances with
            both Original Equipment Manufacturers (OEMs) and indigenous
            distributors, ensuring that our clients benefit from the best of the
            best.
          </motion.p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-background p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
              >
                <span className="text-3xl md:text-4xl font-semibold tracking-tighter accent-text">
                  {stat.value}
                </span>
                <span className="block font-mono text-[10px] tracking-widest text-muted-foreground mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
