"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Leaf, ChefHat, Flame, Droplets, MapPin } from "lucide-react";

const features = [
  {
    icon: ChefHat,
    title: "Traditional Recipes",
    desc: "Passed down through generations of Kerala homemakers.",
  },
  {
    icon: Leaf,
    title: "Handpicked Ingredients",
    desc: "Sourced directly from local farmers to ensure premium quality.",
  },
  {
    icon: CheckCircle2,
    title: "Homemade Taste",
    desc: "Crafted to taste exactly like it came from your mother's kitchen.",
  },
  {
    icon: Flame,
    title: "Small Batch Production",
    desc: "Roasted and ground in small quantities to retain maximum flavor.",
  },
  {
    icon: Droplets,
    title: "Rich Aroma",
    desc: "Experience the intense fragrance of freshly ground spices.",
  },
  {
    icon: MapPin,
    title: "Kerala Authenticity",
    desc: "True to its roots, bringing the real taste of God's Own Country.",
  },
];

export default function WhyKooturoots() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-brand-orange tracking-widest uppercase mb-3">The Kooturoots Difference</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-brown mb-6">
              Why Choose Us?
            </h3>
            <p className="text-stone-600 text-lg">
              We don&apos;t just sell spices; we sell memories. Here is why our blends stand out in your kitchen.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-stone-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-stone-100 group"
            >
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors duration-300 text-brand-orange group-hover:text-white">
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-brand-brown mb-3">{feature.title}</h4>
              <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
