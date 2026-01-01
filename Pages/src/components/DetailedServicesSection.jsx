import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Target, Globe, Palette, ChevronDown, Check } from "lucide-react";

const servicesDetails = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: "קידום בוואטסאפ",
    subtitle: "חשיפה למעל 100,000 אנשים",
    color: "#d4a853",
    description: "הערוץ הכי אישי ואפקטיבי לפנות ללקוחות פוטנציאליים. אנחנו מגיעים ישירות לנייד שלהם עם מסרים ממוקדים.",
    features: [
      "פרסום לקבוצות וואטסאפ ממוקדות בגיאוגרפיה ונישה שלכם",
      "הגעה ישירה לאנשים בעלי עניין אמיתי בעסק שלכם",
      "חשיפה למעל 100,000 אנשים בקהל היעד",
      "שיעור פתיחה של מעל 90% (לעומת 20% במייל)",
      "תגובות מהירות והמרות גבוהות",
      "מעקב ודיווח על תוצאות בזמן אמת"
    ]
  },
  {
    id: "social",
    icon: Target,
    title: "קידום ממומן ברשתות",
    subtitle: "פייסבוק, אינסטגרם, טיקטוק",
    color: "#d4a853",
    description: "קמפיינים חכמים שמביאים תוצאות מדידות. אנחנו יודעים בדיוק איך להגיע לקהל שלכם במקום הנכון, בזמן הנכון.",
    features: [
      "ניהול קמפיינים ממומנים בפייסבוק ואינסטגרם",
      "קמפיינים בטיקטוק לקהלים צעירים",
      "טרגוט מדויק לפי דמוגרפיה, תחומי עניין והתנהגות",
      "A/B testing שוטף לאופטימיזציה מקסימלית",
      "יצירת קריאייטיבים מנצחים (תמונות ווידאו)",
      "ניהול תקציב חכם למקסימום ROI",
      "דוחות מפורטים עם תובנות ומלצות"
    ]
  },
  {
    id: "website",
    icon: Globe,
    title: "בניית אתרים",
    subtitle: "אתרים שמוכרים בשבילכם 24/7",
    color: "#d4a853",
    description: "אתר הוא לא רק כרטיס ביקור דיגיטלי. זה העובד הכי טוב שלכם - עובד 24/7, ומביא לקוחות בכל שעה.",
    features: [
      "עיצוב מודרני ומרשים שמייצג את המותג שלכם",
      "חוויית משתמש מושלמת (UX) שמובילה להמרות",
      "מותאם לכל המכשירים (נייד, טאבלט, מחשב)",
      "אתרי נחיתה ממוקדים להמרה מקסימלית",
      "אתרי תדמית מלאים עם ממשקי ניהול",
      "חנויות אונליין עם מערכות תשלום",
      "אופטימיזציה למנועי חיפוש (SEO)",
      "טפסים חכמים ואינטגרציות עם מערכות CRM"
    ]
  },
  {
    id: "branding",
    icon: Palette,
    title: "עיצוב לוגואים ומיתוג",
    subtitle: "הזהות המותגית שלכם",
    color: "#d4a853",
    description: "לוגו טוב זה לא רק עיצוב יפה. זה הסיפור שלכם, זה מה שהלקוחות זוכרים, וזה מה שמייצר אמון.",
    features: [
      "עיצוב לוגו ייחודי ומקצועי",
      "מיתוג מלא - צבעים, פונטים, סגנון ויזואלי",
      "מדריך מותג (Brand Guidelines) מקיף",
      "עיצוב כרטיסי ביקור, נייר מכתבים, חתימת מייל",
      "עיצובים לרשתות חברתיות (פרופיל, כיסוי, פוסטים)",
      "חומרי פרסום (פלאיירים, באנרים, שלטים)",
      "עיצוב אריזות ומוצרים (במידת הצורך)",
      "ליווי ויישום המיתוג בכל הערוצים"
    ]
  }
];

export default function DetailedServicesSection() {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-[#050505] to-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/20 to-transparent" />
      
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#d4a853]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-[#d4a853]/3 rounded-full blur-[180px]" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4a853] text-base md:text-lg font-semibold tracking-[0.12em] drop-shadow-[0_0_14px_rgba(212,168,83,0.35)]">פירוט השירותים</span>
          <h2 className="text-3xl md:text-5xl font-light text-white mt-4 tracking-wide">
            מה אנחנו מציעים?
          </h2>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto">
            לחצו על כל שירות כדי לראות פירוט מלא
          </p>
        </motion.div>

        <div className="space-y-4">
          {servicesDetails.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl border border-white/5 hover:border-[#d4a853]/20 transition-all duration-500 overflow-hidden">
                {/* Header - Always visible */}
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-right group"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div 
                      className="p-4 rounded-xl transition-all duration-300"
                      style={{
                        backgroundColor: expandedService === service.id 
                          ? `${service.color}20` 
                          : 'rgba(255,255,255,0.05)'
                      }}
                    >
                      <service.icon
                        className="w-7 h-7 transition-colors duration-300"
                        style={{
                          color: expandedService === service.id ? service.color : "#d4a853"
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 text-right">
                        {service.title}
                      </h3>
                      <p className="text-white/50 text-sm text-right">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-[#d4a853]" />
                  </motion.div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 border-t border-white/5">
                        <div className="pt-6 space-y-6">
                          {/* Description */}
                          <p className="text-white/70 leading-relaxed text-base md:text-lg">
                            {service.description}
                          </p>

                          {/* Features */}
                          <div>
                            <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                              <span className="w-1 h-5 bg-[#d4a853] rounded-full" />
                              מה כולל השירות:
                            </h4>
                            <ul className="grid md:grid-cols-2 gap-3">
                              {service.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <Check className="w-5 h-5 text-[#d4a853] flex-shrink-0 mt-0.5" />
                                  <span className="text-white/60 text-sm leading-relaxed">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>


                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

