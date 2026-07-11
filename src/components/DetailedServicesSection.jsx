import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";

// Magnetic container wrapper to attract to mouse cursor when close
function MagneticWrapper({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left - width / 2;
    const clientY = e.clientY - rect.top - height / 2;

    x.set(clientX * 0.35);
    y.set(clientY * 0.35);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function DetailedServicesSection() {
  const handleScrollToTachles = () => {
    document.getElementById("tachles-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services-intro" className="py-24 bg-[#050505] relative overflow-hidden" dir="rtl">
      {/* Horizontal vibration keyframes for the CTA button */}
      <style>{`
        @keyframes horizontal-shake {
          0%, 88%, 100% {
            transform: translateX(0);
          }
          90% {
            transform: translateX(-4px);
          }
          92% {
            transform: translateX(4px);
          }
          94% {
            transform: translateX(-3px);
          }
          96% {
            transform: translateX(3px);
          }
          98% {
            transform: translateX(0);
          }
        }
        .animate-shake-horizontal {
          animation: horizontal-shake 4.5s infinite ease-in-out;
        }
      `}</style>

      {/* Top Divider line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4a853]/3 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-black text-white leading-tight mb-6"
        >
          במקום מצגות משעממות ותוכניות שיווק מורכבות על הנייר <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0d78a] to-[#d4a853]">אנחנו פועלים, מיישמים ומביאים תוצאות.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10"
        >
          אנחנו לא כאן כדי למכור לכם הבטחות באוויר. המעטפת של VOOM ממוקדת בכלים הפרקטיים, במספרים ובמהירות המענה שיביאו לקוחות ויעבירו את העסק שלכם למסלול המהיר באופן מדיד.
        </motion.p>

        {/* Sleek CTA Drive Button with custom horizontal shake and mouse attraction */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <MagneticWrapper>
            <motion.button
              onClick={handleScrollToTachles}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-black border border-[#d4a853] text-white hover:text-[#1c1407] font-black text-xs md:text-sm rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(212,168,83,0.35)] flex items-center justify-center gap-2.5 cursor-pointer relative overflow-hidden transition-all duration-300 group after:absolute after:inset-y-0 after:-left-[100%] after:w-[50%] after:bg-gradient-to-r after:from-transparent after:via-[#d4a853]/25 after:to-transparent after:skew-x-[-25deg] hover:after:left-[150%] after:transition-all after:duration-[1000ms] after:ease-in-out hover:bg-gradient-to-r hover:from-[#BF953F] hover:via-[#FCF6BA] hover:to-[#B38728] hover:border-transparent animate-shake-horizontal"
            >
              <span>בואו נדבר תכלס – מה אנחנו מציעים?</span>
              <ArrowDown className="w-4 h-4 text-white group-hover:text-[#1c1407] transition-colors transition-transform duration-300 group-hover:translate-y-0.5" />
            </motion.button>
          </MagneticWrapper>
        </motion.div>
      </div>
    </section>
  );
}
