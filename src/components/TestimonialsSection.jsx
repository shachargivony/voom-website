import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    initials: "דכ",
    name: "דני כהן",
    role: "בעלים, חנות דיגיטלית",
    content: "VOOM הצליחו להביא לנו פי 3 יותר לידים. הקמפיינים בוואטסאפ פשוט עבדו מעולה. ממליץ בחום!"
  },
  {
    initials: "של",
    name: "שרה לוי",
    role: "מנהלת, סוכנות תיירות",
    content: "האתר שבנו הוא פשוט מדהים. הלקוחות שלי מתרשמים בשנייה וההמרות עלו משמעותית. צוות מקצועי ומחויב."
  },
  {
    initials: "יא",
    name: "יוסי אברהם",
    role: "בעלים, רשת מסעדות",
    content: "קידום ממומן שעובד! המסעדות שלנו מלאות בהזמנות. שירות אדיב ותוצאות ברורות."
  },
  {
    initials: "מד",
    name: "מיכל דהן",
    role: "יזמית, חברת הייטק",
    content: "המיתוג והלוגו שעיצבו לי פשוט מושלמים. זה בדיוק מה שרציתי - ייחודי, זכיר ומקצועי. תודה ענקית!"
  },
  {
    initials: "אב",
    name: "אלי בן דוד",
    role: "מנכ״ל, חברת השקעות",
    content: "אחרי שנים של ניסיונות עם חברות שיווק, סוף סוף מצאתי מישהו שמבין את הצרכים שלי. שירות ברמה אחרת."
  },
  {
    initials: "רמ",
    name: "רונית מזרחי",
    role: "מנהלת, מרכז אירועים",
    content: "הקמפיין בוואטסאפ הביא לי המון לקוחות חדשים! לא האמנתי שזה אפשרי. פשוט WOW!"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4a853]/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white">מה הלקוחות שלנו אומרים?</h2>
          <p className="text-white/50 text-sm md:text-base mt-2">
            100+ עסקים כבר מייצרים לידים איתנו — הנה מה שהם אומרים.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col justify-between hover:border-[#d4a853]/35 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 left-6 w-10 h-10 text-[#d4a853]/5 group-hover:text-[#d4a853]/10 transition-colors pointer-events-none" />
              
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#d4a853] text-[#d4a853]" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/25 flex items-center justify-center text-xs font-bold text-[#d4a853]">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-white leading-none">{t.name}</h4>
                  <span className="text-white/40 text-xs mt-1 block">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
