import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Target, Zap, Gift, ArrowLeft } from "lucide-react";

const packages = [
  {
    title: "נוכחות ברשתות",
    subtitle: "ליצירת נוכחות דיגיטלית בולטת ושפה ויזואלית ייחודית",
    icon: Target,
    isPopular: false,
    services: [
      "יצירת קריאייטיב, קופירייטינג ופרסום תכנים שוטף בעמודים",
      "מחקר מתחרים ואסטרטגיית תוכן מותאמת אישית לכל פוסט",
      "יצירת שפה עיצובית אחידה ומיתוג מותאם לרשתות",
      "הפקת סדרת Reels / TikTok מקצועית (3 סרטונים)",
      "יום צילום לתוכן וידאו כולל בניית תסריטים ועריכה דינמית",
      "כתיבת BIO שיווקי ועיצוב Covers מותאמים לעמודים",
      "הטמעת כתוביות ואפקטים מודרניים בסרטונים",
      "עיצוב 3 מודעות גרפיות מקצועיות לקמפיינים",
      "קידום וחשיפה ממוקדת בקבוצות וואטסאפ רלוונטיות"
    ],
    bonuses: [
      "זמינות ושירות לקוחות מהיר בוואטסאפ לכל שאלה ובקשה"
    ]
  },
  {
    title: "חבילת צמיחה ומכירות",
    subtitle: "החבילה המלאה לבניית נכס דיגיטלי וייצור לידים יציב",
    icon: Sparkles,
    isPopular: true,
    services: [
      "בניית אתר תדמית או חנות דיגיטלית רספונסיבית מאפס",
      "אפיון אסטרטגי של חווית המשתמש (UX/UI)",
      "הקמת תשתית פרסום מלאה ב-Meta וטיקטוק (קריאייטיב, קופי ופרסום)",
      "מחקר קהלי יעד ובניית משפכי שיווק ממוקדים להמרה",
      "הפקת סדרת Reels / TikTok מורחבת (5 סרטונים)",
      "בניית מועדון לקוחות דיגיטלי ותשתית דף נחיתה ייעודי",
      "מערכת דיוור אוטומטית במייל ובוואטסאפ ללידים",
      "ביצוע אופטימיזציה ו-A/B Testing שוטף למודעות",
      "חיבור פיקסלים וקודי מעקב למדידת החזר השקעה (ROI)",
    ],
    bonuses: [
      "אחסון ותמיכה טכנית מלאה לשנה שלמה במתנה",
      "זמינות ושירות לקוחות מהיר בוואטסאפ לכל שאלה ובקשה"
    ]
  },
  {
    title: "טרנספורמציה 360°",
    subtitle: "כל השירותים מהחבילות הקודמות + מעטפת אוטומציה עמוקה",
    icon: Zap,
    isPopular: false,
    services: [
      "כולל את כל שירותי חבילת הנוכחות ברשתות וחבילת הצמיחה והמכירות",
      "בנייה מחדש או שדרוג מקיף של האתר לפלטפורמה מתקדמת",
      "שיפור יחסי המרה (CRO) ומהירות טעינה מקסימלית",
      "ניהול קמפיינים מתקדם ב-Google Ads (קריאייטיב ופרסום)",
      "בניית קהילת לקוחות בוואטסאפ (ייצור תוכן וחשיפה)",
      "רישיון לתוכנת שיווק וצ'אטבוט אוטומטי בוואטסאפ",
      "חיבור מערכות אוטומציה מתקדמות לחיבור לידים ל-CRM",
      "סדרת הודעות מעקב (Follow-up) מתוזמנת אוטומטית",
      "דוחות אנליזה חודשיים מקיפים על ביצועים ומכירות",
      "ליווי אסטרטגי צמוד ופגישת ביצועים חודשית"
    ],
    bonuses: [
      "אחסון ותמיכה טכנית מלאה לשנה שלמה במתנה",
      "הדרכת מכירות אישית ע\"י אור (שווי 2,500₪)",
      "זמינות ושירות לקוחות מהיר בוואטסאפ לכל שאלה ובקשה"
    ]
  }
];

export default function PackagesSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages-section" className="py-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a] relative overflow-hidden" dir="rtl">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent" />
      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4a853]/2 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4a853] text-xs md:text-sm font-bold uppercase tracking-[0.2em] block mb-2">מסלולי צמיחה מותאמים</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-wide">חבילות השיווק הפופולריות שלנו</h2>
          <p className="text-white/50 text-sm md:text-base mt-2 max-w-xl mx-auto">
            בחרו את החבילה המתאימה לשלב שבו העסק שלכם נמצא כרגע, ונתחיל להוביל את השינוי ביחד.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative flex flex-col h-full pt-4 group"
              >
                {/* Popular Badge */}
                {pkg.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1c1407] text-[10px] font-bold px-4 py-1 rounded-full shadow-[0_4px_12px_rgba(212,168,83,0.2)] flex items-center gap-1 select-none tracking-wide">
                      <Sparkles className="w-3 h-3 text-[#1c1407]" />
                      הבחירה המומלצת לעסקים
                    </div>
                  </div>
                )}

                {/* Card Container */}
                <div
                  className={`glass-card rounded-[2rem] p-6 md:p-8 border h-full flex flex-col justify-between transition-all duration-300 ${
                    pkg.isPopular
                      ? "border-[#d4a853]/40 bg-black/60 shadow-[0_0_50px_rgba(212,168,83,0.07)]"
                      : "border-white/5 bg-black/40 hover:border-[#d4a853]/25"
                  }`}
                >
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden border transition-all duration-300 ${
                        pkg.isPopular 
                          ? "bg-[#d4a853]/10 border-[#d4a853]/35 group-hover:border-[#d4a853]/60 shadow-[0_0_15px_rgba(212,168,83,0.1)]" 
                          : "bg-white/5 border-white/10 group-hover:border-white/20"
                      }`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                        <Icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${pkg.isPopular ? "text-[#d4a853]" : "text-white/70"}`} />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-black text-white leading-tight">{pkg.title}</h3>
                        <p className="text-[10px] md:text-[11px] text-white/45 mt-0.5 leading-snug">{pkg.subtitle}</p>
                      </div>
                    </div>

                    <div className="h-px bg-white/5 w-full mb-6" />

                    {/* Services */}
                    <ul className="space-y-4">
                      {pkg.services.map((service, sIdx) => {
                        const isInclusion = service.includes("כולל את כל שירותי");
                        return (
                          <li key={sIdx} className="flex items-start gap-3">
                            <Check className="w-3.5 h-3.5 text-[#d4a853] shrink-0 mt-0.5" />
                            <span className={`text-[12px] md:text-[13px] leading-relaxed tracking-wide ${
                              isInclusion ? "text-[#f0d78a] font-bold" : "text-white/80"
                            }`}>
                              {service}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    {/* Bonuses */}
                    {pkg.bonuses && pkg.bonuses.length > 0 && (
                      <div className="mt-6 pt-5 border-t border-white/5">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4a853]/8 border border-[#d4a853]/20 mb-4 shadow-[0_2px_8px_rgba(212,168,83,0.05)] select-none">
                          <Gift className="w-3.5 h-3.5 text-[#d4a853]" />
                          <span className="text-[10px] md:text-[11px] font-bold text-[#d4a853] tracking-wide">בונוסים מיוחדים כלולים</span>
                        </div>
                        <ul className="space-y-2.5">
                          {pkg.bonuses.map((bonus, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5">
                              <span className="text-[#d4a853] text-xs mt-0.5">✦</span>
                              <span className="text-[11px] md:text-xs text-[#d4a853]/85 leading-relaxed tracking-wide">{bonus}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-6 border-t border-white/5">
                    {pkg.isPopular ? (
                      <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(212,168,83,0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={scrollToContact}
                        className="w-full py-3 font-bold text-xs md:text-sm rounded-xl bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1c1407] border border-[#d4a853]/45 shadow-[0_4px_15px_rgba(212,168,83,0.2)] transition-all duration-300 cursor-pointer relative overflow-hidden after:absolute after:inset-y-0 after:-left-[100%] after:w-[50%] after:bg-gradient-to-r after:from-transparent after:via-white/35 after:to-transparent after:skew-x-[-25deg] hover:after:left-[150%] after:transition-all after:duration-[1000ms] after:ease-in-out flex items-center justify-center gap-2 group/btn"
                      >
                        <span>לפרטים נוספים ותיאום שיחה</span>
                        <ArrowLeft className="w-4 h-4 text-[#1c1407] transition-transform duration-300 group-hover/btn:-translate-x-1" />
                      </motion.button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(212,168,83,0.06)", borderColor: "rgba(212,168,83,0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={scrollToContact}
                        className="w-full py-3 font-bold text-xs md:text-sm rounded-xl bg-white/3 border border-white/10 text-white/70 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 hover:text-white group/btn"
                      >
                        <span>לפרטים נוספים ותיאום שיחה</span>
                        <ArrowLeft className="w-4 h-4 text-white/60 transition-all duration-300 group-hover/btn:text-white group-hover/btn:-translate-x-1" />
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[10px] text-white/25 mt-8">
          * כל החבילות מותאמות אישית לצרכי העסק. ניתן לשלב שירותים ולהתאים את החבילה בשיחת הייעוץ.
        </p>
      </div>
    </section>
  );
}
