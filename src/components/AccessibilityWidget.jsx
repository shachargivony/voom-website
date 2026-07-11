import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, ZoomIn, ZoomOut, Type, Link, Sparkles, AlertCircle, FileText } from "lucide-react";

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDeclaration, setShowDeclaration] = useState(false);
  const [settings, setSettings] = useState({
    monochrome: false,
    highContrast: false,
    readableFont: false,
    highlightLinks: false,
    stopAnimations: false,
    fontSize: "normal", // 'normal', 'large', 'xlarge'
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const setFontSizeSetting = (size) => {
    setSettings((prev) => ({ ...prev, fontSize: size }));
  };

  const resetSettings = () => {
    setSettings({
      monochrome: false,
      highContrast: false,
      readableFont: false,
      highlightLinks: false,
      stopAnimations: false,
      fontSize: "normal",
    });
  };

  // Custom event listener for footer trigger
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setShowDeclaration(true);
    };
    window.addEventListener("open-accessibility-declaration", handleOpen);
    return () => window.removeEventListener("open-accessibility-declaration", handleOpen);
  }, []);

  // Sync state to body classes
  useEffect(() => {
    const body = document.body;
    
    // Monochrome
    if (settings.monochrome) body.classList.add("accessibility-monochrome");
    else body.classList.remove("accessibility-monochrome");

    // High Contrast
    if (settings.highContrast) {
      body.classList.add("accessibility-high-contrast");
      body.classList.remove("accessibility-monochrome"); // Contrast overrides gray
      setSettings(prev => ({ ...prev, monochrome: false }));
    } else {
      body.classList.remove("accessibility-high-contrast");
    }

    // Readable Font
    if (settings.readableFont) body.classList.add("accessibility-readable-font");
    else body.classList.remove("accessibility-readable-font");

    // Highlight Links
    if (settings.highlightLinks) body.classList.add("accessibility-highlight-links");
    else body.classList.remove("accessibility-highlight-links");

    // Stop Animations
    if (settings.stopAnimations) body.classList.add("accessibility-stop-animations");
    else body.classList.remove("accessibility-stop-animations");

    // Font Sizes
    body.classList.remove("accessibility-zoom-large", "accessibility-zoom-xlarge");
    if (settings.fontSize === "large") body.classList.add("accessibility-zoom-large");
    if (settings.fontSize === "xlarge") body.classList.add("accessibility-zoom-xlarge");

  }, [settings]);

  return (
    <>
      {/* Global CSS Injector for Accessibility Overrides */}
      <style>{`
        /* Focus ring overrides for keyboard navigation - WCAG 2.0 AA standard */
        *:focus-visible {
          outline: 3px solid #d4a853 !important;
          outline-offset: 3px !important;
        }
        body.accessibility-monochrome {
          filter: grayscale(100%) !important;
        }
        body.accessibility-high-contrast {
          background-color: #000000 !important;
          color: #ffff00 !important;
        }
        body.accessibility-high-contrast * {
          background-color: #000000 !important;
          color: #ffff00 !important;
          border-color: #ffff00 !important;
          box-shadow: none !important;
          text-shadow: none !important;
        }
        body.accessibility-high-contrast a,
        body.accessibility-high-contrast button {
          color: #00ffff !important;
          text-decoration: underline !important;
          border: 1px solid #00ffff !important;
        }
        body.accessibility-high-contrast svg {
          stroke: #ffff00 !important;
          fill: none !important;
        }
        body.accessibility-readable-font * {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif !important;
        }
        body.accessibility-highlight-links a {
          outline: 2px dashed #d4a853 !important;
          outline-offset: 3px !important;
          background-color: rgba(212, 168, 83, 0.25) !important;
          color: #ffffff !important;
          text-decoration: underline !important;
          font-weight: bold !important;
        }
        body.accessibility-stop-animations * {
          animation: none !important;
          transition: none !important;
          transform: none !important;
        }
        body.accessibility-zoom-large {
          font-size: 18px !important;
        }
        body.accessibility-zoom-large p,
        body.accessibility-zoom-large span,
        body.accessibility-zoom-large li,
        body.accessibility-zoom-large a {
          font-size: 1.15rem !important;
          line-height: 1.6 !important;
        }
        body.accessibility-zoom-xlarge {
          font-size: 21px !important;
        }
        body.accessibility-zoom-xlarge p,
        body.accessibility-zoom-xlarge span,
        body.accessibility-zoom-xlarge li,
        body.accessibility-zoom-xlarge a {
          font-size: 1.3rem !important;
          line-height: 1.7 !important;
        }
        /* Skip to content link for keyboard users */
        .skip-to-content {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          background: #d4a853;
          color: #000;
          padding: 8px 16px;
          z-index: 9999;
          border-radius: 0 0 8px 8px;
          font-weight: bold;
          transition: top 0.2s;
        }
        .skip-to-content:focus {
          top: 0;
        }
      `}</style>

      {/* Keyboard Accessibility: Skip link */}
      <a href="#contact" className="skip-to-content">דלג לתוכן העמוד / יצירת קשר</a>

      {/* Floating Toggle Button (Bottom Left, stacked above Tachles Button) */}
      <div className="fixed bottom-24 left-6 z-50 select-none">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="פתח תפריט נגישות"
          className="w-12 h-12 rounded-full bg-[#d4a853] text-[#1c1407] hover:bg-[#e6bb67] shadow-[0_4px_15px_rgba(212,168,83,0.35)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <Eye className="w-6 h-6 text-[#1c1407]" />
        </button>
      </div>

      {/* Accessibility Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-start pointer-events-none select-none" dir="rtl">
            {/* Backdrop click to close */}
            <div 
              className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Container */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-80 sm:w-96 bg-[#0c0c0c] border-e border-white/5 h-full shadow-[5px_0_30px_rgba(0,0,0,0.5)] flex flex-col justify-between pointer-events-auto z-10 p-6"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-6">
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-[#d4a853]" />
                    <h2 className="text-lg font-black text-white">התאמות נגישות</h2>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Option Groups */}
                <div className="space-y-6">
                  {/* Size adjustments */}
                  <div>
                    <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">גודל הטקסט</h3>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setFontSizeSetting("normal")}
                        className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                          settings.fontSize === "normal"
                            ? "bg-[#d4a853] text-[#1c1407] border-[#d4a853]"
                            : "bg-white/3 border-white/5 text-white/80 hover:bg-white/5"
                        }`}
                      >
                        רגיל
                      </button>
                      <button
                        onClick={() => setFontSizeSetting("large")}
                        className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer flex items-center justify-center gap-1 ${
                          settings.fontSize === "large"
                            ? "bg-[#d4a853] text-[#1c1407] border-[#d4a853]"
                            : "bg-white/3 border-white/5 text-white/80 hover:bg-white/5"
                        }`}
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        גדול
                      </button>
                      <button
                        onClick={() => setFontSizeSetting("xlarge")}
                        className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer flex items-center justify-center gap-1 ${
                          settings.fontSize === "xlarge"
                            ? "bg-[#d4a853] text-[#1c1407] border-[#d4a853]"
                            : "bg-white/3 border-white/5 text-white/80 hover:bg-white/5"
                        }`}
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        ענק
                      </button>
                    </div>
                  </div>

                  {/* Contrast and visual adjustments */}
                  <div>
                    <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">ניגודיות ומראה</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => toggleSetting("monochrome")}
                        className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                          settings.monochrome
                            ? "bg-[#d4a853] text-[#1c1407] border-[#d4a853]"
                            : "bg-white/3 border-white/5 text-white/80 hover:bg-white/5"
                        }`}
                      >
                        <span>גווני אפור</span>
                      </button>
                      <button
                        onClick={() => toggleSetting("highContrast")}
                        className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                          settings.highContrast
                            ? "bg-[#d4a853] text-[#1c1407] border-[#d4a853]"
                            : "bg-white/3 border-white/5 text-white/80 hover:bg-white/5"
                        }`}
                      >
                        <span>ניגודיות גבוהה</span>
                      </button>
                    </div>
                  </div>

                  {/* Text features */}
                  <div>
                    <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">עזרי קריאה</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => toggleSetting("readableFont")}
                        className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                          settings.readableFont
                            ? "bg-[#d4a853] text-[#1c1407] border-[#d4a853]"
                            : "bg-white/3 border-white/5 text-white/80 hover:bg-white/5"
                        }`}
                      >
                        <Type className="w-3.5 h-3.5 shrink-0" />
                        <span>פונט קריא</span>
                      </button>
                      <button
                        onClick={() => toggleSetting("highlightLinks")}
                        className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                          settings.highlightLinks
                            ? "bg-[#d4a853] text-[#1c1407] border-[#d4a853]"
                            : "bg-white/3 border-white/5 text-white/80 hover:bg-white/5"
                        }`}
                      >
                        <Link className="w-3.5 h-3.5 shrink-0" />
                        <span>הדגשת קישורים</span>
                      </button>
                    </div>
                  </div>

                  {/* Performance & Motion */}
                  <div>
                    <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">אנימציות וריצודים</h3>
                    <button
                      onClick={() => toggleSetting("stopAnimations")}
                      className={`w-full py-2.5 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        settings.stopAnimations
                          ? "bg-[#d4a853] text-[#1c1407] border-[#d4a853]"
                          : "bg-white/3 border-white/5 text-white/80 hover:bg-white/5"
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span>עצירת אנימציות וריצודים</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <button
                  onClick={() => setShowDeclaration(true)}
                  className="w-full py-2.5 bg-white/3 hover:bg-white/6 text-white text-xs font-bold rounded-xl border border-white/5 hover:border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#d4a853]" />
                  <span>הצהרת נגישות של האתר</span>
                </button>
                <button
                  onClick={resetSettings}
                  className="w-full py-2.5 bg-[#d4a853]/10 hover:bg-[#d4a853]/15 text-[#d4a853] text-xs font-bold rounded-xl border border-[#d4a853]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>איפוס הגדרות נגישות</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Accessibility Declaration Modal */}
      <AnimatePresence>
        {showDeclaration && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md" dir="rtl">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0c0c0c] border border-white/10 rounded-[2rem] max-w-xl w-full p-6 md:p-8 max-h-[85vh] overflow-y-auto flex flex-col justify-between"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-6">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#d4a853]" />
                  <h2 className="text-xl font-black text-white">הצהרת נגישות – VOOM</h2>
                </div>
                <button 
                  onClick={() => setShowDeclaration(false)}
                  className="p-1 text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content (Hebrew accessibility declaration matching Israeli regulation 35) */}
              <div className="text-white/80 text-xs md:text-sm space-y-4 leading-relaxed pr-1 select-text">
                <p>
                  סוכנות <strong>VOOM</strong> (העוסקת בשירותי קריאייטיב, קופירייטינג, בניית אתרים ואוטומציה לעסקים) רואה חשיבות רבה במתן שירות שוויוני, נגיש ומכבד לכלל הגולשים באתר, כולל אנשים עם מוגבלות.
                </p>
                <p>
                  האתר נבנה ומתוחזק תוך התחשבות מלאה בהנחיות הנגישות לתוכן אינטרנט של ה-W3C (הנחיות WCAG 2.0 ברמת התאמה AA), ובהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע״ג-2013.
                </p>
                
                <h3 className="font-bold text-white text-sm pt-2">אמצעי הנגישות המוטמעים באתר:</h3>
                <ul className="list-disc pr-5 space-y-1">
                  <li><strong>תאימות מקלדת מלאה:</strong> תמיכה בניווט באתר באמצעות מקש ה-Tab ומקשי החצים.</li>
                  <li><strong>קישור דילוג (Skip Link):</strong> אפשרות לגולשים המנווטים במקלדת לדלג ישירות לתוכן העמוד ויצירת הקשר.</li>
                  <li><strong>סרגל נגישות צף:</strong> המאפשר התאמת גודל הגופן, שינוי ניגודיות למונוכרום או שחור-צהוב, הדגשת קישורים, שימוש בפונט קריא, ועצירת תנועות/אנימציות.</li>
                  <li><strong>ניגודיות צבעים:</strong> התאמת קונטרסט ברמה גבוהה לגלישה נוחה וקריאה.</li>
                  <li><strong>תאימות לקוראי מסך:</strong> מבנה סמנטי תקין ותגיות ARIA מובנות בטפסים ובכפתורים.</li>
                </ul>

                <h3 className="font-bold text-white text-sm pt-2">פטורים והתאמות נגישות לעסק קטן:</h3>
                <p>
                  עקב היותנו עסק המנוהל כעוסק פטור / מורשה עם מחזור שנתי הנמוך מ-300 אלף שקלים, חלים עלינו חלק מתנאי הפטור הרשמיים בחוק בכל הנוגע לחובות הנגשה מחמירות מסוימות. עם זאת, בחרנו להטמיע סרגל נגישות ואמצעים מלאים כדי לאפשר גלישה נגישה לכולם.
                </p>

                <h3 className="font-bold text-white text-sm pt-2">פרטי רכז הנגישות ודרכי התקשרות:</h3>
                <p>
                  נתקלתם בבעיית נגישות באתר? נשמח לעזור ולתקן בהקדם האפשרי.
                </p>
                <div className="bg-white/3 border border-white/5 p-4 rounded-xl space-y-2">
                  <div><strong>רכז נגישות בעסק:</strong> שירות לקוחות VOOM</div>
                  <div><strong>וואטסאפ / פניות:</strong> פנייה ישירה דרך כפתור הוואטסאפ המהיר באתר</div>
                  <div><strong>מייל לפניות נגישות:</strong> <a href="mailto:info@voom-media.com" className="text-[#d4a853] hover:underline">info@voom-media.com</a></div>
                </div>
                <p className="text-[10px] text-white/40 pt-2 text-center">
                  הצהרת הנגישות עודכנה לאחרונה בתאריך 11 ביולי 2026.
                </p>
              </div>

              {/* Modal Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setShowDeclaration(false)}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1c1407] font-bold text-xs rounded-xl shadow-[0_4px_12px_rgba(212,168,83,0.15)] transition-all duration-300 cursor-pointer"
                >
                  סגור הצהרה
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
