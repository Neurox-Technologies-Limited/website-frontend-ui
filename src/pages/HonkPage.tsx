import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Car, MapPin, CreditCard, Bell, Star, Shield, Globe, Headphones, ArrowLeft } from "lucide-react";

const features = [
  { icon: Car, title: "Find the Service", desc: "Search for popular service categories and specific categories effortlessly using the intuitive search page." },
  { icon: CreditCard, title: "Multiple Payment Options", desc: "Pay with cash, credit/debit card, wallet, or Google Pay for maximum convenience." },
  { icon: MapPin, title: "Real-Time Job Tracking", desc: "Track job details including location and status through the live tracking interface." },
  { icon: Bell, title: "Instant Notifications", desc: "Receive push notifications for job requests, status updates, and payment confirmations." },
  { icon: Star, title: "Rating & Reviews", desc: "Rate service providers and users based on service quality, building trust across the platform." },
  { icon: Shield, title: "Wallet System", desc: "In-app wallet for payments with easy top-up via credit or debit cards." },
  { icon: Globe, title: "Multi-Language Support", desc: "Support for English, Spanish, French, Japanese, and more for global reach." },
  { icon: Headphones, title: "Admin Dashboard", desc: "Manage users, locations, job fares, promo codes, and platform settings from one panel." },
];

const panels = [
  { title: "User App", desc: "Intuitive mobile app for users to request roadside assistance, track service providers, and make payments.", color: "accent" },
  { title: "Service Provider App", desc: "Dedicated app for service providers to manage availability, accept jobs, track locations, and view earnings.", color: "accent" },
  { title: "Admin Panel", desc: "Comprehensive web dashboard for managing users, providers, locations, pricing, promo codes, and analytics.", color: "accent" },
];

const transition = { type: "spring" as const, duration: 0.8, bounce: 0 };

const HonkPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] grid-overlay flex items-center pt-20">
        <div className="container-custom">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-xs tracking-widest">BACK TO HOME</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <span className="label-tag mb-4 block">WHITE LABEL PRODUCT</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] uppercase">
              Honk
              <br />
              <span className="gradient-text">Roadside Assist</span>
            </h1>
            <p className="mt-8 text-muted-foreground max-w-[60ch] text-base md:text-lg leading-relaxed">
              Launch your roadside assistance app quickly and effortlessly. A complete white-label solution with user app, service provider app, and admin panel — featuring real-time tracking, multiple payment options, and multi-language support.
            </p>
            <div className="flex gap-4 mt-10">
              <a href="#contact" className="cta-button">REQUEST DEMO</a>
              <a href="#features" className="cta-button-outline">VIEW FEATURES</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Panels */}
      <section className="section-spacing border-t border-border">
        <div className="container-custom">
          <span className="label-tag block mb-4">PLATFORM COMPONENTS</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-12">
            Three-Sided <span className="accent-text">Marketplace</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {panels.map((panel, i) => (
              <motion.div
                key={panel.title}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.1 }}
              >
                <span className="label-tag block mb-3">{`0${i + 1}`}</span>
                <h3 className="text-xl font-semibold tracking-tight mb-2">{panel.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{panel.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section-spacing border-t border-border">
        <div className="container-custom">
          <span className="label-tag block mb-4">FEATURE SET</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-12">
            All the Features <span className="accent-text">You Need</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.05 }}
              >
                <f.icon className="w-6 h-6 accent-text mb-4" />
                <h3 className="text-sm font-semibold tracking-tight mb-2">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing border-t border-border">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6">
            Ready to <span className="accent-text">Launch?</span>
          </h2>
          <p className="text-muted-foreground max-w-[50ch] mx-auto mb-10">
            Get your own branded roadside assistance platform with free white-labeling, server installation, and app submission support.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/#contact" className="cta-button">GET STARTED</Link>
            <Link to="/" className="cta-button-outline">BACK TO HOME</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HonkPage;
