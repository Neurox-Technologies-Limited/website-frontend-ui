import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container-custom">
          <motion.span
            className="label-tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            ABOUT US
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-semibold tracking-tighter mt-4 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Who We <span className="accent-text">Are</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg max-w-[60ch] mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At Neurox Technologies, we are at the forefront of IT innovation,
            delivering exceptional solutions powered by strong OEM partnerships
            and cutting-edge technology.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing border-t border-border">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="label-tag block mb-4">OUR MISSION</span>
            <h3 className="text-2xl font-semibold tracking-tight mb-4">
              Driving Digital <span className="accent-text">Transformation</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with enterprise-grade IT infrastructure,
              cloud solutions, and software engineering that accelerates growth
              and operational efficiency. We bridge the gap between cutting-edge
              technology and practical business needs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="label-tag block mb-4">OUR VISION</span>
            <h3 className="text-2xl font-semibold tracking-tight mb-4">
              Leading Technology <span className="accent-text">Innovation</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the foremost technology partner for enterprises across
              Africa and beyond, setting the standard for IT excellence through
              innovation, reliability, and unwavering commitment to our clients'
              success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { value: "99.99%", label: "UPTIME SLA" },
              { value: "150+", label: "ENTERPRISE CLIENTS" },
              { value: "24/7", label: "SUPPORT COVERAGE" },
              { value: "15+", label: "OEM PARTNERSHIPS" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-background p-8 md:p-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              >
                <span className="text-4xl md:text-5xl font-semibold tracking-tighter accent-text">
                  {stat.value}
                </span>
                <span className="block font-mono text-[10px] tracking-widest text-muted-foreground mt-3">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-spacing border-t border-border">
        <div className="container-custom">
          <span className="label-tag block mb-4">CORE VALUES</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter uppercase mb-12">
            What Drives <span className="accent-text">Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              { title: "Innovation", desc: "Constantly pushing boundaries with the latest technologies and methodologies to deliver future-proof solutions." },
              { title: "Reliability", desc: "Building robust, resilient systems with 99.99% uptime SLAs backed by 24/7 monitoring and support." },
              { title: "Partnership", desc: "Working alongside our clients as true partners, understanding their unique challenges and goals." },
              { title: "Excellence", desc: "Maintaining the highest standards in every project, from initial consultation to ongoing support." },
              { title: "Integrity", desc: "Operating with transparency and honesty in all our engagements, building trust that lasts." },
              { title: "Agility", desc: "Adapting rapidly to evolving technology landscapes to keep our clients ahead of the curve." },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                className="bg-background p-8 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
              >
                <h4 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
