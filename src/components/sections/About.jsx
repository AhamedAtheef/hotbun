import React from "react"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <img 
              src="/images/about_interior.png" 
              alt="Restaurant Interior" 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          {/* Accent decoration */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-600/20 rounded-full blur-2xl" />
          <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-orange-500/30 rounded-full" />
        </motion.div>

        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <h4 className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-3 text-glow">Our Story</h4>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight text-white">
            More than just <br /> <span className="text-orange-500 glow-text">A Burger</span>
          </h2>
          <div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed">
            <p>
              Founded in 2024, HOT BUN was born out of a simple passion: creating the perfect cinematic burger experience. We believe that fine dining quality shouldn't be restricted to fancy restaurants with tiny portions.
            </p>
            <p>
              Our chefs source only the finest, freshest, locally-grown ingredients. From our 100% grass-fed Angus patties to our artisanal brioche buns baked fresh every morning, every bite is crafted to deliver an unforgettable explosion of flavor.
            </p>
          </div>
          
          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="text-4xl font-black text-white">50+</p>
              <p className="text-sm text-orange-500 font-bold uppercase tracking-widest mt-1">Gourmet Recipes</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <p className="text-4xl font-black text-white">100%</p>
              <p className="text-sm text-orange-500 font-bold uppercase tracking-widest mt-1">Fresh Ingredients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
