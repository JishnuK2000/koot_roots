import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle, Hash, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-stone-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold tracking-tight text-white">
                Koot<span className="text-brand-orange">Roots</span>
              </span>
            </Link>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Bringing the authentic taste of Kerala to your kitchen. Crafted with passion, rooted in tradition.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/kooturoots?igsh=dzNnMXBqYTN4Z2tp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://wa.me/917676710930" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="mailto:Kooturoots@gmail.com?subject=Product%20Enquiry" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#story" className="hover:text-brand-orange transition-colors">Our Story</Link></li>
              <li><Link href="#products" className="hover:text-brand-orange transition-colors">Shop Products</Link></li>
              <li><Link href="#experience" className="hover:text-brand-orange transition-colors">The Experience</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Recipes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Support</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-brand-orange transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Returns</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span>Payyanur,
                  Kannur Dist.,
                  Kerala
                  Pin: 670307</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <span>+91 76767 10930</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <span>Kooturoots@gmail.com </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} KootRoots. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
