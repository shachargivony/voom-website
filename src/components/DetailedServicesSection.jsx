import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Target, Globe, Palette } from "lucide-react";
import whatsappMockup from "../whatsapp_mockup.png";

const services = [
  {
    icon: MessageSquare,
    title: "קידום בוואטסאפ (100K+ חשיפה)",
    desc: "אנחנו מגיעים ישירות לנייד של לקוחות פוטנציאליים דרך קבוצות ורשימות תפוצה ממוקדות. פרסום חופשי ללא חסימות עם יחסי המרה מהגבוהים בשוק."
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
    desc: "עיצוב זהות מותגית יוקרתית שמבדלת אותך מהמתחרים. לוגו מקצועי, צבעים, ספר מותג וכל החומרים השיווקיים במקום אחד."
  }
];

export default function DetailedServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#050505] to-[#070707] relative overflow-hidden" dir="rtl">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column: Text & Services (rendered first under RTL) */}
          <div className="lg:col-span-7 text-right">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white">השירותים העיקריים שלנו</h2>
              <p className="text-white/50 text-sm md:text-base mt-2">
                בנינו מעטפת שלמה שנועדה לייצר פתרונות שיווקיים ועסקיים חזקים שיזניקו את העסק קדימה.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="glass-card rounded-2xl p-5 border border-white/5 hover:border-[#d4a853]/35 transition-all duration-300"
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

          {/* Left Column: Visual Mockup Column (rendered second under RTL) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="absolute w-[300px] h-[300px] bg-[#d4a853]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative glass-card p-3 rounded-[2.5rem] border border-[#d4a853]/25 shadow-2xl overflow-hidden max-w-md w-full">
              <img 
                src={whatsappMockup}
                alt="VOOM Premium Connection Visual"
                className="w-full h-auto rounded-[2rem] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
