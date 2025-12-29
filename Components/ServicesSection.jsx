import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Target, Globe, Palette } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "קידום בוואטסאפ",
    description: "חשיפה למעל 100,000 אנשים",
    details: "פרסום ממוקד וישיר לאנשים בעלי עניין בעסק שלך. הגעה לקהל יעד מדויק בערוץ הכי אישי שיש.",
    highlight: "100K+"
  },
  {
    icon: Target,
    title: "קידום ממומן",
    description: "ברשתות החברתיות",
    details: "קמפיינים חכמים בפייסבוק, אינסטגרם וטיקטוק. מקסימום תוצאות עם מינימום תקציב.",
    highlight: "ROI"
  },
  {
    icon: Globe,
    title: "בניית אתרים",
    description: "עיצוב מותאם אישית",
    details: "אתרים מרשימים שמייצרים לידים. חוויית משתמש מושלמת בכל מכשיר.",
    highlight: "24/7"
  },
  {
    icon: Palette,
    title: "עיצוב לוגואים",
    description: "זהות מותגית מנצחת",
    details: "לוגו שמספר את הסיפור שלך. עיצוב שנחרט בזיכרון של הלקוחות.",
    highlight: "∞"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#d4a853] text-base md:text-lg font-semibold tracking-[0.12em] drop-shadow-[0_0_14px_rgba(212,168,83,0.35)]">מה אנחנו מציעים</span>
          <h2 className="text-3xl md:text-5xl font-light text-white mt-4 tracking-wide">
            השירותים שלנו
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-8 md:p-10 border border-white/5 hover:border-[#d4a853]/20 transition-all duration-700 h-full overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4a853]/0 to-[#d4a853]/0 group-hover:from-[#d4a853]/5 group-hover:to-transparent transition-all duration-700 rounded-2xl" />
                
                {/* Highlight number */}
                <div className="absolute top-6 left-6 text-5xl font-light text-[#d4a853]/10 group-hover:text-[#d4a853]/20 transition-colors duration-500">
                  {service.highlight}
                </div>

                <div className="relative">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="p-4 bg-[#d4a853]/10 rounded-xl group-hover:bg-[#d4a853]/20 transition-colors duration-500">
                      <service.icon className="w-7 h-7 text-[#d4a853]" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-medium text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-[#d4a853]/80 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-white/50 leading-relaxed text-base">
                    {service.details}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a853]/0 group-hover:via-[#d4a853]/30 to-transparent transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



