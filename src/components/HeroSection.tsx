import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const transition = { type: "spring" as const, duration: 0.8, bounce: 0 };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-svh grid-overlay">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-svh pt-20">
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span className="label-tag mb-6" variants={itemVariants} transition={transition}>
            ENTERPRISE IT INFRASTRUCTURE
          </motion.span>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] uppercase"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            transition={transition}
          >
            Elevating
            <br />
            Business Through
            <br />
            <span className="accent-text">Technology.</span>
          </motion.h1>

          <motion.p
            className="mt-8 text-muted-foreground max-w-[50ch] text-base md:text-lg leading-relaxed"
            variants={itemVariants}
            transition={transition}
          >
            With a relentless commitment to excellence, we help our clients harness the power of technology to drive growth, efficiency, and success.
          </motion.p>

          <motion.div className="flex gap-4 mt-10" variants={itemVariants} transition={transition}>
            <a href="#services" className="cta-button">VIEW SPECS</a>
            <a href="#about" className="cta-button-outline">ABOUT US</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...transition, delay: 0.3 }}
        >
          <div className="relative aspect-[4/3] overflow-hidden border border-border">
            <img src={heroImage} alt="Abstract digital technology network" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-muted-foreground">
              <span className="accent-text">●</span> LIVE // NEUROX HQ
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-mono text-[10px] text-muted-foreground tracking-widest">SCROLL</span>
        <motion.div
          className="w-px h-8 bg-muted-foreground/30"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
