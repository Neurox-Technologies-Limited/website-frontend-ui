import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
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
            CONTACT US
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-semibold tracking-tighter mt-4 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to <span className="gradient-text">Execute?</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg max-w-[60ch] mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Reach out to discuss your infrastructure needs and explore how
            Neurox Technologies can architect your success.
          </motion.p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-4 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <span className="label-tag block mb-4">GET IN TOUCH</span>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold block">Email</span>
                    <span className="text-sm text-muted-foreground">info@neuroxtech.com</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold block mb-1">Phone</span>
                    <div className="flex items-center gap-2">
                      <a
                        href="tel:+2348184733736"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        +234 818 473 3736
                      </a>
                      <span className="font-mono text-[10px] text-muted-foreground/70 uppercase tracking-widest">primary</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <a
                        href="tel:+2348144488577"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        +234 814 448 8577
                      </a>
                      <span className="font-mono text-[10px] text-muted-foreground/70 uppercase tracking-widest">secondary</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold block">Office</span>
                    <span className="text-sm text-muted-foreground">Block 18 Plot 2B Baptist Church Street, Magodo Phase 1</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="label-tag block mb-4">SYSTEM STATUS</span>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-muted-foreground">ALL SYSTEMS OPERATIONAL</span>
              </div>
              <span className="text-xs text-muted-foreground block">RESPONSE TIME: &lt; 24 HOURS</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label-tag block mb-2">NAME</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="label-tag block mb-2">EMAIL</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label-tag block mb-2">ORGANIZATION</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="label-tag block mb-2">PHONE</label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
              </div>
              <div>
                <label className="label-tag block mb-2">SERVICE INTEREST</label>
                <select className="w-full bg-transparent border-b border-border py-3 text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors">
                  <option value="">Select a service</option>
                  <option value="managed">Managed Services</option>
                  <option value="cloud">Cloud Systems</option>
                  <option value="datacenter">Data Center</option>
                  <option value="procurement">Procurement</option>
                  <option value="security">Cybersecurity</option>
                  <option value="software">Software Engineering</option>
                </select>
              </div>
              <div>
                <label className="label-tag block mb-2">MESSAGE</label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Describe your infrastructure requirements..."
                />
              </div>
              <button type="submit" className="cta-button">
                TRANSMIT REQUEST
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
