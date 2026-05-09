"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anjali Menon",
    role: "Home Chef",
    review:
      "The Sambar Masala took me straight back to my grandmother's kitchen in Palakkad. The aroma feels truly authentic and freshly ground.",
    rating: 5,
  },
  {
    name: "Rahul Nair",
    role: "Food Enthusiast",
    review:
      "I tried the Chicken Curry Masala for a weekend dinner and the flavors were amazing. It gave the curry a rich homemade Kerala taste.",
    rating: 5,
  },
  {
    name: "Sneha Joseph",
    role: "Working Professional",
    review:
      "The Chickpeas Masala makes cooking so much easier after work. Quick, flavorful, and tastes just like a homemade dish.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-amber-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-yellow/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-brand-orange tracking-widest uppercase mb-3">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-brown mb-6">
              Words From Our Family
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white"
            >
              <Quote className="w-10 h-10 text-brand-orange/20 mb-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <p className="text-stone-700 italic mb-8 leading-relaxed text-lg">
                "{testimonial.review}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown">{testimonial.name}</h4>
                  <p className="text-sm text-stone-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
