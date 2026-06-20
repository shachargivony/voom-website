import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, Sparkles, TrendingUp, Info } from "lucide-react";

// Helper component for count-up animation in calculator results
function CounterValue({ value, suffix = "", duration = 1.0 }) {
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Math.floor(value);
    if (start === end) {
      setDisplayVal(end);
      return;
    }

    const totalMs = duration * 1000;
    const stepTime = Math.max(Math.floor(totalMs / Math.max(end - start, 1)), 10);
    const increment = Math.ceil((end - start) / (totalMs / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setDisplayVal(end);
      } else {
        setDisplayVal(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span>
      {displayVal.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function InteractiveSection() {
  // Calculator States
  const [leads, setLeads] = useState(100);
  const [closeRate, setCloseRate] = useState(5); // in %
  const [targetCloseRate, setTargetCloseRate] = useState(10); // in %
  const [clientValue, setClientValue] = useState(3000); // in ILS

  // Adjust target closing rate if current closing rate is increased
  useEffect(() => {
    if (closeRate >= targetCloseRate) {
      setTargetCloseRate(Math.min(closeRate + 5, 50));
    }
  }, [closeRate]);

  // Calculations
  const currentClients = Math.floor((leads * closeRate) / 100);
  const currentRevenue = currentClients * clientValue;

  const simulatedClients = Math.floor((leads * targetCloseRate) / 100);
  const simulatedRevenue = simulatedClients * clientValue;
  
  const monthlyDiff = simulatedRevenue - currentRevenue;
  const annualDiff = monthlyDiff * 12;

  return (
    <section id="interactive-tools" className="py-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a] relative overflow-hidden" dir="rtl">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4a853]/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white">סימולטור הכנסות ושיפור המרה</h2>
          <p className="text-white/50 text-sm md:text-base mt-2 max-w-xl mx-auto">
            בדוק כיצד שינוי מבוקר באחוזי הסגירה ובכמות הלידים משפיע על השורה התחתונה בעסק שלך.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Inputs panel */}
          <div className="lg:col-span-6 glass-card rounded-[2rem] p-6 md:p-8 border border-white/5 bg-black/40 flex flex-col justify-between space-y-6">
            <h3 className="text-xl font-black text-white border-b border-white/5 pb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#d4a853]" />
              משתני הסימולציה שלך
            </h3>

            {/* Slider 1: Leads */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/65 font-bold">כמות לידים חודשית:</span>
                <span className="text-[#d4a853] font-black text-sm">{leads} לידים</span>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={leads}
                onChange={(e) => setLeads(Number(e.target.value))}
                className="w-full accent-[#d4a853] bg-white/10 rounded-lg appearance-none h-1.5 cursor-pointer"
              />
            </div>

            {/* Slider 2: Current Closing Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/65 font-bold">אחוז סגירה נוכחי:</span>
                <span className="text-[#d4a853] font-black text-sm">{closeRate}% סגירה</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full accent-[#d4a853] bg-white/10 rounded-lg appearance-none h-1.5 cursor-pointer"
              />
            </div>

            {/* Slider 3: Target/Improved Closing Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/65 font-bold">יעד אחוז סגירה משופר:</span>
                <span className="text-[#d4a853] font-black text-sm">{targetCloseRate}% סגירה</span>
              </div>
              <input
                type="range"
                min={closeRate + 1}
                max="50"
                step="1"
                value={targetCloseRate}
                onChange={(e) => setTargetCloseRate(Number(e.target.value))}
                className="w-full accent-[#d4a853] bg-white/10 rounded-lg appearance-none h-1.5 cursor-pointer"
              />
            </div>

            {/* Slider 4: Client Value */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/65 font-bold">שווי לקוח/עסקה ממוצע:</span>
                <span className="text-[#d4a853] font-black text-sm">{clientValue.toLocaleString()} ₪</span>
              </div>
              <input
                type="range"
                min="500"
                max="30000"
                step="500"
                value={clientValue}
                onChange={(e) => setClientValue(Number(e.target.value))}
                className="w-full accent-[#d4a853] bg-white/10 rounded-lg appearance-none h-1.5 cursor-pointer"
              />
            </div>

            <div className="flex items-start gap-2 bg-[#d4a853]/5 border border-[#d4a853]/15 p-3.5 rounded-xl">
              <Info className="w-4 h-4 text-[#d4a853] flex-shrink-0 mt-0.5" />
              <p className="text-[10px] sm:text-xs text-white/50 leading-relaxed pr-1">
                מערכות אוטומציה של וואטסאפ וניהול CRM חכם מאפשרות לעסקים לייעל את המענה הראשוני לליד, ובכך להעלות את אחוזי הסגירה שלהם ללא הגדלת תקציב הפרסום.
              </p>
            </div>
          </div>

          {/* Outputs panel */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            {/* Revenue comparison */}
            <div className="glass-card rounded-[2rem] p-6 border border-white/5 bg-black/60 backdrop-blur-md flex-1 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4 divide-x divide-x-reverse divide-white/5 text-center">
                <div className="px-2">
                  <span className="text-[10px] text-white/40 font-bold block mb-1">הכנסה חודשית נוכחית</span>
                  <div className="text-xl md:text-2xl font-black text-white/80">
                    <CounterValue value={currentRevenue} suffix=" ₪" />
                  </div>
                  <span className="text-[9px] text-white/30 block mt-1">{currentClients} לקוחות חדשים</span>
                </div>
                <div className="px-2">
                  <span className="text-[10px] text-[#d4a853] font-black block mb-1">פוטנציאל הכנסה חדש</span>
                  <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#f0d78a] to-[#d4a853]">
                    <CounterValue value={simulatedRevenue} suffix=" ₪" />
                  </div>
                  <span className="text-[9px] text-[#d4a853]/60 block mt-1 font-bold">{simulatedClients} לקוחות חדשים</span>
                </div>
              </div>
            </div>

            {/* Impact block */}
            <div className="glass-card rounded-[2rem] p-6 border border-[#d4a853]/30 bg-gradient-to-br from-[#1a1710] to-[#0a0a0a] flex-1 flex flex-col justify-between text-center relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#d4a853]/3 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-bold text-white/50 uppercase tracking-wider block">פוטנציאל תוספת רווח שנתי לעסק שלך</span>
              
              <div className="my-4 text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#f0d78a] to-[#d4a853]">
                + <CounterValue value={annualDiff} suffix=" ₪" />
              </div>

              <p className="text-xs text-white/40 leading-relaxed max-w-sm mx-auto">
                הגדלה ממוקדת של אחוזי הסגירה היא המנוף המהיר והרווחי ביותר לצמיחה של כל עסק המקבל פניות דיגיטליות.
              </p>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-6 w-full max-w-xs mx-auto h-11 bg-white/5 border border-[#d4a853]/30 text-[#d4a853] hover:bg-[#d4a853] hover:text-black font-extrabold text-xs rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(212,168,83,0.05)] cursor-pointer"
              >
                <TrendingUp className="w-3.5 h-3.5" />
                בוא נבנה תוכנית עבודה לעסק שלך
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer text */}
        <div className="mt-8 text-center">
          <p className="text-[10px] text-white/30 leading-relaxed">
            * מחשבון זה מיועד לצורך סימולציה, המחשה ותכנון בלבד, ואינו מהווה התחייבות או מצג שווא לתוצאות עסקיות, כמות לידים, הכנסות או אחוזי סגירה מובטחים. כל עסק וביצועיו הייחודיים.
          </p>
        </div>
      </div>
    </section>
  );
}
