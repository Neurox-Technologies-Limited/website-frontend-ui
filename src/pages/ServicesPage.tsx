import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Server, Cloud, Database, Headphones, Shield, Code, Cog, Lightbulb, Palette, GraduationCap, Cpu, LineChart, ShoppingCart, RefreshCw } from "lucide-react";

const services = [
  {
    num: "01",
    tag: "MANAGED SERVICES",
    title: "End-to-End IT Operations",
    desc: "We offer managed services to help businesses improve their IT operations. We outsource resources to your environment within the shortest period, ensuring seamless integration and minimal downtime.",
    icon: Headphones,
    details: ["24/7 Monitoring", "Incident Management", "Patch Management", "Performance Optimization"],
  },
  {
    num: "02",
    tag: "CLOUD SYSTEMS",
    title: "High-Availability Infrastructure",
    desc: "Cloud services (Microsoft, Oracle, etc.) to help businesses of all sizes scale and optimize their operations with redundant, self-healing clusters and global availability.",
    icon: Cloud,
    details: ["Cloud Migration", "Hybrid Cloud Setup", "Auto-scaling", "Disaster Recovery"],
  },
  {
    num: "03",
    tag: "DATA CENTER",
    title: "Build & Support",
    desc: "We help businesses build and support their own data centres. Our experienced engineers design, build, and maintain your data center infrastructure from the ground up.",
    icon: Database,
    details: ["Design & Planning", "Installation", "Cooling Systems", "Power Management"],
  },
  {
    num: "04",
    tag: "PROCUREMENT",
    title: "Hardware & Software",
    desc: "We help businesses purchase, support, and renew their hardware and software with a team of professionals guiding optimal solution choices and vendor negotiations.",
    icon: Server,
    details: ["Vendor Management", "License Optimization", "Asset Tracking", "Renewal Management"],
  },
  {
    num: "05",
    tag: "CYBERSECURITY",
    title: "Threat Protection & Compliance",
    desc: "Comprehensive cybersecurity solutions to protect your digital assets, ensure regulatory compliance, and respond to threats in real-time across all infrastructure layers.",
    icon: Shield,
    details: ["Threat Detection", "Vulnerability Assessment", "Compliance Audits", "Incident Response"],
  },
  {
    num: "06",
    tag: "CUSTOM SOFTWARE DEVELOPMENT",
    title: "Full-Stack Engineering",
    desc: "End-to-end software development services covering web applications, mobile apps, enterprise software solutions, and embedded systems — engineered for scale, security, and performance.",
    icon: Code,
    details: ["Web Application Development", "Mobile Application Development", "Enterprise Software Solutions", "Embedded Systems Development"],
  },
  {
    num: "07",
    tag: "AUTOMATION & WORKFLOW",
    title: "Intelligent Process Optimization",
    desc: "Transform your operations with Robotic Process Automation (RPA), business process reengineering, intelligent scheduling systems, and workflow orchestration tools that eliminate manual bottlenecks and boost efficiency.",
    icon: Cog,
    details: ["Robotic Process Automation (RPA)", "Business Process Reengineering", "Intelligent Scheduling Systems", "Workflow Orchestration & Monitoring"],
  },
  {
    num: "08",
    tag: "RESEARCH & INNOVATION",
    title: "Emerging Technology R&D",
    desc: "Stay ahead of the curve with experimental technology prototyping, blockchain-based application research, and deep academic-industry collaborations that turn cutting-edge ideas into production-ready solutions.",
    icon: Lightbulb,
    details: ["Experimental Technology Prototyping", "Blockchain Application Research", "Academic & Industry Collaboration", "Innovation Labs & PoCs"],
  },
  {
    num: "09",
    tag: "UX & INTERFACE DESIGN",
    title: "Human-Centered Design",
    desc: "Craft exceptional digital experiences through user research, persona development, UI/UX design, interactive prototypes, wireframes, and accessibility compliance — ensuring every interaction is intuitive and inclusive.",
    icon: Palette,
    details: ["User Research & Persona Development", "UI/UX Design for Apps & Websites", "Interactive Prototypes & Wireframes", "Accessibility Compliance & Design"],
  },
  {
    num: "10",
    tag: "TRAINING & CAPACITY BUILDING",
    title: "Knowledge Empowerment",
    desc: "Equip your teams with the skills they need through onboarding programs for new technologies, technical training, seminars and workshops on emerging tech topics, and ongoing support and maintenance services.",
    icon: GraduationCap,
    details: ["Technology Onboarding Programs", "Technical Team Training", "Emerging Tech Seminars & Workshops", "Ongoing Support & Maintenance"],
  },
  {
    num: "11",
    tag: "IoT & EDGE COMPUTING",
    title: "Connected Intelligence",
    desc: "Build the connected future with IoT device integration and development, edge computing solutions for low-latency applications, and smart home or industrial IoT solutions that bridge the physical and digital worlds.",
    icon: Cpu,
    details: ["IoT Device Integration & Development", "Edge Computing Solutions", "Smart Home / Industrial IoT", "Real-time Data Processing"],
  },
  {
    num: "12",
    tag: "DIGITAL TRANSFORMATION",
    title: "Strategic Modernization Consulting",
    desc: "Navigate the digital landscape with strategies for adopting emerging technologies, business process digitalization, legacy system modernization, and industry-specific digital solutions for healthcare, fintech, retail, and beyond.",
    icon: LineChart,
    details: ["Emerging Technology Adoption", "Business Process Digitalization", "Legacy System Modernization", "Industry-Specific Solutions"],
  },
  {
    num: "13",
    tag: "E-COMMERCE & ERP",
    title: "Commerce & Enterprise Platforms",
    desc: "Power your business growth with custom e-commerce platforms, ERP system integration and customization, inventory management systems, and CRM and sales automation — all tailored to your unique operational needs.",
    icon: ShoppingCart,
    details: ["Custom E-commerce Platforms", "ERP Integration & Customization", "Inventory Management Systems", "CRM & Sales Automation"],
  },
  {
    num: "14",
    tag: "LEGACY MODERNIZATION",
    title: "System Migration & Upgrade",
    desc: "Breathe new life into aging infrastructure by migrating from legacy systems to modern technologies, rewriting or updating legacy codebases, enhancing performance, and ensuring compatibility with modern infrastructure.",
    icon: RefreshCw,
    details: ["Legacy-to-Modern Migration", "Codebase Rewriting & Updates", "Performance Enhancement", "Modern Infrastructure Compatibility"],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container-custom">
          <motion.span
            className="label-tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            OUR SERVICES
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-semibold tracking-tighter mt-4 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What We <span className="gradient-text">Execute</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg max-w-[60ch] mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Enterprise-grade technology services designed to architect, deploy,
            and maintain infrastructure that drives business success.
          </motion.p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              className="border-t border-border py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
            >
              <div className="lg:col-span-1 flex items-start">
                <service.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <div className="lg:col-span-4">
                <span className="font-mono text-xs text-muted-foreground block mb-2">
                  {service.num} // {service.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  {service.title}
                </h3>
              </div>
              <div className="lg:col-span-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <div className="lg:col-span-3">
                <span className="label-tag block mb-3">CAPABILITIES</span>
                <ul className="space-y-2">
                  {service.details.map((d) => (
                    <li key={d} className="text-xs text-muted-foreground font-mono flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
