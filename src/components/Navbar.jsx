import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../Logo.png";

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (page, anchorId) => {
    setIsOpen(false);
    setCurrentPage(page);
    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "דף הבית", page: "home" },
    { label: "שירותים", page: "home", anchor: "services" },
    { label: "איך זה עובד", page: "home", anchor: "process" },
    { label: "הצוות", page: "home", anchor: "about" },
    { label: "יצירת קשר", page: "home", anchor: "contact" },
    { label: "תיק עבודות", page: "portfolio" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#070707]/85 backdrop-blur-md border-b border-white/5 px-4 py-3.5" dir="rtl">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-row">
        
        {/* Right side: Navigation links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold flex-row">
          {navItems.map((item, idx) => {
            const isActive = item.anchor
              ? currentPage === item.page && window.location.hash === `#${item.anchor}`
              : currentPage === item.page;

            return (
              <button
                key={idx}
                onClick={() => handleNav(item.page, item.anchor)}
                className={`transition-colors duration-300 ${
                  isActive ? "text-[#d4a853]" : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Hamburger Menu Button (Mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white/80 hover:text-white transition-colors p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Left/Center: Logo & VOOM brand name */}
        <div 
          onClick={() => handleNav("home")} 
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <span className="voom-animate text-xl md:text-2xl font-black tracking-[0.12em] uppercase font-sans">
            VOOM
          </span>
          <img 
            src={logo} 
            alt="VOOM Logo" 
            className="w-8 h-8 object-contain drop-shadow-[0_0_8px_rgba(212,168,83,0.3)]"
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-4 right-4 bg-[#070707]/98 border border-white/10 mt-2 rounded-2xl shadow-2xl z-50 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 py-5 px-5 text-right">
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNav(item.page, item.anchor)}
                  className="text-white/70 hover:text-white font-extrabold text-sm py-1 transition-colors border-r-2 border-transparent hover:border-[#d4a853] pr-2 w-full text-right"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
