import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 relative">
      <div aria-hidden className="gradient-hairline absolute top-0 left-0 right-0" />
      <div className="container-custom grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <Link to="/" className="inline-block">
            <span className="font-bold text-xl tracking-tighter text-foreground">
              Neuro<span className="t5-red">x</span>
            </span>
            <span className="text-[10px] text-muted-foreground tracking-widest ml-2">
              TECHNOLOGIES
            </span>
          </Link>
          <p className="text-muted-foreground text-sm mt-4 max-w-[30ch]">
            Enterprise IT infrastructure, cloud solutions, and software
            engineering.
          </p>
        </div>

        <div className="md:col-span-2">
          <span className="label-tag block mb-4">NAVIGATION</span>
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Partners", href: "/partners" },
            { label: "Contact", href: "/contact" },
          ].map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="block text-xs text-muted-foreground hover:text-foreground transition-colors mb-2"
            >
              {l.label.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="md:col-span-2">
          <span className="label-tag block mb-4">PRODUCTS</span>
          <Link to="/products/poker-21" className="block text-xs text-muted-foreground hover:text-foreground transition-colors mb-2">
            POKER 21 (CASHIE)
          </Link>
          <Link to="/products/honk" className="block text-xs text-muted-foreground hover:text-foreground transition-colors mb-2">
            HONK
          </Link>
          <Link to="/products/laundromart" className="block text-xs text-muted-foreground hover:text-foreground transition-colors mb-2">
            LAUNDROMART
          </Link>
        </div>

        <div className="md:col-span-3">
          <span className="label-tag block mb-4">GET IN TOUCH</span>
          <a
            href="mailto:info@neuroxtech.com"
            className="block text-xs text-muted-foreground hover:text-foreground transition-colors mb-2"
          >
            info@neuroxtech.com
          </a>
          <a
            href="tel:+2348184733736"
            className="block text-xs text-muted-foreground hover:text-foreground transition-colors mb-2"
          >
            +234 818 473 3736
          </a>
        </div>

        <div className="md:col-span-2">
          <span className="label-tag block mb-4">SYSTEM STATUS</span>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs text-muted-foreground">
              OPERATIONAL
            </span>
          </div>
          <span className="text-xs text-muted-foreground block mb-1">
            LATENCY: 24ms
          </span>
        </div>
      </div>

      <div className="container-custom mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <span className="text-[10px] text-muted-foreground">
          © {new Date().getFullYear()} NEUROX TECHNOLOGIES. ALL RIGHTS RESERVED.
        </span>
        <span className="text-[10px] text-muted-foreground">
          ARCHITECTURE FOR PRECISION.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
