import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Target, Globe, Palette } from "lucide-react";
import whatsappMockup from "../whatsapp_mockup.png"; // Kept aside in imports to preserve in codebase

const services = [
  {
    icon: MessageSquare,
    title: "קידום בוואטסאפ",
    desc: "הגעה ישירה ומפולחת למסך הנייד של לקוחות פוטנציאליים דרך קבוצות ורשימות תפוצה ממוקדות. פרסום חופשי ללא חסימות API."
  },
  {
    icon: Target,
    title: "קידום ממומן ברשתות",
    desc: "קמפיינים מדויקים בפייסבוק, אינסטגרם וטיקטוק. טרגוט חכם, כתיבת קופירייטינג ממיר, ואופטימיזציה שוטפת לשיפור יחס ה-ROI."
  },
  {
    icon: Globe,
    title: "בניית אתרים ממירי תנועה",
    desc: "אפיון, עיצוב ופיתוח דפי נחיתה ואתרי תדמית יוקרתיים. מותאמים מושלם למובייל, מהירים במיוחד ומתוכננים להמרות."
  },
  {
    icon: Palette,
    title: "עיצוב לוגו ומיתוג מלא",
    desc: "עיצוב זהות מותגית יוקרתית שמבדלת אותך מהמתחרים. לוגו מקצועו, צבעים, ספר מותג וכל החומרים השיווקיים במקום אחד."
  }
];

export default function DetailedServicesSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.playbackRate = 0.75;
      videoRef.current.play().catch((err) => {
        console.warn("DetailedServicesSection video autoplay failed:", err);
      });
    }
  }, []);

  return (
    <section id="services" className="py-24 bg-[#050505] relative overflow-hidden" dir="rtl">
      {/* Top Divider line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent z-10" />

      {/* Section-wide background video overlay (second_cinematic_luxury_loop.mp4) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="absolute inset-0 w-full h-full object-cover scale-[1.15] opacity-[0.32] filter brightness-[0.6] contrast-[1.05] saturate-[0.8] select-none pointer-events-none"
        >
          <source src="/second_cinematic_luxury_loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Ambient Radial Glow behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#d4a853]/4 rounded-full blur-[160px] pointer-events-none z-0" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Column: Text & Services Grid */}
          <div className="lg:col-span-12 text-right">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center lg:text-right"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white">השירותים העיקריים שלנו</h2>
              <p className="text-white/50 text-sm md:text-base mt-2 max-w-xl">
                בנינו מעטפת שלמה שנועדה לייצר פתרונות שיווקיים ועסקיים חזקים שיזניקו את העסק קדימה.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="glass-card rounded-2xl p-5 border border-white/5 hover:border-[#d4a853]/35 transition-all duration-300 backdrop-blur-sm bg-black/35"
                  >
                    <div className="w-10 h-10 bg-[#d4a853]/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#d4a853]" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed">{service.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
