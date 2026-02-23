import { ArrowRight, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <h2 className="font-sans text-2xl font-medium tracking-[0.15em] uppercase mb-6">
              Elan Point
            </h2>
            <p className="font-serif text-paper/60 text-lg max-w-md mb-8">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex border-b border-paper/20 pb-2 max-w-md focus-within:border-gold transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-transparent border-none outline-none flex-1 font-sans text-sm placeholder:text-paper/40"
              />
              <button type="submit" className="text-paper hover:text-gold transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase mb-8 text-gold">Shop</h3>
            <ul className="space-y-4 font-sans text-sm text-paper/70">
              <li><a href="#" className="hover:text-gold transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Clothing</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Sale</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase mb-8 text-gold">About</h3>
            <ul className="space-y-4 font-sans text-sm text-paper/70">
              <li><a href="#" className="hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Stores</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-paper/10 gap-6">
          <p className="font-sans text-xs text-paper/40">
            &copy; {new Date().getFullYear()} Elan Point. All rights reserved.
          </p>
          <div className="flex gap-6 text-paper/40">
            <a href="#" className="hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-gold transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-gold transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>
          <div className="flex gap-6 font-sans text-xs text-paper/40">
            <a href="#" className="hover:text-paper transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-paper transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
