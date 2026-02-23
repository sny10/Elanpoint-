import { motion } from "motion/react";

const collections = [
  {
    id: 1,
    title: "The Evening Edit",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Weekend Essentials",
    image: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Summer Linen",
    image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function FeaturedCarousel() {
  return (
    <section className="py-20 md:py-32 relative bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full mb-12">
        <h2 className="text-4xl md:text-5xl font-light">Curated Collections</h2>
      </div>
      
      <div className="flex gap-8 px-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8 w-full">
        {collections.map((item, i) => (
          <motion.div 
            key={item.id} 
            className="w-[85vw] md:w-[40vw] lg:w-[30vw] shrink-0 group cursor-pointer snap-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h3 className="text-2xl font-serif italic group-hover:text-gold transition-colors">{item.title}</h3>
            <p className="font-sans text-xs font-semibold tracking-widest uppercase mt-4 border-b border-ink/20 inline-block pb-1 group-hover:border-gold transition-colors">
              Explore
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
