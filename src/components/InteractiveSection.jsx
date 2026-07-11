import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowLeft, ArrowRight, RotateCcw, ShieldCheck, HelpCircle } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "איך אתם מנהלים את קליטת הפניות והלידים החדשים כיום?",
    options: [
      { text: "פניות נרשמות ידנית (במחברת, בוואטסאפ האישי או בקבוצות)", points: 0, value: "manual" },
      { text: "הפניות מגיעות למייל או לקובץ אקסל ואנחנו חוזרים אליהן משם", points: 10, value: "excel" },
      { text: "יש לנו מערכת CRM מסודרת שקולטת את כל הפניות אוטומטית", points: 20, value: "crm" }
    ]
  },
  {
    id: 2,
    question: "תוך כמה זמן בממוצע אתם חוזרים לפנייה חדשה בעסק?",
    options: [
      { text: "ביום למחרת או כשמתפנה זמן במהלך השבוע", points: 0, value: "next_day" },
      { text: "במהלך אותו היום, בדרך כלל תוך מספר שעות", points: 10, value: "hours" },
      { text: "משתדלים לחזור מיידית, בטווח של מספר דקות (במענה אוטומטי או נציג)", points: 20, value: "immediate" }
    ]
  },
  {
    id: 3,
    question: "כיצד מתבצע מעקב (Follow-up) אחר לקוחות שלא ענו לכם?",
    options: [
      { text: "אין לנו תהליך מוגדר כרגע, רוב הפניות שלא ענו פשוט נעצרות שם", points: 0, value: "no_follow" },
      { text: "באופן ידני - שולחים הודעה או מנסים להתקשר שוב כשנזכרים", points: 10, value: "manual_follow" },
      { text: "יש לנו סדרת הודעות ומעקבים אוטומטיים מתוזמנים בוואטסאפ או בסמס", points: 20, value: "auto_follow" }
    ]
  },
  {
    id: 4,
    question: "היכן נשמרים פרטי הלקוחות שלכם לניהול לטווח הארוך?",
    options: [
      { text: "בהיסטוריית השיחות בוואטסאפ או בפתקאות ידניות", points: 0, value: "whatsapp_db" },
      { text: "בקובצי אקסל מפוזרים או במייל", points: 10, value: "excel_db" },
      { text: "במערכת CRM מרכזית ומסודרת שמאפשרת לנו לנהל אותם בנוחות", points: 20, value: "crm_db" }
    ]
  },
  {
    id: 5,
    question: "האם יש לכם תהליך שליחה אוטומטי של מידע או הצעות מחיר?",
    options: [
      { text: "לא, אנחנו מכינים ושולחים הכל ידנית לכל לקוח בנפרד", points: 0, value: "manual_proposal" },
      { text: "חלקית, יש לנו הודעות מוכנות מראש שאנחנו מעתיקים ושולחים ידנית", points: 10, value: "semi_auto" },
      { text: "כן, שליחת המידע או הקטלוג מתבצעת אוטומטית לפי בקשת הלקוח", points: 20, value: "auto_proposal" }
    ]
  }
];

export default function InteractiveSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (value, points) => {
    const newAnswers = { ...answers, [currentStep]: { value, points } };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResults(false);
  };

  // Calculate score out of 100
  const totalPoints = Object.values(answers).reduce((sum, item) => sum + item.points, 0);
  const score = totalPoints;

  return (
    <section id="interactive-tools" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505] relative overflow-hidden" dir="rtl">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent" />
      
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black text-white">בואו נבדוק את פוטנציאל השדרוג של העסק שלכם</h2>
          <p className="text-white/50 text-xs md:text-sm mt-2 max-w-lg mx-auto">
            מלאו 5 שאלות פשוטות וידידותיות כדי לקבל הערכה מהירה של הדרכים בהן נוכל לחסוך לכם זמן ולייעל את השיווק והמענה בעסק שלכם.
          </p>
        </div>

        <div className="glass-card rounded-[2rem] p-6 md:p-8 border border-white/5 bg-black/50 relative overflow-hidden max-w-2xl mx-auto">
          
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Progress Header */}
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-white/50 text-xs font-bold flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-[#d4a853]" />
                    שאלה {currentStep + 1} מתוך {questions.length}
                  </span>
                  
                  <div className="w-32 bg-white/10 h-1 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] h-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-base md:text-lg font-black text-white leading-snug">
                  {questions[currentStep].question}
                </h3>

                {/* Options list */}
                <div className="space-y-2.5">
                  {questions[currentStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(option.value, option.points)}
                      className="w-full text-right bg-white/3 hover:bg-[#d4a853]/5 border border-white/5 hover:border-[#d4a853]/30 p-3.5 rounded-xl text-white text-xs md:text-sm font-medium transition-all duration-200 flex items-center justify-between group cursor-pointer"
                    >
                      <span>{option.text}</span>
                      <ArrowLeft className="w-3.5 h-3.5 text-white/30 group-hover:text-[#d4a853] group-hover:translate-x-[-3px] transition-all flex-shrink-0 mr-3" />
                    </button>
                  ))}
                </div>

                {/* Back Button */}
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span>חזרה לשאלה הקודמת</span>
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 text-center"
              >
                {/* Results Header */}
                <div>
                  <Sparkles className="w-8 h-8 text-[#d4a853] mx-auto mb-2 animate-pulse" />
                  <h3 className="text-xl md:text-2xl font-black text-white">תוצאות הבדיקה שלכם</h3>
                </div>

                {/* Score Layout */}
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="relative w-28 h-28 flex items-center justify-center rounded-full border border-white/10 bg-black/60 shadow-[0_0_25px_rgba(212,168,83,0.03)] mb-4">
                    <div className="absolute inset-1.5 rounded-full border border-dashed border-[#d4a853]/20 animate-spin-slow" />
                    <div className="text-center z-10">
                      <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f0d78a] to-[#d4a853]">{score}</span>
                      <span className="text-white/40 block text-[9px] font-bold">מתוך 100</span>
                    </div>
                  </div>
                  
                  <h4 className="text-sm font-bold text-white mb-2">
                    {score < 50 ? (
                      <span className="text-amber-400">יש כאן הזדמנות נהדרת לשדרוג ויעילות בעסק</span>
                    ) : score < 80 ? (
                      <span className="text-amber-300">יש בסיס מצוין, עם מקום לשדרוג תהליכים</span>
                    ) : (
                      <span className="text-green-400 flex items-center justify-center gap-1">
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        מדהים! העסק שלכם עובד בצורה יעילה ומאורגנת
                      </span>
                    )}
                  </h4>
                  
                  <p className="text-white/60 text-xs leading-relaxed max-w-md mx-auto">
                    {score < 50 ? (
                      "כרגע רוב התהליכים מנוהלים ידנית. המשמעות היא שאתם משקיעים המון זמן יקר שיכול להיחסך, ויש פניות שעלולות ללכת לאיבוד. מעבר לאוטומציה יפנה לכם שעות רבות בכל שבוע ויוביל ליותר סגירות."
                    ) : score < 80 ? (
                      "העסק שלכם כבר משתמש בכמה כלים דיגיטליים, וזה מעולה! יחד עם זאת, חיבור התהליכים יחד תחת מערכת אחת חכמה ימנע צווארי בקבוק, יקל עליכם משמעותית וישפר את אחוזי ההמרה."
                    ) : (
                      "העסק שלכם פועל בצורה נהדרת ומנצל היטב את הכלים הדיגיטליים. נשמח לחשוב יחד איך לקחת את זה צעד אחד קדימה לעבר אוטומציות מתקדמות וקמפיינים מורחבים שיאפשרו לכם לגדול עוד."
                    )}
                  </p>
                </div>

                {/* Recommendations */}
                <div className="bg-white/3 border border-white/5 p-4 rounded-2xl text-right max-w-md mx-auto space-y-3">
                  <h5 className="text-xs font-black text-[#d4a853] mb-1">נקודות לשיפור שנוכל לעזור לכם ליישם:</h5>
                  <ul className="space-y-2 text-white/70 text-[11px] md:text-xs">
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4a853] font-bold">✓</span>
                      <span>בניית תשתית CRM מאורגנת כדי שאף לקוח לא יילך לאיבוד</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4a853] font-bold">✓</span>
                      <span>חיבור מענה ראשוני אוטומטי בוואטסאפ כדי לחזור ללקוח תוך שניות</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4a853] font-bold">✓</span>
                      <span>הקמת סדרת הודעות מעקב מתוזמנת להחזרת לקוחות שלא ענו</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Action */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1c1407] font-bold text-xs rounded-xl shadow-[0_4px_12px_rgba(212,168,83,0.15)] hover:shadow-[0_6px_20px_rgba(212,168,83,0.35)] transition-all duration-300 cursor-pointer relative overflow-hidden after:absolute after:inset-y-0 after:-left-[100%] after:w-[50%] after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:skew-x-[-25deg] hover:after:left-[150%] after:transition-all after:duration-[1000ms] after:ease-in-out border border-[#d4a853]/40"
                  >
                    בואו נתכנן את השדרוג שלכם ביחד
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="px-5 py-2.5 bg-transparent border border-white/10 text-white/60 hover:text-white hover:bg-white/5 font-bold text-xs rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>בדיקה מחדש</span>
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
