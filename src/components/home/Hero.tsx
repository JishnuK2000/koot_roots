"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-brand-yellow/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-medium text-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
              100% Authentic Homemade Recipes
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-brown leading-tight mb-6"
            >
              Rooted in <span className="text-gradient">Kerala.</span><br />
              Crafted with <span className="text-gradient">Tradition.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-stone-600 mb-10 max-w-lg leading-relaxed"
            >
              Started by two friends with a passion for authentic homemade flavors, we bring you premium curry powders made with clean ingredients and generations of Kerala heritage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="#products" className="bg-brand-orange text-white px-8 py-4 rounded-full font-medium hover:bg-orange-700 transition-all shadow-xl shadow-orange-900/20 flex items-center gap-2 group">
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#story" className="bg-white text-brand-brown px-8 py-4 rounded-full font-medium hover:bg-stone-50 transition-all shadow-md shadow-stone-200 flex items-center gap-2">
                Our Story
              </Link>
            </motion.div>
          </div>

          {/* Floating Images */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-full"
            >
              {/* Center Main Product */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[240px] md:w-[300px] drop-shadow-2xl"
              >
                <Image
                  src="/images/product1.png"
                  alt="Kooturoots Premium Spice Pack"
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </motion.div>

              {/* Left Secondary Product */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 z-20 w-[180px] md:w-[220px] drop-shadow-xl opacity-90 blur-[1px]"
              >
                <Image
                  src="/images/product2.png"
                  alt="Kooturoots Spice Pack"
                  width={300}
                  height={400}
                  className="w-full h-auto object-contain -rotate-6"
                />
              </motion.div>

              {/* Right Secondary Product */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 z-10 w-[160px] md:w-[200px] drop-shadow-lg opacity-80 blur-[2px]"
              >
                <Image
                  src="/images/product3.png"
                  alt="Kooturoots Spice Pack"
                  width={300}
                  height={400}
                  className="w-full h-auto object-contain rotate-12"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
