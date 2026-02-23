import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full overflow-hidden bg-ink flex flex-col justify-center">
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y, opacity }}
      >
        <img 
          src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=2787&auto=format&fit=crop" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/80" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <span className="font-sans text-xs font-medium tracking-[0.3em] text-gold uppercase mb-6 block">
            The New Standard
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-paper mb-8 leading-[1.1]">
            Redefining <br className="hidden md:block" />
            <span className="italic font-serif">Modern Luxury</span>
          </h1>
          <motion.button 
            className="group inline-flex items-center gap-4 bg-paper text-ink px-8 py-4 rounded-full font-sans text-xs font-semibold tracking-widest uppercase hover:bg-gold hover:text-paper transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Product Thumbnail */}
      <motion.div 
        className="absolute bottom-12 right-12 hidden lg:flex items-center gap-4 bg-paper/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        whileHover={{ y: -5 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1594938298596-70f56fb41f05?q=80&w=1000&auto=format&fit=crop" 
          alt="Featured Product" 
          className="w-16 h-20 object-cover rounded-lg"
        />
        <div className="text-left">
          <p className="font-sans text-xs font-medium tracking-wider text-paper uppercase">Signature Suit</p>
          <p className="font-serif text-gold italic mt-1">$1,295</p>
        </div>
      </motion.div>
    </section>
  );
}
