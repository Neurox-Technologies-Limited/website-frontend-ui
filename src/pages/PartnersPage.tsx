import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const partnerCategories = [
  {
    category: "CLOUD & INFRASTRUCTURE",
    partners: ["Microsoft", "Oracle", "Red Hat", "SUSE", "Dell", "HPE", "Huawei"],
  },
  {
    category: "SECURITY",
    partners: ["Check Point", "Fortinet", "Thales", "CyberSOC", "Broadcom"],
  },
  {
    category: "DATA & SOFTWARE",
    partners: ["MongoDB", "DataStax", "Commvault", "ManageEngine", "Antea"],
  },
  {
    category: "NETWORKING",
    partners: ["Cisco", "Huawei", "Fortinet"],
  },
];

const PartnersPage = () => {
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
            OUR PARTNERS
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-semibold tracking-tighter mt-4 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our <span className="gradient-text">Ecosystem</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg max-w-[60ch] mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Strategic partnerships with leading OEMs and technology providers,
            ensuring our clients benefit from the best solutions available.
          </motion.p>
        </div>
      </section>

      {partnerCategories.map((cat, ci) => (
        <section key={cat.category} className="border-t border-border">
          <div className="container-custom py-12 md:py-16">
            <motion.span
              className="label-tag block mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 + ci * 0.1 }}
            >
              {cat.category}
            </motion.span>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-border">
              {cat.partners.map((partner, i) => (
                <motion.div
                  key={`${cat.category}-${partner}`}
                  className="bg-background p-6 flex items-center justify-center h-24 group hover:bg-muted/50 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <span className="font-mono text-xs tracking-widest text-muted-foreground group-hover:text-foreground transition-colors text-center">
                    {partner.toUpperCase()}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Partnership CTA */}
      <section className="section-spacing border-t border-border">
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-semibold tracking-tighter uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Become a <span className="accent-text">Partner</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground mt-4 max-w-[50ch] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Interested in partnering with Neurox Technologies? Reach out to
            explore collaboration opportunities.
          </motion.p>
          <motion.a
            href="/contact"
            className="cta-button inline-block mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            INITIALIZE CONTACT
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersPage;
