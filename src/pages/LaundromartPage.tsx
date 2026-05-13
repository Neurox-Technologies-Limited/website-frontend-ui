import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shirt, Search, CreditCard, Bell, Truck, Store, Clock, BarChart3, ArrowLeft } from "lucide-react";

const features = [
  { icon: Search, title: "Advanced Search Filters", desc: "Filter by price range, laundry categories, and location to find the perfect laundry store nearby." },
  { icon: CreditCard, title: "Multiple Payment Options", desc: "Pay with cash, credit/debit card, or in-app wallet for seamless checkout." },
  { icon: Bell, title: "Order Status Tracking", desc: "Receive push notifications on all order status updates, from store confirmation to delivery." },
  { icon: Shirt, title: "Promo Code System", desc: "Apply promo codes for discounts on order subtotals, driving customer retention and loyalty." },
  { icon: Truck, title: "Delivery Partner App", desc: "Dedicated app for delivery partners with availability toggle, earnings reports, and route navigation." },
  { icon: Store, title: "Store Management Panel", desc: "Store owners manage menus, preparation times, operational hours, and process all orders in one place." },
  { icon: Clock, title: "Preparation Time Control", desc: "Set specific durations for preparing orders and adjust them for different days and hours." },
  { icon: BarChart3, title: "Admin Analytics Dashboard", desc: "Comprehensive dashboard with user counts, order analytics, revenue tracking, and site settings management." },
];

const panels = [
  { title: "User App", desc: "Mobile app for customers to browse stores, place laundry orders, track deliveries, and manage payments.", color: "accent" },
  { title: "Store Panel", desc: "Web dashboard for laundry stores to manage menus, orders, availability, and operational settings.", color: "accent" },
  { title: "Delivery Partner App", desc: "Mobile app for delivery partners to accept orders, navigate routes, track earnings, and manage documents.", color: "accent" },
  { title: "Admin Panel", desc: "Full admin dashboard for managing users, stores, categories, service fees, and platform-wide settings.", color: "accent" },
];

const transition = { type: "spring" as const, duration: 0.8, bounce: 0 };

const LaundromartPage = () => {
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
              Laundromart
              <br />
              <span className="gradient-text">Laundry Delivery</span>
            </h1>
            <p className="mt-8 text-muted-foreground max-w-[60ch] text-base md:text-lg leading-relaxed">
              Launch your on-demand laundry service app quickly and effortlessly. A complete four-sided marketplace solution with user app, store panel, delivery partner app, and admin dashboard — ready for white-labeling and customization.
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
            Four-Sided <span className="accent-text">Marketplace</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
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
            Get your own branded laundry delivery platform with free white-labeling, server installation, and comprehensive tech support.
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

export default LaundromartPage;
