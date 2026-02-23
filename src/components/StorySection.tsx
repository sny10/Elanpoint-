import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="py-32 bg-ink text-paper overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="relative aspect-[4/5] overflow-hidden rounded-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1550614000-4b95d46621d8?q=80&w=1000&auto=format&fit=crop" 
            alt="Craftsmanship" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="flex flex-col justify-center">
          <motion.span 
            className="font-sans text-xs font-medium tracking-[0.3em] text-gold uppercase mb-8 block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Heritage
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-light mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Uncompromising <br />
            <span className="italic font-serif text-gold">Craftsmanship</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-paper/70 font-serif leading-relaxed mb-10 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Founded on the principles of timeless elegance and superior quality, Elan Point creates garments that transcend seasonal trends. Every stitch is a testament to our dedication to the art of tailoring.
          </motion.p>
          
          <motion.a 
            href="#"
            className="font-sans text-xs font-semibold tracking-widest uppercase hover:text-gold transition-colors border-b border-paper/20 hover:border-gold pb-1 self-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover Our Story
          </motion.a>
        </div>
      </div>

      {/* Background Typography Marquee */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none opacity-5 overflow-hidden whitespace-nowrap">
        <motion.div style={{ x: x1 }} className="text-[15vw] font-serif italic leading-none">
          Elegance • Precision • Quality •
        </motion.div>
        <motion.div style={{ x: x2 }} className="text-[15vw] font-sans font-bold leading-none mt-4">
          ELAN POINT • ELAN POINT •
        </motion.div>
      </div>
    </section>
  );
}
