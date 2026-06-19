import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "כמה זמן לוקח לראות תוצאות?",
    answer: "קידום בוואטסאפ מניב לידים חמים כבר בימים הראשונים להרצה. קמפיינים ממומנים ברשתות ובניית מותג לוקחים בין שבועיים לחודש להגעה לאופטימיזציה מלאה."
  },
  {
    question: "האם אני צריך להיות מעורב בתהליך?",
    answer: "בתחילת הדרך נדרש אפיון קצר וקבלת חומרי גלם בסיסיים. לאחר מכן אנחנו לוקחים אחריות מלאה על הקריאייטיב, הניהול, הכתיבה והאופטימיזציה, ומעדכנים אתכם בתוצאות."
  },
  {
    question: "האם יש התחייבות לטווח ארוך?",
    answer: "חד משמעית לא. אנחנו עובדים במותאם חודשי ללא התחייבות. אנחנו מאמינים שהתוצאות והשירות שלנו הם שיגרמו לכם להישאר איתנו, לא חוזים כובלים."
  },
  {
    question: "איך מתבצע הדיווח על התוצאות?",
    answer: "הכל שקוף לחלוטין. תקבלו דוחות מפורטים המציגים חשיפות, לידים בפועל, המרות והחזר השקעה (ROI) ברור לכל שקל שהושקע."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4a853]/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white">יש לכם שאלות? יש לנו תשובות</h2>
          <p className="text-white/50 text-sm md:text-base mt-2">
            כל מה שחשוב לדעת על תחילת העבודה איתנו.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 md:p-6 flex items-center justify-between gap-4 text-right"
                >
                  <h3 className={`text-sm md:text-base font-bold transition-colors duration-300 ${isOpen ? "text-[#d4a853]" : "text-white"}`}>
                    {faq.question}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-[#d4a853] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-6 text-white/70 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
