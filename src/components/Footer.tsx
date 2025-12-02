import { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Send, CreditCard, Globe, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "./BookingModal";

const Footer = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <footer className="bg-[#0B0F19] pt-16 pb-12 relative mt-0 overflow-hidden">
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                E
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Elshadai Millenium
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your trusted partner for unforgettable journeys. From visa assistance to luxury tours, we make the world accessible to you.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-400 border border-white/5 hover:border-orange-500">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
              <Globe className="w-4 h-4 text-orange-500" /> Company
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['About Us', 'Our Team', 'Careers', 'Blog', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-orange-400 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-500" /> Support
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['Help Center', 'Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-orange-400 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">📍</span>
                <span>Obuasi Bidease</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500">📞</span>
                <span>0545726227</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500">✉️</span>
                <span>info@elshadaimillenium.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>&copy; 2025 Elshadai Millenium Travel and Shopping. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-gray-600">We Accept</span>
            <div className="flex gap-2 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Simple CSS shapes for payment icons to avoid external images if possible, or use text */}
              <div className="h-8 px-3 bg-white/10 rounded flex items-center text-white font-bold italic">VISA</div>
              <div className="h-8 px-3 bg-white/10 rounded flex items-center text-white font-bold">Mastercard</div>
              <div className="h-8 px-3 bg-white/10 rounded flex items-center text-white font-bold">MOMO</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
