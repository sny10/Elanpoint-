import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = ["Home", "Shop", "Collections", "About Us", "Contact"];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-colors duration-500",
        isScrolled ? "bg-paper/90 backdrop-blur-md border-b border-ink/5 text-ink" : "bg-transparent text-paper"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-sans text-xl font-medium tracking-[0.15em] uppercase z-50">
          Elan Point
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href="#" 
              className="font-sans text-xs font-medium tracking-widest uppercase hover:text-gold transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 z-50">
          <button className="hover:text-gold transition-colors">
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button className="hover:text-gold transition-colors relative">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-gold text-ink text-[8px] font-bold rounded-full flex items-center justify-center">
              2
            </span>
          </button>
          <button 
            className="md:hidden hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={cn(
          "fixed inset-0 bg-paper text-ink z-40 flex flex-col items-center justify-center gap-8 md:hidden",
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navLinks.map((link, i) => (
          <motion.a
            key={link}
            href="#"
            className="font-sans text-2xl font-light tracking-widest uppercase hover:text-gold transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link}
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  );
}
