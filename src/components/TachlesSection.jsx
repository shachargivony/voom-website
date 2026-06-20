import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";

const services = [
  {
    title: "שיווק ממוקד בוואטסאפ",
    desc: "הגעה ישירה ומפולחת למסך הנייד של לקוחות פוטנציאליים דרך קבוצות ורשימות תפוצה ממוקדות. חשיפה נרחבת עם אחוזי פתיחה ומענה גבוהים במיוחד.",
    benefits: ["פילוח גיאוגרפי ומקצועי", "דיוור אישי ללא חסימות API", "אחוזי מענה ושיח גבוהים"],
    goldGradient: "from-[#f0d78a] via-[#d4a853] to-[#b8934a]"
  },
  {
    title: "קמפיינים ממומנים ברשתות",
    desc: "פרסום חכם בפייסבוק, אינסטגרם וטיקטוק. אנו בונים קריאייטיבים יוקרתיים וקופירייטינג חד כדי להביא לידים איכותיים בלבד.",
    benefits: ["מחקר קהלים ומתחרים", "A/B Testing שוטף למודעות", "ניהול תקציב מבוסס החזר השקעה"],
    goldGradient: "from-[#e5c07b] via-[#c49a45] to-[#a37c2b]"
  },
  {
    title: "בניית אתרים ממירי תנועה",
    desc: "אפיון, עיצוב ופיתוח דפי נחיתה ואתרי תדמית יוקרתיים. מותאמים מושלם למובייל, מהירים במיוחד ומתוכננים להמרות.",
    benefits: ["עיצוב פרימיום מותאם מותג", "זמני טעינה מהירים במיוחד", "חיבור מלא לטפסים ול-CRM"],
    goldGradient: "from-[#f4e2bb] via-[#d4a853] to-[#997733]"
  },
  {
    title: "עיצוב זהות מותגית ומיתוג",
    desc: "יצירת שפה ויזואלית ייחודית לעסק שלך. עיצוב לוגו מקצועי, בחירת צבעים, ספר מותג וכל החומרים השיווקיים הנדרשים.",
    benefits: ["ספר מותג דיגיטלי מלא", "עיצובים מותאמים לרשתות", "חומרי פרסום דיגיטליים מעוצבים"],
    goldGradient: "from-[#d4a853] via-[#b8934a] to-[#806020]"
  }
];

export default function TachlesSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tachles-section" className="py-20 bg-gradient-to-b from-[#070707] to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4a853]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white flex items-center justify-center gap-3 flex-wrap">
            <motion.span
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, -1, 1, -1, 0]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="inline-block text-[#d4a853] text-4xl md:text-6xl font-black tracking-wide"
            >
              תכלס,
            </motion.span>
            <span>מה אנחנו מציעים?</span>
          </h2>
        </motion.div>

        {/* Beautiful Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-[2rem] p-8 border border-white/5 hover:border-[#d4a853]/35 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white">
                  {service.title}
                </h3>
                
                {/* Gold bar moved under the title */}
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${service.goldGradient} mt-3 mb-6`} />
                
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/5">
                {service.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#d4a853] shrink-0" />
                    <span className="text-xs md:text-sm text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Curiosity Statement & CTA Button Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto flex flex-col items-center gap-6"
        >
          {/* Extremely compelling curiosity inducer statement */}
          <p className="text-white/80 text-sm md:text-lg leading-relaxed tracking-wide">
            רוצים להגיע ישירות ללקוחות שלכם ולייעל את תהליכי השיווק והמכירה של העסק? השאירו פרטים ותגלו את השילוב המנצח של <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0d78a] to-[#d4a853] font-black">VOOM</span> בין שיווק חכם לאוטומציות מתקדמות.
          </p>

          {/* Glowing Animated CTA Button */}
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#f0d78a] via-[#d4a853] to-[#b8934a] text-black font-black text-sm md:text-base rounded-2xl border border-[#d4a853]/40 shadow-[0_0_30px_rgba(212,168,83,0.3)] hover:shadow-[0_0_50px_rgba(212,168,83,0.6)] transition-all duration-300 animate-float-breathing"
          >
            <span>גלו איך זה עובד אצלכם</span>
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-black" />
            <span className="absolute inset-0 rounded-2xl border border-[#d4a853]/30 animate-ping opacity-50 pointer-events-none" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
