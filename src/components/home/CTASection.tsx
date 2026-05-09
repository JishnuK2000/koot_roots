"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-brand-brown"
        >
          {/* Subtle patterned background or gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-brown via-stone-800 to-brand-dark z-0" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/10 blur-[100px] z-0" />

          <div className="relative z-10 px-8 py-20 md:py-24 flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bring Home the <br className="hidden md:block" />
              <span className="text-brand-yellow">Taste of Kerala</span>
            </h2>
            <p className="text-stone-300 text-lg md:text-xl mb-10 font-light max-w-xl">
              Elevate your everyday cooking with our premium, small-batch spice blends. Authentic, natural, and full of flavor.
            </p>

            <motion.a
              href="https://wa.me/917676710930?text=Hi!%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-orange text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/30 flex items-center gap-3 group"
            >
              Order Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
