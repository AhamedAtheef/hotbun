import React from "react"
import { motion } from "framer-motion"
import { Utensils, ShoppingBag, Truck } from "lucide-react"

const services = [
  {
    id: "dine-in",
    icon: Utensils,
    title: "Dine-In",
    desc: "Experience our luxury interior and premium table service.",
  },
  {
    id: "takeaway",
    icon: ShoppingBag,
    title: "Takeaway",
    desc: "Grab your hot meals on the go packaging designed to keep food fresh.",
  },
  {
    id: "delivery",
    icon: Truck,
    title: "Fast Delivery",
    desc: "Hot and delicious food delivered straight to your doorstep in minutes.",
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-black relative border-y border-white/5">
      <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('/images/hero_burger.png')" }}></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white"
          >
            How We <span className="text-orange-500">Serve</span>
          </motion.h2>
          <div className="h-1 w-20 bg-orange-600 mx-auto rounded-full glow-btn"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-10 rounded-2xl flex flex-col items-center text-center group hover:border-orange-500/50 transition-colors bg-neutral-900/40"
            >
              <div className="w-20 h-20 rounded-full bg-orange-600/10 flex items-center justify-center mb-6 group-hover:bg-orange-600/20 transition-colors">
                <service.icon className="w-10 h-10 text-orange-500 glow-text transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest text-white">{service.title}</h3>
              <p className="text-neutral-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  )
}
