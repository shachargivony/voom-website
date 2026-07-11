import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowLeft, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { base44 } from "@/api/base44Client";

const questions = [
  {
    id: 1,
    question: "מהן השאיפות והמטרות המרכזיות שלכם לחצי השנה הקרובה?",
    multiSelect: true,
    options: [
      { text: "להגדיל את מחזור המכירות בעסק ב-50% ומעלה", points: 20, value: "growth_50" },
      { text: "לבנות מותג חזק ומוביל שיבלוט מעל כל המתחרים", points: 20, value: "branding" },
      { text: "לייצר זרם יציב ואוטומטי של לידים חמים מדי יום", points: 20, value: "auto_leads" },
      { text: "לייעל את העבודה ולחסוך שעות עבודה יקרות באמצעות אוטומציה", points: 20, value: "save_time" }
    ]
  },
  {
    id: 2,
    question: "מהו צוואר הבקבוק המרכזי שמונע מכם לפרוץ קדימה כרגע?",
    multiSelect: true,
    options: [
      { text: "חוסר זמן להתעסק בשיווק ובניהול המדיה של העסק", points: 20, value: "no_time" },
      { text: "לידים חמים שמגיעים ולא חוזרים אליהם מספיק מהר", points: 15, value: "late_replies" },
      { text: "אין לנו אתר אינטרנט או תשתית דיגיטלית שמייצגת אותנו בכבוד", points: 15, value: "no_website" },
      {text: "אחוזי סגירה נמוכים של פניות", points: 15, value: "no_followup"}
    ]
  },
  {
    id: 3,
    question: "מהו תקציב השיווק והפרסום החודשי הפנוי שאתם מייעדים לצמיחת העסק?",
    multiSelect: false,
    options: [
      { text: "עד 2,500 ש״ח בחודש", points: 12, value: "low_budget" },
      { text: "2,500 - 5,000 ש״ח בחודש", points: 18, value: "mid_budget" },
      { text: "מעל 5,000 ש״ח בחודש", points: 20, value: "high_budget" }
    ]
  },
  {
    id: 4,
    question: "כמה זמן פנוי יש לכם או לצוות שלכם כדי לעבוד איתנו בשיתוף פעולה על האפיון?",
    multiSelect: false,
    options: [
      { text: "זמן מוגבל מאוד - מעדיפים שאתם תנהלו הכל מא' ועד ת' ונאשר תוצרים מרחוק", points: 16, value: "hands_off" },
      { text: "שעה-שעתיים בשבוע לשיחות תיאום וסנכרון שוטף", points: 19, value: "regular_updates" },
      { text: "מוכנים להשקיע את הזמן הנדרש בתחילת הדרך כדי להגיע לדיוק מקסימלי", points: 20, value: "deep_involvement" }
    ]
  },
  {
    id: 5,
    question: "מהי הציפייה שלכם לגבי קצב קבלת התוצאות והחזר ההשקעה (ROI)?",
    multiSelect: false,
    options: [
      { text: "מעדיפים לראות תוצאות ראשוניות ואינדיקציה להחזר השקעה מהיר ככל הניתן", points: 15, value: "fast_roi" },
      { text: "מבינים שהצלחה אמיתית נבנית על תשתיות חזקות ואסטרטגיה לטווח ארוך", points: 20, value: "long_term" },
      { text: "מחפשים יציבות וצמיחה הדרגתית ועקבית לאורך זמן", points: 18, value: "gradual_growth" }
    ]
  }
];

export default function InteractiveSection() {
  const [currentStep, setCurrentStep] = useState(-1); // Start at -1 for contact details
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    agreed: false
  });
  const [validationError, setValidationError] = useState("");
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [answers, setAnswers] = useState({});
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Sync saved selections when step changes
  useEffect(() => {
    if (currentStep >= 0 && currentStep < questions.length) {
      const saved = answers[currentStep];
      if (saved && Array.isArray(saved.indices)) {
        setSelectedIndices(saved.indices);
      } else {
        setSelectedIndices([]);
      }
    }
  }, [currentStep, answers]);

  const handleStartQuiz = async () => {
    if (!contactData.name.trim() || !contactData.phone.trim() || !contactData.email.trim()) {
      setValidationError("יש למלא את כל השדות כדי להמשיך.");
      return;
    }
    if (!contactData.agreed) {
      setValidationError("יש לאשר את תנאי הדיוור בוואטסאפ ובמייל כדי להתחיל.");
      return;
    }
    setValidationError("");
    setIsSubmittingLead(true);

    try {
      // Immediate submission of contact details even if the user exits mid-quiz
      // Aligned service parameter with the enum in Entities/Lead.txt to pass validation
      await base44.entities.Lead.create({
        name: contactData.name,
        phone: contactData.phone,
        email: contactData.email,
        service: "other",
        message: "התחיל מילוי שאלון התאמה לליווי. אישר דיוור בוואטסאפ ובמייל."
      });
    } catch (err) {
      console.error("Failed to submit initial questionnaire lead:", err);
    }

    setIsSubmittingLead(false);
    setCurrentStep(0); // Move to first question
  };

  const calculateTotalScore = (allAnswers) => {
    const rawScore = Object.values(allAnswers).reduce((sum, item) => sum + item.points, 0);
    // Scale score to naturally fall between 82 and 98 to validate all potential clients positive-wise
    return Math.round(82 + (rawScore / 100) * 16);
  };

  const submitCompletedQuiz = async (finalScore, finalAnswers) => {
    try {
      const summary = questions.map((q, idx) => {
        const ans = finalAnswers[idx];
        return `${q.id}. ${q.question}\nתשובה: ${ans ? ans.text : "לא נענה"}`;
      }).join("\n\n");

      // Submit completed answers as a secondary update to the captured lead
      // Aligned service parameter with the enum in Entities/Lead.txt to pass validation
      await base44.entities.Lead.create({
        name: contactData.name,
        phone: contactData.phone,
        email: contactData.email,
        service: "other",
        message: `בדיקת התאמה הושלמה בהצלחה!\n\nציון שקלול התאמה: ${finalScore}/100\n\nפירוט תשובות:\n${summary}`
      });
    } catch (err) {
      console.error("Failed to submit completed lead:", err);
    }
  };

  const toggleOption = (idx) => {
    const q = questions[currentStep];
    let next = selectedIndices.includes(idx)
      ? selectedIndices.filter(i => i !== idx)
      : [...selectedIndices, idx];

    setSelectedIndices(next);
  };

  const handleSelectOption = (value, points, text) => {
    const newAnswers = { 
      ...answers, 
      [currentStep]: { 
        value, 
        points, 
        text, 
        indices: [questions[currentStep].options.findIndex(o => o.value === value)] 
      } 
    };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const finalScore = calculateTotalScore(newAnswers);
      submitCompletedQuiz(finalScore, newAnswers);
      setShowResults(true);
    }
  };

  const handleContinueMulti = () => {
    const q = questions[currentStep];
    const selectedOpts = selectedIndices.map(i => q.options[i]);
    const rawPointsSum = selectedOpts.reduce((sum, opt) => sum + opt.points, 0);
    // Cap question score at 20 (each question has a max weight of 20)
    const points = Math.min(20, rawPointsSum);
    const text = selectedOpts.map(opt => opt.text).join(", ");

    const newAnswers = {
      ...answers,
      [currentStep]: {
        value: selectedOpts.map(opt => opt.value),
        points,
        text,
        indices: selectedIndices
      }
    };
    
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const finalScore = calculateTotalScore(newAnswers);
      submitCompletedQuiz(finalScore, newAnswers);
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const score = calculateTotalScore(answers);

  return (
    <section id="interactive-tools" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505] relative overflow-hidden" dir="rtl">
      {/* Autofill input text override */}
      <style>{`
        #interactive-tools input:-webkit-autofill,
        #interactive-tools input:-webkit-autofill:hover, 
        #interactive-tools input:-webkit-autofill:focus {
          -webkit-text-fill-color: #ffffff !important;
          -webkit-box-shadow: 0 0 0px 1000px #0f0d08 inset !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent" />
      
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black text-white">שאלון היכרות ובדיקת התאמה</h2>
          <p className="text-white/50 text-xs md:text-sm mt-2 max-w-lg mx-auto leading-relaxed">
            אנו ב-VOOM מאמינים בשותפות אמת ופוקוס מוחלט על מדד ה-ROI, ולכן איננו עובדים עם כל עסק. מלאו את האבחון הקצר לבדיקת התאמה מול מודל העבודה שלנו.
          </p>
        </div>

        <div className="glass-card rounded-[2rem] p-6 md:p-8 border border-white/5 bg-black/50 relative overflow-hidden max-w-2xl mx-auto">
          
          <AnimatePresence mode="wait">
            {currentStep === -1 ? (
              <motion.div
                key="contact-step"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-5 text-right"
              >
                <div className="pb-3 border-b border-white/5">
                  <h3 className="text-base md:text-lg font-black text-white leading-snug">
                    פתחו את שאלון ההיכרות ובדיקת ההתאמה
                  </h3>
                  <p className="text-white/40 text-xs mt-1">
                    הזינו פרטים קצרים כדי להתחיל בשאלון ולקבל תוצאת התאמה מיידית בסיום.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-white/70 text-xs font-bold mb-1.5">שם מלא *</label>
                    <input
                      type="text"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      placeholder="ישראל ישראלי"
                      className="w-full bg-[#0f0d08] border border-white/10 rounded-xl px-4 py-3 text-white text-xs md:text-sm focus:outline-none focus:border-[#d4a853] transition-colors text-right"
                      dir="rtl"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-xs font-bold mb-1.5">טלפון נייד *</label>
                    <input
                      type="tel"
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      placeholder="050-0000000"
                      className="w-full bg-[#0f0d08] border border-white/10 rounded-xl px-4 py-3 text-white text-xs md:text-sm focus:outline-none focus:border-[#d4a853] transition-colors text-left"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-xs font-bold mb-1.5">אימייל *</label>
                    <input
                      type="email"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-[#0f0d08] border border-white/10 rounded-xl px-4 py-3 text-white text-xs md:text-sm focus:outline-none focus:border-[#d4a853] transition-colors text-left"
                      dir="ltr"
                    />
                  </div>

                  <label className="flex items-start gap-2.5 cursor-pointer mt-2">
                    <input
                      type="checkbox"
                      checked={contactData.agreed}
                      onChange={(e) => setContactData({ ...contactData, agreed: e.target.checked })}
                      className="mt-1 accent-[#d4a853]"
                    />
                    <span className="text-[10px] md:text-xs text-white/50 leading-relaxed select-none">
                      אני מאשר קבלת תכנים, הצעות שיווקיות ועדכונים מ-VOOM בוואטסאפ ובמייל לצרכי החברה.
                    </span>
                  </label>
                </div>

                {validationError && (
                  <p className="text-rose-500 text-xs font-bold mt-2">{validationError}</p>
                )}

                <button
                  onClick={handleStartQuiz}
                  disabled={isSubmittingLead}
                  className="w-full py-3 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1c1407] font-black text-xs md:text-sm rounded-xl border border-[#d4a853]/45 shadow-[0_4px_15px_rgba(212,168,83,0.15)] flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 disabled:opacity-50 mt-4"
                >
                  {isSubmittingLead ? (
                    <span>פותח אבחון...</span>
                  ) : (
                    <>
                      <span>הזינו פרטים והתחילו בבדיקה</span>
                      <ArrowLeft className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.div>
            ) : !showResults ? (
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
                <div className="text-right">
                  <h3 className="text-base md:text-lg font-black text-white leading-snug">
                    {questions[currentStep].question}
                  </h3>
                  {questions[currentStep].multiSelect && (
                    <span className="text-[10px] text-[#d4a853] font-bold mt-1 block">ניתן לבחור מספר אפשרויות</span>
                  )}
                </div>

                {/* Options list */}
                <div className="space-y-2.5">
                  {questions[currentStep].options.map((option, idx) => {
                    const isSelected = selectedIndices.includes(idx);
                    const isMulti = questions[currentStep].multiSelect;

                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (isMulti) {
                            toggleOption(idx);
                          } else {
                            handleSelectOption(option.value, option.points, option.text);
                          }
                        }}
                        className={`w-full text-right p-3.5 rounded-xl text-white text-xs md:text-sm font-medium transition-all duration-200 flex items-center justify-between group cursor-pointer border ${
                          isSelected 
                            ? "bg-[#d4a853]/10 border-[#d4a853] shadow-[0_0_15px_rgba(212,168,83,0.08)]" 
                            : "bg-white/3 border-white/5 hover:bg-[#d4a853]/5 hover:border-[#d4a853]/30"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {isMulti && (
                            <div className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] transition-all shrink-0 ${
                              isSelected 
                                ? "bg-[#d4a853] border-[#d4a853] text-[#1c1407] font-black" 
                                : "border-white/20 bg-white/5"
                            }`}>
                              {isSelected && "✓"}
                            </div>
                          )}
                          <span>{option.text}</span>
                        </div>
                        {!isMulti && (
                          <ArrowLeft className="w-3.5 h-3.5 text-white/30 group-hover:text-[#d4a853] group-hover:translate-x-[-3px] transition-all flex-shrink-0 mr-3" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Continue button for multi-select questions */}
                {questions[currentStep].multiSelect && (
                  <button
                    onClick={handleContinueMulti}
                    disabled={selectedIndices.length === 0}
                    className="w-full py-3 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1c1407] font-black text-xs md:text-sm rounded-xl border border-[#d4a853]/45 shadow-[0_4px_15px_rgba(212,168,83,0.12)] flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 disabled:opacity-50 mt-4"
                  >
                    <span>המשך לשאלה הבאה</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                )}

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
                  <h3 className="text-xl md:text-2xl font-black text-white">תוצאות בדיקת ההתאמה – VOOM</h3>
                </div>

                {/* Score Layout */}
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="relative w-28 h-28 flex items-center justify-center rounded-full border border-white/10 bg-black/60 shadow-[0_0_25px_rgba(212,168,83,0.03)] mb-4">
                    <div className="absolute inset-1.5 rounded-full border border-dashed border-[#d4a853]/20 animate-spin-slow" />
                    <div className="text-center z-10">
                      <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f0d78a] to-[#d4a853]">{score}</span>
                      <span className="text-white/40 block text-[9px] font-bold">ציון התאמה</span>
                    </div>
                  </div>
                  
                  <h4 className="text-sm font-bold text-white mb-2">
                    {score >= 90 ? (
                      <span className="text-green-400 flex items-center justify-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        נמצאה התאמה יוצאת מן הכלל לעבודה משותפת!
                      </span>
                    ) : (
                      <span className="text-amber-300 flex items-center justify-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        נמצאה התאמה גבוהה לעבודה משותפת!
                      </span>
                    )}
                  </h4>
                  
                  <p className="text-white/60 text-xs leading-relaxed max-w-md mx-auto">
                    {score >= 90 ? (
                      "מדהים! הנתונים שלכם מצביעים על שאיפות צמיחה יוצאות דופן ומוכנות גבוהה לשותפות אמת. אנו ממוקדים בתוצאות, בשותפות מלאה ובבניית מערכות המביאות ROI גבוה. הפרטים שלכם ותשובות האפיון הועברו בהצלחה לצוות האסטרטגיה של VOOM. ניצור עמכם קשר טלפוני בהקדם לתיאום פגישת עבודה."
                    ) : (
                      "האפיון שלכם מראה על פוטנציאל רב ורצון לייעל ולשדרג את השיווק הדיגיטלי בעסק. הפרטים שלכם ותשובות האפיון התקבלו בהצלחה במערכת! ניצור עמכם קשר טלפוני בהקדם כדי לתכנן יחד את שדרוג העסק."
                    )}
                  </p>
                </div>

                {/* Confirm banner */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl text-center max-w-md mx-auto">
                  <span className="text-emerald-400 text-xs md:text-sm font-black block">✓ הפרטים שלכם התקבלו בהצלחה!</span>
                  <span className="text-white/50 text-[11px] md:text-xs mt-1 block">אין צורך להשאיר פרטים נוספים באתר, ניצור אתכם קשר בהקדם.</span>
                </div>

                {/* CTA Action */}
                <div className="pt-2 flex justify-center">
                  <button
                    onClick={() => document.getElementById("packages-section")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-6 py-3 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1c1407] font-black text-xs md:text-sm rounded-xl shadow-[0_4px_12px_rgba(212,168,83,0.15)] hover:shadow-[0_6px_20px_rgba(212,168,83,0.35)] transition-all duration-300 cursor-pointer relative overflow-hidden after:absolute after:inset-y-0 after:-left-[100%] after:w-[50%] after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:skew-x-[-25deg] hover:after:left-[150%] after:transition-all after:duration-[1000ms] after:ease-in-out border border-[#d4a853]/40"
                  >
                    צפו בחבילות השירות שלנו
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
