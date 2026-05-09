"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import Image from "next/image";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="KootRoots Logo"
            width={140}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-8 font-medium ${isScrolled ? "text-stone-600" : "text-stone-800 lg:text-white/90"}`}>
          <Link href="#story" className="hover:text-brand-orange transition-colors">Our Story</Link>
          <Link href="#products" className="hover:text-brand-orange transition-colors">Products</Link>
          <Link href="#experience" className="hover:text-brand-orange transition-colors">Experience</Link>
        </nav>

        {/* <div className={`hidden md:flex items-center gap-4 ${isScrolled ? "text-stone-800" : "text-stone-800 lg:text-white"}`}>
          <button className="hover:text-brand-orange transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <Link href="#products" className="bg-brand-orange text-white px-5 py-2.5 rounded-full font-medium hover:bg-orange-700 transition-colors shadow-lg shadow-orange-900/20">
            Order Now
          </Link>
        </div> */}

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-stone-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4">
          <Link href="#story" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-brand-orange font-medium">Our Story</Link>
          <Link href="#products" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-brand-orange font-medium">Products</Link>
          <Link href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-brand-orange font-medium">Experience</Link>
          {/* <Link href="#products" onClick={() => setMobileMenuOpen(false)} className="bg-brand-orange text-white text-center px-5 py-3 rounded-full font-medium mt-2">
            Order Now
          </Link> */}
        </div>
      )}
    </header>
  );
}
