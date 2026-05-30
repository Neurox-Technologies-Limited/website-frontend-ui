import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cloud, Shield, Code } from "lucide-react";
import { CapabilityCard } from "@/components/ui/CapabilityCard";
import { heroHeadline, revealUp, staggerContainer } from "@/lib/motion";
import { IMAGES, onImgError } from "@/lib/images";

const capabilities = [
  { icon: Cloud, title: "Cloud & Infrastructure", subtitle: "Scalable, secure, global" },
  { icon: Shield, title: "Cybersecurity", subtitle: "Detect, defend, recover" },
  { icon: Code, title: "Software Engineering", subtitle: "Custom builds, mobile + web" },
];

const HeroSection = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative min-h-[88svh] flex items-center pt-28 pb-16 gradient-mesh-bg overflow-hidden">
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="label-tag mb-6 inline-flex items-center gap-2" variants={revealUp}>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              ENTERPRISE IT INFRASTRUCTURE
            </motion.span>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02]"
              variants={heroHeadline}
            >
              Elevating Business Through{" "}
              <span className="gradient-text">Technology.</span>
            </motion.h1>

            <motion.p
              className="mt-7 text-muted-foreground max-w-[54ch] text-base md:text-lg leading-relaxed"
              variants={revealUp}
            >
              With a relentless commitment to excellence, we help our clients
              harness the power of technology to drive growth, efficiency, and
              success.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mt-9" variants={revealUp}>
              <Link to="/services" className="gradient-cta h-12 px-7 rounded-xl text-sm font-semibold inline-flex items-center justify-center transition-transform duration-150 active:scale-[0.98]">
                View Services
              </Link>
              <Link to="/contact" className="cta-button-outline">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="media-frame aspect-[4/3] shadow-2xl">
              <img
                src={IMAGES.datacenter}
                onError={onImgError}
                loading="eager"
                alt="Modern data center server infrastructure"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent"
              />
            </div>
          </motion.div>
        </div>

        {/* Capability cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14 w-full"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {capabilities.map((c) => (
            <motion.div key={c.title} variants={revealUp}>
              <CapabilityCard icon={c.icon} title={c.title} subtitle={c.subtitle} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em]">SCROLL</span>
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
