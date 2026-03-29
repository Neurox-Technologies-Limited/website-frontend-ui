import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, Spade, Car, Shirt, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PARTNERS", href: "/partners" },
  { label: "CONTACT", href: "/contact" },
];

const products = [
  {
    name: "Poker 21 (Cashie)",
    desc: "White-label Whot card game platform with integrated wallet system",
    href: "/products/poker-21",
    icon: Spade,
  },
  {
    name: "Honk",
    desc: "On-demand roadside assistance app solution",
    href: "/products/honk",
    icon: Car,
  },
  {
    name: "Laundromart",
    desc: "On-demand laundry delivery app marketplace",
    href: "/products/laundromart",
    icon: Shirt,
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : ""
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tighter text-foreground">
            Neuro<span className="t5-red">x</span>
          </span>
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest hidden sm:block">
            TECHNOLOGIES
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Products Mega Menu Trigger */}
          <div ref={megaRef} className="relative">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              PRODUCTS
              <ChevronDown className={`w-3 h-3 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-4 w-[560px] bg-card border border-border shadow-2xl p-6"
                >
                  <span className="label-tag block mb-4">WHITE LABEL PRODUCTS</span>
                  <div className="grid grid-cols-1 gap-2">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        to={product.href}
                        onClick={() => setProductsOpen(false)}
                        className="flex items-start gap-4 p-4 hover:bg-muted/50 transition-colors group"
                      >
                        <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                          <product.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-foreground block">{product.name}</span>
                          <span className="text-xs text-muted-foreground">{product.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] text-muted-foreground">
              SYS: OPERATIONAL
            </span>
          </div>
          <Link to="/contact" className="cta-button text-[10px]">
            INITIALIZE CONTACT
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-px bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-6 h-px bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-sm tracking-widest text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Products Accordion */}
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="font-mono text-sm tracking-widest text-muted-foreground hover:text-foreground inline-flex items-center gap-1 w-fit"
              >
                PRODUCTS
                <ChevronDown className={`w-3 h-3 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileProductsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col gap-3 pl-4 overflow-hidden"
                  >
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        to={product.href}
                        onClick={() => { setMobileOpen(false); setMobileProductsOpen(false); }}
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <product.icon className="w-4 h-4" />
                        <span className="text-xs tracking-wide">{product.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link to="/contact" onClick={() => setMobileOpen(false)} className="cta-button text-[10px] w-fit mt-2">
                INITIALIZE CONTACT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
