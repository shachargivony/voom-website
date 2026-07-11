import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({ phoneNumber = "972548090469" }) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("היי, הגעתי מהאתר של VOOM ואשמח לשמוע פרטים נוספים")}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="יצירת קשר בוואטסאפ"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
        
        {/* Button */}
        <div className="relative flex items-center justify-center bg-[#25D366] hover:bg-[#20c05c] text-white w-14 h-14 rounded-full shadow-lg transition-all duration-300">
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>
    </motion.a>
  );
}

