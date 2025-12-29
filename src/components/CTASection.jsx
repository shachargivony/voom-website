import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#d4a853]/5 to-[#0a0a0a]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#d4a853]/10 rounded-full blur-[200px] animate-pulse" />
      </div>

      {/* Animated particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#d4a853]/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-8 border border-[#d4a853]/30 rounded-full backdrop-blur-sm bg-[#d4a853]/10"
          >
            <Sparkles className="w-4 h-4 text-[#d4a853]" />
            <span className="text-[#d4a853] text-sm tracking-wider">עכשיו זה הזמן לפעול</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
          >
            מוכנים לקחת את העסק
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a853] via-[#f0d78a] to-[#d4a853] animate-gradient">
              לשלב הבא?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            בואו נתחיל את המסע ביחד. שיחת ייעוץ ראשונית חינם, ללא התחייבות.
            <br className="hidden md:block" />
            רק אתם, אנחנו, והעסק שלכם שעומד לצמוח.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={scrollToContact}
              className="group relative px-10 py-7 bg-gradient-to-r from-[#d4a853] to-[#b8934a] hover:from-[#e0b865] hover:to-[#c9a35a] text-[#0a0a0a] font-semibold text-lg rounded-xl transition-all duration-300 shadow-[0_0_40px_rgba(212,168,83,0.4)] hover:shadow-[0_0_60px_rgba(212,168,83,0.6)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                בואו נדבר
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <a
              href="https://wa.me/972548090469?text=היי,%20הגעתי%20מהאתר%20של%20VOOM%20ואשמח%20לשמוע%20פרטים%20נוספים"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-7 bg-[#25D366] hover:bg-[#20c05c] text-white font-semibold text-lg rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] hover:scale-105 flex items-center gap-2"
            >
              וואטסאפ ישיר
            </a>
          </motion.div>

          {/* Trust elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#d4a853] rounded-full" />
              <span>שיחת ייעוץ חינם</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#d4a853] rounded-full" />
              <span>ללא התחייבות</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#d4a853] rounded-full" />
              <span>מענה מהיר</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

