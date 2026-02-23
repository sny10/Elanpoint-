import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Cashmere Overcoat",
    price: "$895",
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1000&auto=format&fit=crop",
    category: "Outerwear"
  },
  {
    id: 2,
    name: "Merino Wool Turtleneck",
    price: "$245",
    image: "https://images.unsplash.com/photo-1620012253295-c159f0865f59?q=80&w=1000&auto=format&fit=crop",
    category: "Knitwear"
  },
  {
    id: 3,
    name: "Tailored Trousers",
    price: "$325",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
    category: "Bottoms"
  },
  {
    id: 4,
    name: "Silk Blend Blazer",
    price: "$1,150",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    category: "Tailoring"
  }
];

export default function ProductGrid() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-light mb-4">New Arrivals</h2>
          <p className="font-sans text-sm tracking-widest uppercase text-ink/60">Curated for the modern gentleman</p>
        </div>
        <a href="#" className="font-sans text-xs font-semibold tracking-widest uppercase hover:text-gold transition-colors border-b border-ink/20 hover:border-gold pb-1">
          View All Products
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-ink/5 mb-6 rounded-sm">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.button 
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-paper text-ink p-4 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold hover:text-paper"
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingBag className="w-5 h-5" />
              </motion.button>
            </div>
            
            <div className="text-center">
              <p className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-ink/50 mb-2">
                {product.category}
              </p>
              <h3 className="text-lg font-medium mb-1">{product.name}</h3>
              <p className="font-serif italic text-gold">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
