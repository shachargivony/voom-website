import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "מתחיל",
    icon: Sparkles,
    desc: "הפתרון המושלם לעסקים קטנים שמחפשים חשיפה ראשונית ומדויקת.",
    features: [
      "פרסום ממוקד בקבוצות וואטסאפ (100K+ חשיפה)",
      "פילוח קהל יעד גיאוגרפי ומקצועי",
      "ייעוץ ותמיכה שוטפת",
      "תבניות הודעה מותאמות אישית"
    ]
  },
  {
    name: "פרימיום",
    icon: Zap,
    popular: true,
    desc: "החבילה הנבחרת ביותר המשלבת חשיפה בוואטסאפ ופרסום ממומן ברשתות.",
    features: [
      "פרסום ממוקד בקבוצות וואטסאפ",
      "ניהול קמפיינים ממומנים ברשתות (פייסבוק, אינסטגרם)",
      "עיצוב לוגו ומיתוג מקצועי",
      "ליווי שיווקי ואסטרטגי מלא",
      "אופטימיזציית יחס המרה"
    ]
  },
  {
    name: "VIP",
    icon: Crown,
    desc: "מעטפת מלאה 360 מעלות ללא פשרות, כולל בניית נכס דיגיטלי.",
    features: [
      "פרסום בוואטסאפ + ממומן ברשתות",
      "בניית אתר מקצועי מותאם המרה במובייל",
      "עיצוב ומיתוג שוטף (גרפיקה, פוסטים)",
      "תמיכה מועדפת 24/7",
      "אנליזה ואופטימיזציה שוטפת של לידים"
    ]
  }
];

export default function PricingSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-[#050505] to-[#070707] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4a853] text-sm font-bold uppercase tracking-[0.15em] mb-2 block">החבילות שלנו</span>
          <h2 className="text-3xl md:text-5xl font-black text-white">איזו תוכנית מתאימה לעסק שלך?</h2>
          <p className="text-white/50 text-sm md:text-base mt-2">
            כל חבילה מותאמת באופן אישי ליעדים ולתקציב שלכם.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`glass-card rounded-3xl p-8 border flex flex-col justify-between relative ${
                  pkg.popular
                    ? "border-[#d4a853] shadow-[0_0_30px_rgba(212,168,83,0.12)] bg-gradient-to-b from-[#13110a] to-black"
                    : "border-white/5"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#d4a853] text-black font-black text-xs px-4.5 py-1 rounded-full uppercase tracking-wider">
                    הנבחרת ביותר ⭐
                  </span>
                )}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                    <Icon className="w-5 h-5 text-[#d4a853]" />
                  </div>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-6">{pkg.desc}</p>
                  <div className="text-2xl md:text-3xl font-extrabold text-[#d4a853] mb-6">
                    בואו נדבר
                    <span className="text-xs text-white/40 font-normal block mt-1">מותאם אישית בהתאם ליעדים</span>
                  </div>
                  <ul className="space-y-3 pt-6 border-t border-white/5">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#d4a853] shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={scrollToContact}
                  className={`w-full py-3.5 mt-8 font-black rounded-xl text-xs md:text-sm transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-[#d4a853] to-[#b8934a] text-black hover:opacity-90 shadow-lg"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                >
                  התייעצו איתנו עכשיו
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
