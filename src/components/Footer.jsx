import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68d1bcb04e9b119c1964d650/a3188441a_WhatsApp2025-12-13192441_fc538f0e.jpg"
              alt="VOOM"
              className="w-12 h-12 object-contain opacity-60"
            />
            <span className="text-white/40 text-sm">
              © {new Date().getFullYear()} VOOM. כל הזכויות שמורות.
            </span>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-white/40">
            <a href="#services" className="hover:text-[#d4a853] transition-colors duration-300">
              שירותים
            </a>
            <a href="#contact" className="hover:text-[#d4a853] transition-colors duration-300">
              יצירת קשר
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

