import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cloud, Shield, Code } from "lucide-react";
import { CapabilityCard } from "@/components/ui/CapabilityCard";
import { heroHeadline, revealUp, staggerContainer } from "@/lib/motion";

const capabilities = [
  { icon: Cloud, title: "Cloud & Infrastructure", subtitle: "Scalable, secure, global" },
  { icon: Shield, title: "Cybersecurity", subtitle: "Detect, defend, recover" },
  { icon: Code, title: "Software Engineering", subtitle: "Custom builds, mobile + web" },
];

const HeroSection = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative min-h-[85svh] flex items-center pt-28 pb-16 gradient-mesh-bg overflow-hidden">
      <div className="container-custom w-full">
        <motion.div
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span className="label-tag mb-6" variants={revealUp}>
            ENTERPRISE IT INFRASTRUCTURE
          </motion.span>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-[clamp(3rem,8vw,7rem)] font-semibold tracking-tighter leading-[0.9] uppercase"
            variants={heroHeadline}
          >
            Elevating Business Through{" "}
            <span className="gradient-text">Technology.</span>
          </motion.h1>

          <motion.p
            className="mt-8 text-muted-foreground max-w-[60ch] text-base md:text-lg leading-relaxed"
            variants={revealUp}
          >
            With a relentless commitment to excellence, we help our clients harness the power of technology to drive growth, efficiency, and success.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-4 mt-10" variants={revealUp}>
            <Link
              to="/services"
              className="gradient-cta h-12 px-6 font-sans text-sm font-medium inline-flex items-center justify-center rounded-md transition-transform duration-150 active:scale-[0.98]"
            >
              View Services
            </Link>
            <Link
              to="/contact"
              className="h-12 px-6 border border-border rounded-md font-sans text-sm font-medium inline-flex items-center justify-center transition-colors hover:border-accent hover:text-accent"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 w-full max-w-4xl"
            variants={staggerContainer}
          >
            {capabilities.map((c) => (
              <motion.div key={c.title} variants={revealUp}>
                <CapabilityCard icon={c.icon} title={c.title} subtitle={c.subtitle} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-mono text-[10px] text-muted-foreground tracking-widest">SCROLL</span>
        <motion.div
          className="w-px h-8 bg-muted-foreground/30"
          animate={reduceMotion ? undefined : { scaleY: [1, 0.5, 1] }}
          transition={reduceMotion ? undefined : { duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
