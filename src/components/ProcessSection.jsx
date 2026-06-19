import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Target, Rocket, TrendingUp, ChevronLeft } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "שיחת ייעוץ ותיאום ציפיות",
    description: "נכיר את העסק, המטרות העסקיות וקהל היעד שלכם באופן ממוקד.",
    color: "from-[#d4a853]/20 to-transparent",
    deliverables: [
      "אבחון שיווקי ועסקי מקיף",
      "הגדרת קהלי יעד מדויקים",
      "מיפוי מנועי צמיחה וצווארי בקבוק"
    ]
  },
  {
    icon: Target,
    number: "02",
    title: "בניית אסטרטגיה מנצחת",
    description: "נגבש תוכנית פעולה מותאמת אישית עם יעדים מדידים ותקציב מדויק.",
    color: "from-[#d4a853]/15 to-transparent",
    deliverables: [
      "תוכנית עבודה מוגדרת חודשית",
      "קריאייטיב וקונספט שיווקי ייחודי",
      "חלוקת תקציב ומדיה אופטימלית"
    ]
  },
  {
    icon: Rocket,
    number: "03",
    title: "השקה והרצת קמפיינים",
    description: "נעלה את הקמפיינים, האתרים והאוטומציות לאוויר באופן מדויק.",
    color: "from-[#d4a853]/20 to-transparent",
    deliverables: [
      "הקמת קמפיינים ודפי נחיתה ממירי תנועה",
      "עיצוב מודעות וכתיבת קופי מדויק",
      "חיבור לאוטומציות ומערכות CRM"
    ]
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "אופטימיזציה ושיפור המרות",
    description: "נעקוב, ננתח ונשפר את הביצועים באופן קבוע כדי למקסם תוצאות.",
    color: "from-[#d4a853]/15 to-transparent",
    deliverables: [
      "אנליזה שוטפת ודוחות ביצועים מפורטים",
      "מבחני A/B לקופי ועיצוב קריאייטיב",
      "שיפור מתמיד של יחס ההמרה (CRO)"
    ]
  }
];

export default function ProcessSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4a853]/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white">תהליך העבודה שלנו</h2>
          <p className="text-white/50 text-sm md:text-base mt-2">
            בלי עיכובים ובלי בירוקרטיה מיותרת. ארבעה שלבים פשוטים לתוצאות בשטח.
          </p>
        </motion.div>

        {/* Steps grid with animated connectors */}
        <div className="relative">

          {/* Animated connector line (desktop only) */}
          <div className="hidden lg:block absolute top-[52px] right-[12.5%] left-[12.5%] h-px z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-[#d4a853]/30 via-[#d4a853]/60 to-[#d4a853]/30" />
            {/* Traveling glow dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#d4a853] blur-md opacity-80"
              animate={{ right: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#fff8d6]"
              animate={{ right: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setHoveredCard(hoveredCard === idx ? null : idx)}
                  className="relative group perspective-1000 w-full h-[210px] sm:h-[220px] md:h-[270px] lg:h-[300px] cursor-pointer"
                >
                  <motion.div
                    animate={{ rotateY: hoveredCard === idx ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="preserve-3d w-full h-full relative"
                  >
                    {/* CARD FRONT */}
                    <div className="backface-hidden absolute inset-0 w-full h-full glass-card rounded-2xl p-4 sm:p-5 md:p-6 border border-white/5 group-hover:border-[#d4a853]/40 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(212,168,83,0.12)] flex flex-col justify-between">
                      <div>
                        {/* Giant background step number */}
                        <div
                          className="step-number-bg absolute top-3 left-4 text-5xl font-black text-white pointer-events-none select-none"
                          style={{ zIndex: 0 }}
                        >
                          {step.number}
                        </div>

                        {/* Icon circle with glow */}
                        <div className="relative z-10 w-10 h-10 md:w-11 md:h-11 bg-[#d4a853]/10 border border-[#d4a853]/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-5 group-hover:bg-[#d4a853]/20 group-hover:border-[#d4a853]/50 group-hover:shadow-[0_0_18px_rgba(212,168,83,0.25)] transition-all duration-300">
                          <Icon className="w-5 h-5 text-[#d4a853]" />
                        </div>

                        {/* Step badge */}
                        <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-[#d4a853]/70 mb-1 sm:mb-2 block">
                          שלב {step.number}
                        </span>

                        <h3 className="relative z-10 text-sm sm:text-base md:text-lg font-black text-white mb-1 sm:mb-2 leading-snug">{step.title}</h3>
                        <p className="relative z-10 text-white/55 text-[11px] sm:text-xs md:text-sm leading-relaxed">{step.description}</p>
                      </div>

                      {/* Bottom progress indicator */}
                      <div className="relative z-10 mt-2 sm:mt-3 md:mt-5 pt-2 sm:pt-3 md:pt-4 border-t border-white/5">
                        <div className="flex gap-1">
                          {steps.map((_, i) => (
                            <div
                              key={i}
                              className={`h-0.5 flex-1 rounded-full transition-all duration-300 ${
                                i <= idx ? "bg-gradient-to-r from-[#d4a853] to-[#f0d78a]" : "bg-white/10"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CARD BACK */}
                    <div 
                      className="backface-hidden absolute inset-0 w-full h-full glass-card rounded-2xl p-4 sm:p-5 md:p-6 border border-[#d4a853]/40 bg-[#0f0d08]/95 flex flex-col justify-between"
                      style={{ transform: "rotateY(180deg)" }}
                    >
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          {/* Title with small icon */}
                          <div className="flex items-center gap-2 mb-1.5 sm:mb-2 md:mb-4">
                            <div className="w-6 h-6 bg-[#d4a853]/20 rounded-md flex items-center justify-center">
                              <Icon className="w-3.5 h-3.5 text-[#d4a853]" />
                            </div>
                            <span className="text-[#d4a853] text-[9px] sm:text-[10px] font-black tracking-wider uppercase">מה מקבלים בפועל?</span>
                          </div>

                          <h4 className="text-white text-xs sm:text-sm md:text-base font-black mb-1.5 sm:mb-2 md:mb-4 leading-tight">{step.title}</h4>

                          <ul className="space-y-1 sm:space-y-2 md:space-y-3 pr-2 border-r border-[#d4a853]/20 text-right" dir="rtl">
                            {step.deliverables.map((item, i) => (
                              <li key={i} className="text-white/80 text-[10px] sm:text-[11px] md:text-sm flex items-start gap-2">
                                <span className="text-[#d4a853] font-bold text-xs select-none">✦</span>
                                <span className="leading-tight">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Interactive hint */}
                        <div className="text-[9px] md:text-[10px] text-white/30 text-center pt-1.5 sm:pt-2 md:pt-3 border-t border-white/5">
                          לחצו או הזיזו את העכבר לחזרה
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow between cards (desktop) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -left-3 top-[52px] -translate-y-1/2 z-20 items-center justify-center w-6">
                      <ChevronLeft className="w-4 h-4 text-[#d4a853]/50 group-hover:text-[#d4a853] transition-colors" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
