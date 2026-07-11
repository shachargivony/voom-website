import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Lightbulb, Sparkles } from "lucide-react";

// Micro-interaction component: plane flies across the text box on hover while VOOM stays visible
function AnimatedVoomWord() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTrigger = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1200);
  };

  return (
    <span 
      onMouseEnter={handleTrigger}
      onClick={handleTrigger}
      className="inline-flex relative cursor-pointer select-none items-center mx-1"
    >
      {/* The Word VOOM - Stays fully visible in premium gold */}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0d78a] to-[#d4a853] font-black">
        VOOM
      </span>

      {/* The Flying Airplane - zooms across the text line diagonally */}
      {isAnimating && (
        <motion.span
          initial={{ x: -300, y: 35, opacity: 0, scale: 1.3 }}
          animate={{ 
            x: [-300, 300], 
            y: [35, -35], 
            opacity: [0, 1, 1, 0] 
          }}
          transition={{ 
            duration: 1.0, 
            times: [0, 0.15, 0.85, 1],
            ease: "easeInOut" 
          }}
          className="absolute text-2xl pointer-events-none z-20"
        >
          ✈️
        </motion.span>
      )}
    </span>
  );
}

export default function VoomIntroSection() {
  return (
    <section id="voom-intro" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505] relative overflow-hidden" dir="rtl">
      {/* Top golden border lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a853]/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        {/* Text Container with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-white/5 bg-black/40 relative overflow-hidden shadow-[0_0_40px_rgba(212,168,83,0.02)]"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a853]/2 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight">
            הכירו את <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0d78a] to-[#d4a853]">VOOM</span>
          </h2>
          
          <p className="text-white/90 text-base md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            אנחנו חברת <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0d78a] to-[#d4a853] font-black">VOOM</span>, ולאחר חשיבה טכנולוגית, עסקית, שירותית ומכירתית – בנינו מעטפת שלמה שהמטרה שלה היא לתת פתרונות שיווקיים ועסקיים ברמה הגבוהה ביותר בשביל לתת לעסק שלכם להוביל את המירוץ עם <AnimatedVoomWord />.
          </p>

          <div className="h-px bg-white/5 w-full my-8" />

          {/* Quick Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-right">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Lightbulb className="w-4 h-4 text-[#d4a853]" />
              </div>
              <div>
                <h3 className="text-white text-xs md:text-sm font-bold">חשיבה עסקית וטכנולוגית</h3>
                <p className="text-white/40 text-[10px] md:text-xs mt-0.5 leading-relaxed">שילוב כלי אוטומציה מתקדמים לשיפור תהליכים בעסק.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Trophy className="w-4 h-4 text-[#d4a853]" />
              </div>
              <div>
                <h3 className="text-white text-xs md:text-sm font-bold">פתרונות קריאייטיב ומכירות</h3>
                <p className="text-white/40 text-[10px] md:text-xs mt-0.5 leading-relaxed">כתיבה שיווקית, עיצוב יוקרתי והפקת סרטונים ממירי לקוחות.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-[#d4a853]" />
              </div>
              <div>
                <h3 className="text-white text-xs md:text-sm font-bold">ליווי אישי ושירות מקיף</h3>
                <p className="text-white/40 text-[10px] md:text-xs mt-0.5 leading-relaxed">שותפות אמיתית לדרך עם דגש על שקיפות מלאה ומדידת ביצועים בכל שלב.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
