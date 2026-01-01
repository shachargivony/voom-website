import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "מתחיל",
    icon: Sparkles,
    price: "בואו נדבר",
    period: "מותאם אישית",
    description: "הבחירה המושלמת לעסקים שרוצים להתחיל נכון",
    features: [
      "פרסום בקבוצות וואטסאפ - חשיפה למעל 100,000 אנשים",
      "פרסום ממוקד לקהל יעד מדויק",
      "תמיכה וייעוץ שוטף",
      "בניית אסטרטגיה מותאמת אישית"
    ],
    popular: false,
    gradient: "from-[#1a1a1a] to-[#252525]"
  },
  {
    name: "פרימיום",
    icon: Zap,
    price: "בואו נדבר",
    period: "מותאם אישית",
    description: "החבילה הכי נבחרת - מיועדת לעסקים שרוצים תוצאות",
    features: [
      "פרסום בקבוצות וואטסאפ - חשיפה למעל 100,000 אנשים",
      "פרסום ממוקד לקהל יעד מדויק",
      "קידום ממומן ברשתות החברתיות",
      "עיצוב לוגו ומיתוג מקצועי",
      "תמיכה וייעוץ אישי",
      "בניית אסטרטגיה מקיפה"
    ],
    popular: true,
    gradient: "from-[#d4a853]/20 to-[#d4a853]/5"
  },
  {
    name: "VIP",
    icon: Crown,
    price: "בואו נדבר",
    period: "מותאם אישית",
    description: "הפתרון היוקרתי - שירות מלא ללא פשרות",
    features: [
      "פרסום בקבוצות וואטסאפ - חשיפה למעל 100,000 אנשים",
      "פרסום ממוקד לקהל יעד מדויק",
      "קידום ממומן ברשתות החברתיות",
      "עיצוב לוגו ומיתוג מלא",
      "בניית אתר מקצועי מותאם המרה",
      "תמיכה ייעודית 24/7",
      "אסטרטגיה ואופטימיזציה מתמשכת"
    ],
    popular: false,
    gradient: "from-[#1a1a1a] to-[#252525]"
  }
];

export default function PricingSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/20 to-transparent" />
      
      {/* Background effects */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[#d4a853]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#d4a853]/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4a853] text-base md:text-lg font-semibold tracking-[0.12em] drop-shadow-[0_0_14px_rgba(212,168,83,0.35)]">החבילות שלנו</span>
          <h2 className="text-3xl md:text-5xl font-light text-white mt-4 tracking-wide">
            בחרו את החבילה המתאימה לכם
          </h2>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto md:whitespace-nowrap">
            כל חבילה מותאמת אישית לצרכים שלכם. המחירים כוללים ניהול ותוכן, תקציב פרסום נוסף לפי הצורך
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#d4a853] to-[#b8934a] text-[#0a0a0a] px-4 py-1 rounded-full text-sm font-medium">
                    הכי פופולרי
                  </div>
                </div>
              )}
              
              <div className={`relative h-full bg-gradient-to-br ${pkg.gradient} rounded-2xl p-8 border ${pkg.popular ? 'border-[#d4a853]/40' : 'border-white/10'} hover:border-[#d4a853]/30 transition-all duration-500 group`}>
                {/* Hover glow */}
                {pkg.popular && (
                  <div className="absolute inset-0 bg-[#d4a853]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                <div className="relative h-full flex flex-col">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl mb-6 mx-auto ${pkg.popular ? 'bg-[#d4a853]/20' : 'bg-white/5'}`}>
                    <pkg.icon className={`w-6 h-6 ${pkg.popular ? 'text-[#d4a853]' : 'text-white/60'}`} />
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-semibold text-white mb-2">{pkg.name}</h3>
                  <p className="text-white/50 text-sm mb-6">{pkg.description}</p>



                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#d4a853] flex-shrink-0 mt-0.5" />
                        <span className="text-white/70 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    onClick={scrollToContact}
                    className={`w-full py-6 rounded-xl font-medium transition-all duration-300 mt-auto ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-[#d4a853] to-[#b8934a] hover:from-[#e0b865] hover:to-[#c9a35a] text-[#0a0a0a] shadow-[0_0_30px_rgba(212,168,83,0.2)]'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                    }`}
                  >
                    בואו נדבר
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom package note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-white/50 text-sm">
            לא מצאתם את מה שחיפשתם? 
            <button 
              onClick={scrollToContact}
              className="text-[#d4a853] hover:text-[#e0b865] transition-colors mr-2 underline"
            >
              בואו נבנה חבילה מותאמת אישית!
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

