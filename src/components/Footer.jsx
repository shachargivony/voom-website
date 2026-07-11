import React from "react";
import logo from "../../Logo.png";

export default function Footer() {
  const handleNav = (anchorId) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-black border-t border-white/5 py-16 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
        {/* Brand Block */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="VOOM Logo" 
              className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(212,168,83,0.3)]"
              loading="lazy"
            />
            <span className="text-xl font-black tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-[#f0d78a] to-[#d4a853] uppercase font-sans">
              VOOM
            </span>
          </div>
          <p className="text-white/50 text-xs md:text-sm leading-relaxed">
            מעטפת שיווק 360 מעלות לעסקים המבוססת על תוצאות, אוטומציה מתקדמת ומיתוג יוקרתי. מלווים אתכם כל הדרך לצמיחה עסקית יציבה.
          </p>
        </div>

        {/* Services Block */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">שירותים</h4>
          <ul className="space-y-2.5 text-xs md:text-sm text-white/50">
            <li>
              <button onClick={() => handleNav("services")} className="hover:text-[#d4a853] transition-colors">
                שיווק ממוקד בוואטסאפ
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("services")} className="hover:text-[#d4a853] transition-colors">
                קמפיינים ממומנים ברשתות
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("services")} className="hover:text-[#d4a853] transition-colors">
                בניית אתרים ממירי תנועה
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("services")} className="hover:text-[#d4a853] transition-colors">
                עיצוב מותג ומיתוג מלא
              </button>
            </li>
          </ul>
        </div>

        {/* Legal & Compliance Block */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">משפטי ונגישות</h4>
          <ul className="space-y-2.5 text-xs md:text-sm text-white/50">
            <li>
              <a href="#terms" className="hover:text-[#d4a853] transition-colors">
                תנאי שימוש ותנאי התקשרות
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-[#d4a853] transition-colors">
                מדיניות פרטיות
              </a>
            </li>
            <li>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('open-accessibility-declaration'));
                }}
                className="hover:text-[#d4a853] transition-colors cursor-pointer bg-transparent border-none p-0 text-white/50 text-xs md:text-sm text-right"
              >
                הצהרת נגישות
              </button>
            </li>
            <li>
              <a href="#disclaimer" className="hover:text-[#d4a853] transition-colors">
                גילוי נאות
              </a>
            </li>
          </ul>
        </div>

        {/* Contact info Block */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">צרו קשר</h4>
          <ul className="space-y-2.5 text-xs md:text-sm text-white/50">
            <li>
              <a href="mailto:contact@voom-media.com" className="hover:text-[#d4a853] transition-colors">
                contact@voom-media.com
              </a>
            </li>
            <li dir="ltr" className="text-right">054-809-0469</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright line */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-white/40 text-xs">
          © {new Date().getFullYear()} VOOM. כל הזכויות שמורות.
        </span>
      </div>
    </footer>
  );
}
