import React, { useState, useEffect } from "react"
import { Menu, X, Flame } from "lucide-react"
import { cn } from "../lib/utils"

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  // Prevent scroll when mobil menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full   ",
        isScrolled ? "glass bg-black/90 py-3 shadow-md" : "bg-transparent py-4 md:py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between md:border-0 md:p-0 lg:border lg:border-white/25 lg:rounded-full lg:p-2">
        <a href="#home" className="flex items-center gap-2 text-xl md:text-2xl font-black tracking-tighter text-white group z-50">
          <Flame className="text-orange-500 h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 transition-transform" />
          HOT <span className="text-orange-500 glow-text">BUN</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-orange-500 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a href="#menu" className="bg-orange-600 text-white px-5 py-2.5 rounded-full font-bold text-sm tracking-wide glow-btn hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20">
            Menu Items
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white hover:text-orange-500 transition-colors p-2 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/95 glass flex flex-col items-center justify-center gap-8 lg:hidden transition-transform duration-300 px-6 backdrop-blur-xl",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl sm:text-3xl font-bold uppercase tracking-widest text-white hover:text-orange-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          onClick={() => setIsMobileMenuOpen(false)}
          href="#menu"
          className="mt-8 bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg glow-btn w-full max-w-xs text-center hover:bg-orange-700 transition-colors"
        >
          Menu Items
        </a>
      </div>
    </nav>
  )
}
