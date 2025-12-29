import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../Logo.png";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4a853]/10 via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#d4a853]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#d4a853]/5 rounded-full blur-[180px] animate-pulse delay-1000" />
        
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#d4a853]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Sophisticated grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#d4a853 1px, transparent 1px),
            linear-gradient(90deg, #d4a853 1px, transparent 1px),
            linear-gradient(#d4a853 0.5px, transparent 0.5px),
            linear-gradient(90deg, #d4a853 0.5px, transparent 0.5px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
        }}
      />

      {/* Logo - Small, top corner */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-20"
      >
        <img 
          src={logo}
          alt="VOOM"
          className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_0_20px_rgba(212,168,83,0.4)]"
        />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* VOOM Logo Text - Center, Top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 md:mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#d4a853] via-[#f0d78a] to-[#d4a853] animate-gradient"
            animate={{
              textShadow: [
                "0 0 20px rgba(212,168,83,0.5)",
                "0 0 40px rgba(212,168,83,0.8)",
                "0 0 20px rgba(212,168,83,0.5)",
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            VOOM
          </motion.h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight"
        >
          השיווק שיביא לך
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a853] via-[#f0d78a] to-[#d4a853] animate-gradient">
            תוצאות אמיתיות
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="space-y-4 md:space-y-6 mb-8 md:mb-12 px-2"
        >
          <p className="text-lg md:text-2xl lg:text-3xl text-white/80 font-light leading-relaxed max-w-4xl mx-auto">
            אנחנו לא עוד חברת שיווק
            <br className="hidden md:block" />
            אנחנו <span className="text-[#d4a853]">המפתח</span> שיפתח לך את השוק
          </p>
          <p className="text-sm md:text-base lg:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            מעל 100,000 לידים חמים, קמפיינים ממוקדים
            <br className="hidden md:block" />
            ואתרים שממירים מבקרים ללקוחות משלמים
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4"
        >
          <Button
            onClick={scrollToContact}
            className="group relative w-full sm:w-auto px-6 md:px-8 py-4 md:py-6 bg-gradient-to-r from-[#d4a853] to-[#b8934a] hover:from-[#e0b865] hover:to-[#c9a35a] text-[#0a0a0a] font-medium text-base md:text-lg rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(212,168,83,0.3)] hover:shadow-[0_0_50px_rgba(212,168,83,0.5)] border-2 border-[#d4a853]/50"
          >
            <span className="relative z-10">בואו נתחיל</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button
            onClick={scrollToServices}
            variant="outline"
            className="w-full sm:w-auto px-6 md:px-8 py-4 md:py-6 bg-transparent border-2 border-[#d4a853]/30 hover:border-[#d4a853] text-[#d4a853] hover:bg-[#d4a853]/10 font-medium text-base md:text-lg rounded-xl transition-all duration-300"
          >
            גלו את השירותים
          </Button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12 mt-12 md:mt-20 max-w-3xl mx-auto px-4"
        >
          {[
            { number: "100K+", label: "חשיפה יומית" },
            { number: "500+", label: "לקוחות מרוצים" },
            { number: "95%", label: "שביעות רצון" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#d4a853] mb-1 md:mb-2">{stat.number}</div>
              <div className="text-xs md:text-sm text-white/50 tracking-wide leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}



