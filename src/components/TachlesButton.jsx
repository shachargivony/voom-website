import React from "react";
import { motion } from "framer-motion";

export default function TachlesButton() {
  const handleClick = (e) => {
    e.preventDefault();
    const section = document.getElementById("tachles-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      aria-label="מעבר לשירותים שלנו"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 180 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 group flex items-center bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1c1407] font-black px-6 py-3.5 rounded-full shadow-[0_8px_30px_rgba(212,168,83,0.35)] hover:shadow-[0_12px_40px_rgba(212,168,83,0.6)] cursor-pointer transition-all duration-300 animate-float-breathing"
    >
      <span className="text-xs md:text-sm tracking-[0.05em] font-black uppercase">
        בואו נדבר תכלס
      </span>
      {/* Shiny border outline */}
      <span className="absolute inset-0 rounded-full border border-white/30 pointer-events-none scale-95" />
    </motion.button>
  );
}
