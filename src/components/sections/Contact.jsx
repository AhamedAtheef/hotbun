import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({ name: "", email: "", message: "" })
  const [touched, setTouched] = useState({ name: false, email: false, message: false })
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (value.trim()) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    } else {
      setErrors(prev => ({ ...prev, [name]: "Please fill this field" }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    if (!value.trim()) {
      setErrors(prev => ({ ...prev, [name]: "Please fill this field" }))
    }
  }

  const isFormValid = formData.name.trim() !== "" && formData.email.trim() !== "" && formData.message.trim() !== ""

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!isFormValid) {
      setErrors({
        name: formData.name.trim() ? "" : "Please fill this field",
        email: formData.email.trim() ? "" : "Please fill this field",
        message: formData.message.trim() ? "" : "Please fill this field"
      })
      setTouched({ name: true, email: true, message: true })
      return
    }

    setStatus("success")
    setFormData({ name: "", email: "", message: "" })
    setTouched({ name: false, email: false, message: false })

    setTimeout(() => {
      setStatus("")
    }, 4000)
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white"
          >
            Find <span className="text-orange-500 glow-text">Us</span>
          </motion.h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Have a question or want to book a table? Reach out to us.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Details & Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div className="glass p-8 rounded-2xl border border-white/5 space-y-8 bg-neutral-900/40">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-600/10 rounded-lg shrink-0">
                    <MapPin className="text-orange-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Our Location</h4>
                    <p className="text-neutral-400">📍 HOT BUN Restaurant
                      123 Main Street<br />, Colombo, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-600/10 rounded-lg shrink-0">
                    <Phone className="text-orange-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Phone Number</h4>
                    <p className="text-neutral-400">+94 758963258</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-600/10 rounded-lg shrink-0">
                    <Mail className="text-orange-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email Address</h4>
                    <p className="text-neutral-400">hotbun12@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl border border-white/5 bg-neutral-900/40">
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Name"
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  {errors.name && touched.name && <span className="text-red-500 text-sm mt-1 block">Please fill this field</span>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Email"
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  {errors.email && touched.email && <span className="text-red-500 text-sm mt-1 block">Please fill this field</span>}
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Message"
                    rows="4"
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  ></textarea>
                  {errors.message && touched.message && <span className="text-red-500 text-sm mt-1 block">Please fill this field</span>}
                </div>

                {status === "success" && (
                  <div className="text-green-400 text-sm">
                    Message sent successfully!
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full uppercase font-bold tracking-widest h-12 text-md cursor-pointer ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  Submit Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Map Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 h-[500px] lg:h-auto relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl glass"
          >
            <iframe
              src="https://www.google.com/maps?q=6.928287,79.851278&hl=en&z=15&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>

            {/* Overlay (keep your style) */}
            <div className="absolute inset-0 bg-orange-600/5 pointer-events-none" />


          </motion.div>
        </div>
      </div>
    </section>
  )
}
