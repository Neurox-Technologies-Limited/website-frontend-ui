import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Spade, CreditCard, Users, Shield, Smartphone, Globe, Zap, BarChart3, ArrowLeft } from "lucide-react";

const features = [
  { icon: Spade, title: "Whot Card Game Engine", desc: "Full-featured Whot card game with real-time multiplayer, automated dealing, and rule enforcement." },
  { icon: CreditCard, title: "Cashie Wallet System", desc: "Integrated digital wallet for seamless deposits, withdrawals, and in-game transactions with multiple payment gateways." },
  { icon: Users, title: "Multiplayer Rooms", desc: "Create private or public game rooms with up to 6 players, real-time chat, and tournament brackets." },
  { icon: Shield, title: "Anti-Fraud & Fair Play", desc: "Advanced algorithms to detect collusion, bot play, and ensure fair card distribution for all players." },
  { icon: Smartphone, title: "Cross-Platform Apps", desc: "Native iOS and Android apps built with Flutter, plus a responsive web app for seamless play anywhere." },
  { icon: Globe, title: "Multi-Currency Support", desc: "Accept payments in multiple currencies with automatic conversion and localized payment methods." },
  { icon: Zap, title: "Real-Time Gameplay", desc: "WebSocket-powered real-time game state sync with sub-100ms latency for smooth, lag-free gameplay." },
  { icon: BarChart3, title: "Admin Analytics Dashboard", desc: "Comprehensive admin panel with player analytics, revenue tracking, game statistics, and user management." },
];

const panels = [
  { title: "Player App", desc: "Intuitive mobile app for players to join games, manage wallets, and compete in tournaments.", color: "accent" },
  { title: "Admin Panel", desc: "Full-featured web dashboard for managing users, games, payments, and platform settings.", color: "accent" },
  { title: "Agent System", desc: "Multi-tier agent and referral system for player acquisition and commission management.", color: "accent" },
];

const transition = { type: "spring" as const, duration: 0.8, bounce: 0 };

const Poker21Page = () => {
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
              Poker 21
              <br />
              <span className="gradient-text">(Cashie)</span>
            </h1>
            <p className="mt-8 text-muted-foreground max-w-[60ch] text-base md:text-lg leading-relaxed">
              A fully customizable white-label Whot card game platform with integrated digital wallet system. Launch your own real-money card gaming platform with our production-ready solution featuring multiplayer rooms, tournaments, and a comprehensive agent system.
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
            Complete <span className="accent-text">Ecosystem</span>
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
            Get your own branded Whot card gaming platform up and running in weeks, not months. Full source code, dedicated support, and unlimited customization.
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

export default Poker21Page;
