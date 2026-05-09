"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function SpiceExperience() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate particles only once on client
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        size: Math.random() * 8 + 4,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    []
  );

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <section
      id="experience"
      className="relative py-32 bg-brand-dark overflow-hidden"
    >
      {/* Cinematic dark background with glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-brand-orange/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-900/30 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-yellow/20 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      {/* Animated floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute z-10 rounded-full bg-brand-orange/40 blur-[1px]"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -100, -200],
            opacity: [0, 0.8, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-yellow tracking-[0.2em] text-sm font-bold uppercase mb-6">
              The Culinary Emotion
            </h2>

            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-lg">
              Feel the{" "}
              <span className="italic font-light text-brand-orange">
                Heat
              </span>
              .
              <br />
              Taste the{" "}
              <span className="italic font-light text-brand-yellow">
                Heritage
              </span>
              .
            </h3>

            <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Every pinch of Kooturootss carries the rich, sun-drenched aroma of
              Kerala&apos;s spice gardens directly to your soul.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300"
            >
              Discover the Magic
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}