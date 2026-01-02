import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, Lightbulb, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#050505] to-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/20 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4a853]/5 rounded-full blur-[200px]" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="p-3 bg-[#d4a853]/10 rounded-xl">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-[#d4a853]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">מי אנחנו?</h2>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-6 md:p-10 border border-[#d4a853]/20">
            <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl text-white/70 leading-relaxed">
              <p>
                אנחנו ב-VOOM פועלים מתחת לרדאר. בעוד שאנחנו מנהלים את המערכת בשקט מאחורי הקלעים, הלקוחות שלנו תופסים את קדמת הבמה.
              </p>
              <p>
                אנו מספקים מעטפת ניהולית הכוללת:
              </p>
              <ul className="list-disc pr-5 space-y-2 text-white/70 text-base md:text-lg lg:text-xl leading-relaxed marker:text-[#d4a853]">
                <li>תכנון אסטרטגי וניהול שיווקי</li>
                <li>קריאייטיב וקופירייטינג</li>
                <li>בניית אתרים</li>
                <li>קידום ממומן</li>
                <li>עיצוב גרפי</li>
              </ul>
              <p>
                אופטימיזציה של תהליכי שירות ומכירה כדי שהלקוחות שלנו יהיו בפרונט, עם נראות חזקה ותוצאות שמדברות.
              </p>
              <p className="text-white/50 text-base md:text-lg italic">
                לא תשמעו עלינו בכל מקום. רוב הלקוחות שלנו מגיעים מפה לאוזן דרך תוצאות שמדברות חזק יותר מכל קמפיין תדמיתי.
              </p>
              <p className="text-[#d4a853] font-medium">
                ככה אנחנו מאמינים שחברת שיווק צריכה לעבוד.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="p-3 bg-[#d4a853]/10 rounded-xl">
              <Eye className="w-6 h-6 md:w-8 md:h-8 text-[#d4a853]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">החזון שלנו</h2>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-6 md:p-10 border border-[#d4a853]/20">
            <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl text-white/70 leading-relaxed">
              <p>
                החזון של VOOM הוא להיות <span className="text-[#d4a853] font-medium">הכוח השקט</span> שמאחורי עסקים מצליחים.
              </p>
              <p>
                לעבוד מאחורי הקלעים, להאמין בדרך, ולהוביל עסקים לצמיחה אמיתית.
              </p>
              <p>
                אנחנו מאמינים בקשר אנושי, בעבודה קשה ובשיתוף פעולה מלא.
              </p>
              <p className="text-[#d4a853] font-medium">
                לבנות יחד, לחשוב יחד, ולהצליח יחד.
              </p>
              <p>
                כי כשעסק מרגיש שיש לו גב – הוא מעז לגדול.
              </p>
              <p>
                וכשהלקוחות שלנו מצליחים – זו ההצלחה שלנו.
              </p>
              <div className="border-t border-white/10 pt-6 mt-6">
                <p className="text-white/80 mb-4">
                  החזון של VOOM הוא לבנות מערכות שיווק ומכירה יציבות שמייצרות תוצאות לאורך זמן.
                </p>
                <p className="mb-4">
                  אנחנו פועלים כשותפים אסטרטגיים לעסקים מכל הסוגים,
                  ומספקים מעטפת מלאה המבוססת על חשיבה חדה, תהליכים מדויקים וביצוע עקבי.
                </p>
                <div className="border-t border-white/10 pt-6 mt-6" />
                <p className="text-xl md:text-2xl text-[#d4a853] font-semibold">
                  המטרה שלנו ברורה:
                </p>
                <p className="text-lg md:text-xl text-white/90 font-medium mt-2">
                  יציבות, צמיחה ורווחיות – ללא רעש מיותר וללא פשרות על איכות.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why VOOM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="p-3 bg-[#d4a853]/10 rounded-xl">
              <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-[#d4a853]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">למה הקמנו את VOOM?</h2>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-6 md:p-10 border border-[#d4a853]/20">
            <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl text-white/70 leading-relaxed">
              <p>
                <span className="text-[#d4a853] font-medium">הקמנו את VOOM</span> מתוך רצון לשנות את עולם השיווק.
              </p>
              <p>
                נמאס לנו מהבטחות גדולות בלי תוצאות, מחברות שמוכרות חלומות במקום עבודה קשה, ומשיווק שנשאר יפה אבל לא עובד.
              </p>
              <p>
                רצינו לבנות חברת שיווק <span className="text-[#d4a853] font-medium">שחושבת קדימה</span>, עובדת לעומק ולא מפחדת לעשות שינויים כשצריך.
              </p>
              <p>
                אנחנו לא מתפשרים על עבודה קשה כדי לנצח. <span className="text-[#d4a853] font-medium">לא מפחדים לשנות כיוון</span> כשצריך גם אם זה פחות נוח.
              </p>
              <p>
                אבל יותר מהכול - אנחנו עובדים <span className="text-[#d4a853] font-medium">בקשר אישי אמיתי</span>. הלקוחות שלנו מרגישים בנוח לדבר איתנו, להתייעץ, לחשוב יחד.
              </p>
              <p className="text-white/70 leading-relaxed text-base md:text-lg lg:text-xl my-6 md:my-8">
                בלי אגו. בלי רעש מיותר. רק עבודה שמביאה תוצאות.
              </p>
              <p className="text-[#d4a853] font-medium text-base md:text-lg lg:text-xl leading-relaxed">
                אנחנו לא רק אנשי מקצוע - אנחנו שותפים וחברים לדרך. ככה בונים הצלחות אמיתיות.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="p-3 bg-[#d4a853]/10 rounded-xl">
              <Target className="w-6 h-6 md:w-8 md:h-8 text-[#d4a853]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">מי עומד מאחורי VOOM?</h2>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-6 md:p-10 border border-[#d4a853]/20">
            <p className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed mb-6 md:mb-8">
              החברה הוקמה על ידי שני שותפים שמשלימים אחד את השני באופן מלא:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
              <div className="bg-gradient-to-br from-[#0f0f0f] to-[#050505] rounded-xl p-6 md:p-8 border border-white/5 hover:border-[#d4a853]/30 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#d4a853] mb-3 md:mb-4">אור</h3>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  מנהל ומדריך מכירות עם ניסיון של מעל 17 שנים, חשיבה עסקית חדה והבנה עמוקה של תהליכי מכירה, שירות וצמיחה.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#0f0f0f] to-[#050505] rounded-xl p-6 md:p-8 border border-white/5 hover:border-[#d4a853]/30 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#d4a853] mb-3 md:mb-4">שחר</h3>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  מומחה מחשבים, תוכנות ודיגיטל עם מעל 10 שנות ניסיון בבניית מערכות, אוטומציות ואסטרטגיות טכנולוגיות מתקדמות.
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg lg:text-xl text-[#d4a853] font-medium leading-relaxed my-6 md:my-8">
              החיבור בין עולם המכירות לעולם המערכות והדיגיטל יוצר שיתוף פעולה פנומנלי - והלקוח מרוויח מעטפת עסקית שלמה.
            </p>

            <p className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed mt-8 md:mt-10">
              אנחנו VOOM - חברת שיווק שנותנת מעטפת חזקה לעסקים שרוצים לצמוח בשקט, בעומק ועם תוצאות שמדברות.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
