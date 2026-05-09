"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, ShieldCheck } from "lucide-react";

export default function BrandStory() {
  const stats = [
    { icon: Leaf, title: "100% Natural", desc: "No artificial colors or flavors" },
    { icon: Heart, title: "Authentic Kerala Taste", desc: "Traditional homemade recipes" },
    { icon: ShieldCheck, title: "No Preservatives", desc: "Freshness guaranteed" },
  ];

  return (
    <section id="story" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-stone-100"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              {/* Using a placeholder aesthetic div since we don't have a specific story image */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply" />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-2xl text-white">
                  <p className="font-medium text-lg mb-2">"We offer unique traditional kerala spices made with love and care, saving time in cooking while ensuring great taste and supporting local farmers."</p>
                  <p className="text-white/80 text-sm">Founders, Kooturoots</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-brand-orange tracking-widest uppercase mb-3">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-brand-brown mb-6 leading-tight">
                Two Friends, One <br /> <span className="text-gradient">Flavorful Mission</span>
              </h3>

              <div className="space-y-6 text-stone-600 text-lg mb-10">
                <p>
                  Kooturoots was born out of a shared nostalgia. Two friends, miles away from home, longing for the comforting, aromatic embrace of a true Kerala curry.
                </p>
                <p>
                  Frustrated by the artificial, preservative-heavy options in stores, we decided to go back to our roots. We sourced handpicked ingredients, followed our grandmothers' traditional recipes, and created blends that capture the authentic essence of homemade Kerala food.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-brand-light p-6 rounded-2xl border border-stone-100 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
                      <stat.icon className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h4 className="font-bold text-brand-brown mb-2">{stat.title}</h4>
                    <p className="text-sm text-stone-500">{stat.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
