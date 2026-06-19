import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Zap } from "lucide-react";
import logo from "../../Logo.png";

// Letter animation variants
const letterVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.4, rotate: -12 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // custom easeOutQuint
    },
  }),
};

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

// Magnetic button hook
function MagneticButton({ children, className, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = e.clientX - rect.left - rect.width / 2;
    const cy = e.clientY - rect.top - rect.height / 2;
    x.set(cx * 0.3);
    y.set(cy * 0.3);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}

export default function HeroSection() {
  const scrollToTachles = () => {
    document.getElementById("tachles-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#070707] py-12 sm:py-16 md:py-20 px-4 select-none"
      dir="rtl"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4a853]/5 via-[#070707] to-black" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4a853]/5 rounded-full blur-[160px]"
          animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden">
        <motion.img
          src={logo}
          alt="VOOM Watermark"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[450px] sm:w-[650px] md:w-[850px] h-auto object-contain filter blur-[1px] drop-shadow-[0_0_60px_rgba(212,168,83,0.12)]"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center">

        {/* VOOM — letter-by-letter entrance */}
        <div className="mb-4 md:mb-6 overflow-hidden flex" dir="ltr">
          {"VOOM".split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="voom-animate text-7xl md:text-9xl font-black tracking-wide font-sans inline-block"
              style={{ display: "inline-block" }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Main headline */}
        <motion.h2
          custom={0.45}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-4xl font-black text-white/95 leading-tight"
        >
          הלקוחות הבאים שלך כבר מחכים לך
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          custom={0.6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-white/60 text-sm md:text-base font-medium mt-3 md:mt-4 max-w-xl leading-relaxed"
        >
          מעטפת שיווק 360° — מוואטסאפ עד רשתות חברתיות, מאתרים עד מיתוג.{" "}
          <span className="text-[#f0d78a] font-bold">כל הפתרונות במקום אחד</span>, מובילים לתוצאות מדידות.
        </motion.p>

        {/* CTA Buttons — magnetic effect */}
        <motion.div
          custom={0.8}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4 mt-6 sm:mt-8 md:mt-10 flex-wrap"
        >
          <MagneticButton
            onClick={scrollToContact}
            className="px-8 py-3.5 bg-gradient-to-r from-[#f0d78a] via-[#d4a853] to-[#b8934a] text-black font-extrabold text-xs md:text-sm rounded-xl shadow-[0_0_15px_rgba(212,168,83,0.25)] border border-[#d4a853]/35 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-4 h-4" />
            קבל הצעה עכשיו
          </MagneticButton>

          <MagneticButton
            onClick={scrollToTachles}
            className="px-8 py-3.5 bg-transparent border border-white/15 hover:border-[#d4a853]/55 text-white font-bold text-xs md:text-sm rounded-xl transition-colors duration-300 flex items-center justify-center cursor-pointer"
          >
            תכלס מה תקבל
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10"
        onClick={scrollToContact}
      >
        <ArrowDown className="w-5 h-5 text-[#d4a853]" />
      </div>
    </section>
  );
}
