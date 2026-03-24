import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"

const menuItems = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    desc: "Juicy beef patty, melted cheddar, lettuce, tomato, special sauce.",
    price: "Rs.850",
    category: "Burgers",
    image: "/images/menu_burger.png"
  },
  {
    id: 2,
    name: "Spicy Volcano Burger",
    desc: "Double beef, jalapeños, pepper jack, spicy mayo, crispy onions.",
    price: "Rs.700",
    category: "Burgers",
    image: "/images/menu_burger.png"
  },
  {
    id: 3,
    name: "Supreme Combo meal",
    desc: "Any burger, large fries, and a cold refreshing drink.",
    price: "Rs.2500",
    category: "Fast Food",
    image: "/images/menu_combo.png"
  },
  {
    id: 4,
    name: "Crispy Chicken Meal",
    desc: "Crispy fried chicken, fries, coleslaw, and a drink.",
    price: "Rs.3000",
    category: "Fast Food",
    image: "/images/menu_combo.png"
  },
  {
    id: 5,
    name: "Ice Cold Lemonade",
    desc: "Freshly squeezed lemons with mint and ice.",
    price: "Rs.400",
    category: "Drinks",
    image: "/images/menu_drinks.png"
  },
  {
    id: 6,
    name: "Classic Cola",
    desc: "Chilled cola with ice and a slice of lemon.",
    price: "Rs.300",
    category: "Drinks",
    image: "/images/menu_drinks.png"
  },
  {
    id: 7,
    name: "Tandoori Chicken Biryani",
    desc: "Flavorful basmati rice with spicy tandoori chicken, rich aroma, and authentic taste",
    price: "Rs.1500",
    category: "Specials",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    isSpecial: true
  }
]

export default function Menu() {
  const [activeTab, setActiveTab] = React.useState("All")
  const categories = ["All", "Burgers", "Fast Food", "Drinks", "Specials"]

  const filteredMenu = activeTab === "All" ? menuItems : menuItems.filter(item => item.category === activeTab)

  return (
    <section id="menu" className="py-20 md:py-32 w-full bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white"
          >
            Explore Our <span className="text-orange-500">Menu</span>
          </motion.h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
            Discover a variety of premium tastes, crafted with the freshest ingredients and culinary passion.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all ${activeTab === cat
                ? "bg-orange-600 text-white glow-btn"
                : "bg-neutral-800 text-white hover:bg-neutral-700"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredMenu.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="group h-full flex flex-col bg-neutral-900/60 hover:bg-neutral-900 transition-colors">
                <div className="relative h-48 sm:h-56 overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                  {item.isSpecial && (
                    <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      Special
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight pr-2">{item.name}</h3>
                    <span className="text-orange-500 font-black text-lg sm:text-xl shrink-0">{item.price}</span>
                  </div>
                </div>
                <CardContent className="pt-6 flex-grow flex flex-col justify-between">
                  <p className="text-neutral-400 mb-6 text-sm sm:text-base line-clamp-3">{item.desc}</p>
                  <Button variant="outline" className="w-full uppercase cursor-pointer font-bold tracking-widest hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all text-sm py-5 sm:py-6 glow-btn">
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
