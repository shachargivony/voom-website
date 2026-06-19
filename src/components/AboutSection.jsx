import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu } from "lucide-react";

const FounderCard = ({ founder, direction, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: direction === "right" ? 40 : -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay }}
    className="glass-card rounded-[2rem] p-8 border border-[#d4a853]/15 flex flex-col hover:border-[#d4a853]/45 transition-all duration-400 bg-black/60 backdrop-blur-md group"
  >
    <div className="w-12 h-12 bg-[#d4a853]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4a853]/20 group-hover:shadow-[0_0_20px_rgba(212,168,83,0.2)] transition-all duration-300">
      {founder.icon}
    </div>
    <h3 className="text-2xl font-black text-white mb-1">{founder.name}</h3>
    <span className="text-[#d4a853] font-bold text-xs uppercase tracking-wider block mb-4">
      {founder.role}
    </span>
    <p className="text-white/65 text-sm md:text-base leading-relaxed">
      {founder.bio}
    </p>

    {/* Bottom skill tags */}
    <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/5">
      {founder.skills.map((skill, i) => (
        <span
          key={i}
          className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#d4a853]/8 border border-[#d4a853]/20 text-[#d4a853]/80"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

// Animated particle flowing between the two cards
const DataFlowConnector = () => (
  <div className="hidden md:flex items-center justify-center relative px-2">
    {/* Central orb */}
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        boxShadow: [
          "0 0 20px rgba(212,168,83,0.3)",
          "0 0 45px rgba(212,168,83,0.7)",
          "0 0 20px rgba(212,168,83,0.3)",
        ],
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f0d78a] via-[#d4a853] to-[#b8934a] flex items-center justify-center z-10 relative flex-shrink-0"
    >
      <span className="text-black font-black text-xs">∞</span>
    </motion.div>

    {/* Left line */}
    <div className="absolute right-[calc(50%+24px)] top-1/2 -translate-y-1/2 h-px bg-gradient-to-l from-[#d4a853]/60 to-transparent w-[45%]" />
    {/* Right line */}
    <div className="absolute left-[calc(50%+24px)] top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-[#d4a853]/60 to-transparent w-[45%]" />

  </div>
);

export default function AboutSection() {
  const founders = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#d4a853]" />,
      name: "אור",
      role: "ניהול שיווקי ואסטרטגיית מכירות",
      bio: "מלווה ומנהל מכירות מנוסה עם למעלה מ-17 שנות ניסיון בהובלת עסקים, ייעול תהליכי שירות ומקסום אחוזי המרה. אור דואג שכל קמפיין יסתיים בעסקה סגורה בבנק.",
      skills: ["אסטרטגיית מכירות", "ניהול לקוחות", "תהליכי המרה"],
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#d4a853]" />,
      name: "שחר",
      role: "ניהול טכנולוגי ואוטומציות",
      bio: "מומחה דיגיטל ומערכות תוכנה עם מעל 10 שנות ניסיון באפיון ופיתוח פלטפורמות, אוטומציה עסקית וניהול נכסים דיגיטליים. שחר דואג שהמערכת הטכנולוגית תעבוד כמו שעון.",
      skills: ["פיתוח פלטפורמות", "אוטומציה עסקית", "BI ואנליטיקה"],
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a853]/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white">מי עומד מאחורי VOOM?</h2>
          <p className="text-white/50 text-sm md:text-base mt-3 max-w-xl mx-auto">
            צוות של שני מייסדים עם ניסיון משולב בשיווק, טכנולוגיה ומכירות בשוק — הדרך המוכחת לתוצאות עסקיות אמיתיות.
          </p>
        </motion.div>

        {/* Two cards + connector */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          <FounderCard founder={founders[0]} direction="right" delay={0} />
          <DataFlowConnector />
          <FounderCard founder={founders[1]} direction="left" delay={0.15} />
        </div>

      </div>
    </section>
  );
}
