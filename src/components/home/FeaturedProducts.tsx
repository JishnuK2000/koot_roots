"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Users, Mail, PlayCircle, X } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Chicken Curry Masala",
    ingredients: [
      "Fried coconut", "Garlic", "Curry leaves", "Grounded coriander seeds", "Freshly ground chilli", "Black pepper", "Turmeric"
    ],
    howToCook: [
      "Cook chopped ginger, green chilli, onion & curry leaves in oil.",
      "Add chicken masala paste (grind with warm water).",
      "Add tomato and chicken pieces.",
      "Add salt, boil.",
      "Switch off and add 2 drops lemon juice."
    ],
    tutorialId: "9KLJ35yaNC8",
    image: "/images/product1.png",
    color: "from-yellow-50 to-orange-50",
  },
  {
    id: 2,
    name: "Chickpeas Masala",
    ingredients: [
      "Fried coconut", "Curry leaves", "Garlic", "Ground coriander seeds", "Fresh ground chilli", "Turmeric", "Cumin", "Black pepper"
    ],
    howToCook: [
      "Soak chickpeas overnight.",
      "Pressure cook.",
      "Roast onion & chilli.",
      "Add kooturoots masala paste.",
      "Add cooked chickpeas.",
      "Boil 5 mins."
    ],
    tutorialId: "KsOUNFTvDf4",
    image: "/images/product2.png",
    color: "from-orange-50 to-red-50",
  },
  {
    id: 3,
    name: "Sambar Masala",
    ingredients: [
      "Coconut oil", "Asafoetida", "Small onion", "Garlic", "Bengal gram dal", "Black gram dal", "Curry leaves", "Coconut", "Cumin seeds", "Fenugreek seeds", "Coriander powder", "Chilli powder"
    ],
    howToCook: [
      "Add turmeric & tamarind water to cooked dal.",
      "Add vegetables.",
      "Add kooturoots masala paste.",
      "Season with mustard & dry chilli."
    ],
    tutorialId: "-mX4popYgXY",
    image: "/images/product3.png",
    color: "from-amber-50 to-yellow-50",
  }
];

export default function FeaturedProducts() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  return (
    <section id="products" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-brand-orange tracking-widest uppercase mb-3">Our Blends</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-brown mb-6">
              Featured Products
            </h3>
            <p className="text-stone-600 text-lg">
              Carefully crafted, small-batch spice blends that bring the authentic aroma of a Kerala kitchen to yours.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col"
            >
              <div className={`relative h-64 w-full rounded-2xl bg-gradient-to-br ${product.color} mb-6 flex items-center justify-center overflow-hidden shrink-0`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-48 h-56"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </motion.div>
              </div>

              <div className="flex-grow flex flex-col">
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-brand-brown">{product.name}</h4>
                </div>

                <div className="text-sm text-stone-600 mb-6 flex-grow">
                  <div className="mb-4">
                    <h5 className="font-semibold text-brand-brown mb-1">Ingredients:</h5>
                    <p className="leading-relaxed">{product.ingredients.join(", ")}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-brand-brown mb-1">How to Prepare:</h5>
                    <ul className="list-disc pl-4 space-y-1">
                      {product.howToCook.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <button
                    onClick={() => setSelectedVideo(product.tutorialId)}
                    className="w-full py-3 px-4 rounded-xl border-2 border-brand-brown bg-white text-brand-brown font-semibold flex items-center justify-center gap-2 hover:bg-brand-brown hover:text-white transition-colors shadow-sm"
                  >
                    <PlayCircle className="w-5 h-5" />
                    Watch Tutorial
                  </button>
                  <a
                    href={`https://wa.me/917676710930?text=Hi!%20I%20want%20to%20enquire%20about%20your%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl border-2 border-brand-orange bg-brand-orange text-white font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 hover:border-orange-600 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
          <a
            href="https://wa.me/917676710930?text=Hi!%20I%20am%20interested%20in%20partnering%20with%20Kooturoots%20as%20a%20distributor."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-brown text-white font-semibold rounded-xl hover:bg-stone-800 transition-colors shadow-md w-full sm:w-auto"
          >
            <Users className="w-5 h-5" />
            Partner as Distributor
          </a>
          <a
            href={`mailto:Kooturoots@gmail.com?subject=${encodeURIComponent(
              "Distributor Partnership Enquiry"
            )}&body=${encodeURIComponent(
              "Hi! I am interested in partnering with Kooturoots as a distributor."
            )}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-brand-orange font-semibold hover:bg-orange-50 border-2 border-brand-orange rounded-xl transition-colors w-full sm:w-auto"
          >
            <Mail className="w-5 h-5" />
            Enquire via Email
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
                title="YouTube shorts tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
