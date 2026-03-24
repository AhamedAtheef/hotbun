import React from "react"
import { Flame, Instagram, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 text-2xl font-black tracking-tighter text-white group mb-4 w-fit">
              <Flame className="text-orange-500 h-8 w-8" />
              HOT <span className="text-orange-500 glow-text">BUN</span>
            </a>
            <p className="text-neutral-400 mr-8 max-w-sm">
              The premier destination for handcrafted burgers, premium ingredients, and unforgettable culinary experiences.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-neutral-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#menu" className="text-neutral-400 hover:text-orange-500 transition-colors">Our Menu</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-orange-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-orange-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-orange-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-orange-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} HOT BUN. All rights reserved.
          </p>
          <div className="text-neutral-400 text-sm flex gap-4">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
