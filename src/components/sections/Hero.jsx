import React from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_burger.png"
          alt="Gourmet Burger"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 font-sans max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-24 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl w-full text-center md:text-left mx-auto md:mx-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-600/10 text-orange-500 font-bold text-xs sm:text-sm tracking-widest mb-6"
          >
            NEW PREMIUM TASTE
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[1.1] tracking-tighter mb-6 text-white text-center md:text-left">
            Unleash <br className="hidden md:block" /> The <span className="text-orange-500 glow-text break-words">Flavor</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 mb-10 max-w-xl mx-auto md:mx-0 font-light text-center md:text-left leading-relaxed">
            Fresh. Hot. Delicious. Premium handcrafted burgers made with 100% Angus beef and our secret artisanal buns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <Button size="lg" className="w-full sm:w-auto uppercase tracking-wider text-sm sm:text-base font-bold py-6 px-8" asChild>
              <a href="#menu">View Menu</a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto uppercase tracking-wider text-sm sm:text-base font-bold py-6 px-8 bg-black/30 backdrop-blur-md" asChild>
              <a href="#contact">Book a Table</a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gradient Glows - using responsive sizes so no overflow */}
      <div className="absolute -bottom-1/4 -right-1/4 w-[50vh] h-[50vh] md:w-[800px] md:h-[800px] bg-orange-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute top-0 -left-1/4 w-[40vh] h-[40vh] md:w-[600px] md:h-[600px] bg-orange-600/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />
    </section>
  )
}
