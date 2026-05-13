import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Cloud, Database, Headphones, Shield, Code, Cog, Lightbulb, Palette, GraduationCap, Cpu, LineChart, ShoppingCart, RefreshCw } from "lucide-react";

const services = [
  {
    num: "01",
    tag: "MANAGED SERVICES",
    title: "End-to-End IT Operations",
    desc: "We outsource resources to your environment within the shortest period, ensuring seamless integration and minimal downtime.",
    icon: Headphones,
  },
  {
    num: "02",
    tag: "CLOUD SYSTEMS",
    title: "High-Availability Infrastructure",
    desc: "Cloud services to help businesses scale and optimize operations with redundant, self-healing clusters and global availability.",
    icon: Cloud,
  },
  {
    num: "03",
    tag: "DATA CENTER",
    title: "Build & Support",
    desc: "Our experienced engineers design, build, and maintain your data center infrastructure from the ground up.",
    icon: Database,
  },
  {
    num: "04",
    tag: "PROCUREMENT",
    title: "Hardware & Software",
    desc: "We help businesses purchase, support, and renew their hardware and software with optimal solution guidance.",
    icon: Server,
  },
  {
    num: "05",
    tag: "CYBERSECURITY",
    title: "Threat Protection & Compliance",
    desc: "Comprehensive cybersecurity solutions to protect your digital assets and ensure regulatory compliance.",
    icon: Shield,
  },
  {
    num: "06",
    tag: "SOFTWARE ENGINEERING",
    title: "Custom Development",
    desc: "Bespoke software solutions from web and mobile applications to enterprise platforms and white-label products.",
    icon: Code,
  },
  {
    num: "07",
    tag: "AUTOMATION",
    title: "Workflow Optimization",
    desc: "RPA, business process reengineering, intelligent scheduling systems, and workflow orchestration tools.",
    icon: Cog,
  },
  {
    num: "08",
    tag: "RESEARCH & INNOVATION",
    title: "Emerging Tech R&D",
    desc: "Experimental prototyping, blockchain research, and academic-industry collaboration driving next-gen solutions.",
    icon: Lightbulb,
  },
  {
    num: "09",
    tag: "UX & DESIGN",
    title: "User Experience Design",
    desc: "User research, UI/UX design, interactive prototypes, and accessibility compliance for digital products.",
    icon: Palette,
  },
  {
    num: "10",
    tag: "TRAINING",
    title: "Capacity Building",
    desc: "Onboarding programs, technical training, workshops on emerging tech, and ongoing support services.",
    icon: GraduationCap,
  },
  {
    num: "11",
    tag: "IoT & EDGE",
    title: "Connected Solutions",
    desc: "IoT device integration, edge computing for low-latency applications, and smart industrial solutions.",
    icon: Cpu,
  },
  {
    num: "12",
    tag: "DIGITAL TRANSFORMATION",
    title: "Modernization Consulting",
    desc: "Strategies for adopting emerging tech, business process digitalization, and industry-specific digital solutions.",
    icon: LineChart,
  },
  {
    num: "13",
    tag: "E-COMMERCE & ERP",
    title: "Commerce Platforms",
    desc: "Custom e-commerce platforms, ERP integration, inventory management, and CRM sales automation.",
    icon: ShoppingCart,
  },
  {
    num: "14",
    tag: "LEGACY MODERNIZATION",
    title: "System Migration & Upgrade",
    desc: "Migrating legacy systems to modern tech, rewriting codebases, and ensuring modern infrastructure compatibility.",
    icon: RefreshCw,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-spacing border-t border-border relative overflow-hidden" ref={ref}>
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[600px] h-[600px] -translate-y-1/4 translate-x-1/4 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 60%)" }}
      />
      <div className="container-custom">
        <motion.span
          className="label-tag"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          02 // CAPABILITIES
        </motion.span>
        <motion.h2
          className="text-4xl md:text-6xl font-semibold tracking-tighter mt-4 uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What We <span className="gradient-text">Execute</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 relative">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              className="service-card group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.04 }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-muted-foreground">
                  {service.num} // {service.tag}
                </span>
                <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-medium mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground max-w-[35ch] text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
