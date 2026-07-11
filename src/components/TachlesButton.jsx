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
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 group flex items-center bg-black border border-[#d4a853]/60 text-white font-black px-6 py-4 rounded-full shadow-[0_0_25px_rgba(0,0,0,0.9)] backdrop-blur-md transition-all duration-300 animate-vibrate"
    >
      <span className="text-xs md:text-sm tracking-[0.12em] font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#f0d78a] via-[#d4a853] to-[#b8934a]">
        ⚡ תכלס, מה יש?
      </span>
      {/* Ripple ring animation around button */}
      <span className="absolute inset-0 rounded-full border border-[#d4a853]/40 animate-ping opacity-60 scale-105 pointer-events-none" />
      <span className="absolute -top-1 -left-1 flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4a853] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4a853]"></span>
      </span>
    </motion.button>
  );
}

