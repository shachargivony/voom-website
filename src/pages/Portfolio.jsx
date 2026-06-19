import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, Palette, Layers, ChevronLeft, ChevronRight, Image } from "lucide-react";
import blastit1 from "../blastit1.png";
import blastit2 from "../blastit2.png";
import blastit3 from "../blastit3.png";
import blastit4 from "../blastit4.png";
import swish1 from "../swish1.png";
import swish2 from "../swish2.png";
import swish3 from "../swish3.png";
import swish4 from "../swish4.png";
import swish5 from "../swish5.png";
import nofshimLogo from "../nofshim_logo.png";
import ocho1 from "../ocho1.png";
import ocho2 from "../ocho2.png";
import ocho3 from "../ocho3.png";
import ocho4 from "../ocho4.jpg";
import apex1 from "../apex1.png";
import apex2 from "../apex2.png";
import psifas from "../psifas.png";

// ═══════════════════════════════════════════════
// DATA — הוסף כאן פרויקטים חדשים
// ═══════════════════════════════════════════════

const CATEGORIES = {
  all: "הכל",
  websites: "אתרים ודפי נחיתה",
  logos: "לוגואים ומיתוג",
  systems: "מערכות ואוטומציה",
  creatives: "קריאייטיב ופרסום",
};

const projects = [
  {
    id: 1,
    category: "websites",
    title: "פלטפורמת שיווק ואוטומציה BlastIt",
    client: "לקוח: BlastIt",
    desc: "עיצוב ופיתוח פלטפורמה שיווקית מתקדמת 360° מבוססת React. המערכת כוללת ממשק ניהול קמפיינים בוואטסאפ, בניית צ'אטבוטים חכמים, ניתוח נתונים מתקדם ודפי נחיתה מהירים במיוחד לשיפור המרות.",
    tags: ["React", "Automation", "WhatsApp API", "Landing Page", "BI Dashboards"],
    images: [blastit1, blastit2, blastit3, blastit4],
    link: null,
  },
  {
    id: 2,
    category: "creatives",
    title: "עיצוב קריאייטיבים לקמפיינים - SWISH",
    client: "לקוח: SWISH",
    desc: "סדרת מודעות וקריאייטיבים מעוצבים לקמפיינים ממומנים ברשתות החברתיות. העיצובים מותאמים לקהל היעד של SWISH, שמים דגש על העברת מסרים חדים, מיתוג בולט והנעה חזקה לפעולה המביאה לשיעורי הקלקה (CTR) גבוהים.",
    tags: ["Graphic Design", "Creative", "Social Media", "Advertising"],
    images: [swish1, swish2, swish3, swish4, swish5],
    link: null,
  },
  {
    id: 3,
    category: "logos",
    title: "עיצוב לוגו ומותג - נופשים בסטייל",
    client: "לקוח: נופשים בסטייל",
    desc: "עיצוב לוגו יוקרתי וזהות מותגית שלמה לחברת התיירות 'נופשים בסטייל'. הלוגו משלב אלמנטים של תעופה, גלובוס וגלי ים המביעים חופש, יוקרה וסטייל ייחודי.",
    tags: ["Logo Design", "Branding", "Tourism", "Vector Art"],
    images: [nofshimLogo],
    link: null,
  },
  {
    id: 4,
    category: "websites",
    title: "פלטפורמת OCHO — עולם של חוויות לילדים",
    client: "לקוח: OCHO עולם ילדים",
    desc: "עיצוב ופיתוח פלטפורמה אינטראקטיבית וצבעונית לילדים המשלבת משחקי הערכה, ערכות ספרים דיגיטליות ומסעות הרפתקה אינטראקטיביים. האתר נבנה עם דגש על נגישות גבוהה, עיצוב דמויות מונפשות, חווית משתמש משחקית (Gamification) וטעינה מהירה.",
    tags: ["React", "Gamification", "UX/UI Design", "Interactive", "Responsive Design"],
    images: [ocho4, ocho1, ocho2, ocho3],
    link: null,
  },
  {
    id: 5,
    category: "websites",
    title: "אתר תדמית ומכירות - APEX FITNESS",
    client: "לקוח: APEX FITNESS",
    desc: "עיצוב ופיתוח אתר תדמית מתקדם ומעוצב לסטודיו האימונים APEX. האתר כולל אזור מוצרים ותוכניות אימון דיגיטליות, הצגת מחירון אינטראקטיבי מותאם לכל סוגי האימונים (אישי, זוגות, קבוצות קטנות), ומערכת קריאה לפעולה מהירה לשיעורי ניסיון.",
    tags: ["React", "CSS", "Responsive Design", "Premium UI"],
    images: [apex1, apex2],
    link: null,
  },
  {
    id: 6,
    category: "websites",
    title: "אתר תדמית - פסיפס סוכנות לביטוח",
    client: "לקוח: פסיפס סוכנות לביטוח",
    desc: "עיצוב ופיתוח אתר תדמית מקצועי ומודרני לסוכנות הביטוח 'פסיפס'. האתר שוכן בסביבה מאובטחת, מציג את מגוון פתרונות הביטוח הכללי ללקוחות פרטיים ועסקיים, ומעוצב עם קווי מותג נקיים, תמונות רקע איכותיות וטפסים מובנים ליצירת קשר מהיר.",
    tags: ["HTML5", "Tailwind CSS", "React", "Insurance UI"],
    images: [psifas],
    link: null,
  }
];

// ═══════════════════════════════════════════════
// PROJECT CARD
// ═══════════════════════════════════════════════

function ProjectCard({ project, idx }) {
  const [hovered, setHovered] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const hasMultipleImages = project.images && project.images.length > 0;
  const currentImage = hasMultipleImages ? project.images[currentImgIndex] : project.img;
  
  const isWebsite = project.category === "websites";
  const isCreative = project.category === "creatives";

  // Auto-slide effect when not hovered
  useEffect(() => {
    if (!hasMultipleImages || hovered) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [hasMultipleImages, hovered, project.images]);

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const selectImage = (e, index) => {
    e.stopPropagation();
    setCurrentImgIndex(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group glass-card rounded-[2rem] border border-white/5 hover:border-[#d4a853]/45 transition-all duration-500 overflow-hidden flex flex-col"
    >
      {/* Image Slider */}
      <div className="relative overflow-hidden bg-[#0a0a0a] flex items-center justify-center p-6 border-b border-white/5 min-h-[360px] md:min-h-[400px]">
        
        {isWebsite ? (
          <div className="flex flex-col items-center w-full max-w-[400px] md:max-w-[430px] select-none">
            {/* Monitor Body */}
            <div className="w-full bg-[#181818] rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(212,168,83,0.03)] overflow-hidden flex flex-col p-1 relative z-10">
              {/* Browser Header */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0c0c0c] border-b border-white/5 rounded-t-lg">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                  <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 mx-4 bg-white/5 rounded px-3 py-0.5 text-[9px] text-white/30 text-center truncate" dir="ltr">
                  https://www.{project.client.replace("לקוח: ", "").toLowerCase().replace(/\s+/g, "")}.co.il
                </div>
              </div>
              {/* Viewport */}
              <div className="relative bg-[#080808] w-full aspect-[16/10] overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImgIndex}
                    src={currentImage}
                    alt={`${project.title} - ${currentImgIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover object-top"
                  />
                </AnimatePresence>
                {/* Glossy Reflection Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/2 to-transparent z-10" />
              </div>
            </div>
            {/* Monitor Stand */}
            <div className="w-10 h-5 bg-gradient-to-b from-[#181818] to-[#0a0a0a] border-x border-white/5 mt-[-1px] z-0" />
            <div className="w-28 h-1.5 bg-gradient-to-r from-[#d4a853] via-[#f0d78a] to-[#b8934a] rounded-t shadow-lg z-0" />
          </div>
        ) : isCreative ? (
          <div className="w-full max-w-[280px] md:max-w-[300px] bg-[#0c0c0c] rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col select-none">
            {/* Post Header */}
            <div className="flex items-center justify-between p-3 border-b border-white/5">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#f0d78a] to-[#d4a853] flex items-center justify-center text-[10px] font-black text-black">
                  V
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[10px] font-black text-white leading-tight">VOOM Marketing</span>
                  <span className="text-[8px] text-white/40 leading-none">Sponsored</span>
                </div>
              </div>
              <span className="text-white/40 text-xs font-bold">•••</span>
            </div>
            {/* Post Media Viewport */}
            <div className="relative bg-black w-full aspect-square overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImgIndex}
                  src={currentImage}
                  alt={`${project.title} - ${currentImgIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            {/* Post Footer (Mock Interactions) */}
            <div className="p-3 space-y-2 border-t border-white/5">
              <div className="flex items-center gap-3 text-white/60 text-xs">
                <span>❤️ 242 likes</span>
                <span>💬 12 comments</span>
              </div>
              <p className="text-[9px] text-white/50 leading-relaxed text-right">
                <span className="font-bold text-white ml-1">Swish</span>
                מחפשים פתרון איכותי ומעוצב לעסק שלכם? קחו צעד קדימה! 🚀
              </p>
            </div>
          </div>
        ) : (
          <div className="relative p-2 bg-gradient-to-b from-[#1e1910] to-[#0c0a06] rounded-2xl border-2 border-[#d4a853]/60 shadow-[0_20px_50px_rgba(212,168,83,0.15)] max-w-[250px] md:max-w-[270px] w-full aspect-square flex items-center justify-center overflow-hidden group/canvas">
            {/* Canvas Inner Shadow / Glow */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImgIndex}
                src={currentImage}
                alt={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain p-4 relative z-10"
              />
            </AnimatePresence>
            {/* Gallery label overlay */}
            <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-[8px] font-bold text-[#d4a853] z-20 border border-[#d4a853]/30">
              LOGO CANVAS
            </div>
          </div>
        )}

        {/* Navigation Arrows */}
        {hasMultipleImages && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 border border-white/10 hover:border-[#d4a853]/55 hover:bg-[#d4a853]/15 text-white hover:text-[#d4a853] rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100 z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 border border-white/10 hover:border-[#d4a853]/55 hover:bg-[#d4a853]/15 text-white hover:text-[#d4a853] rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100 z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Slide Indicators */}
        {hasMultipleImages && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => selectImage(e, i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImgIndex === i
                    ? "bg-[#d4a853] w-4"
                    : "bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}

        {/* Hover overlay with link */}
        {project.link && (
          <AnimatePresence>
            {hovered && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 flex items-center justify-center gap-2 text-white font-bold text-sm rounded-xl backdrop-blur-sm z-10"
              >
                <ExternalLink className="w-4 h-4 text-[#d4a853]" />
                צפה בפרויקט
              </motion.a>
            )}
          </AnimatePresence>
        )}

        {/* Category badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 border border-[#d4a853]/30 rounded-full text-[10px] font-bold text-[#d4a853] uppercase tracking-wide backdrop-blur-sm z-20">
          {CATEGORIES[project.category]}
        </div>
      </div>

      {/* Text */}
      <div className="p-7 flex flex-col flex-1">
        <span className="text-[#d4a853]/70 text-[10px] font-bold uppercase tracking-[0.15em] mb-1">
          {project.client}
        </span>
        <h3 className="text-lg md:text-xl font-black text-white mb-3 leading-snug">
          {project.title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed flex-1">{project.desc}</p>

        {/* Tags removed as requested */}
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════
// ANIMATED COUNTER
// ═══════════════════════════════════════════════

function AnimatedCounter({ value, duration = 1.2 }) {
  const [count, setCount] = useState(0);

  // Extract digits and non-digits
  const numStr = value.toString().replace(/[^0-9]/g, "");
  const suffix = value.toString().replace(/[0-9]/g, "");
  const target = parseInt(numStr, 10) || 0;

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) {
      setCount(end);
      return;
    }

    setCount(0);

    const totalMs = duration * 1000;
    const stepTime = Math.max(Math.floor(totalMs / Math.max(end, 1)), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMs / stepTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// ═══════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const categoryIcons = {
    all: <Layers className="w-3.5 h-3.5" />,
    websites: <Globe className="w-3.5 h-3.5" />,
    logos: <Palette className="w-3.5 h-3.5" />,
    systems: <ExternalLink className="w-3.5 h-3.5" />,
    creatives: <Image className="w-3.5 h-3.5" />,
  };

  return (
    <div className="min-h-screen bg-[#070707] pt-16 pb-28 px-4 select-none relative overflow-hidden" dir="rtl">
      {/* Background glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4a853]/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Hero header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#d4a853] text-xs font-black uppercase tracking-[0.3em] mb-4 px-4 py-1.5 border border-[#d4a853]/30 rounded-full">
            VOOM PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-3">
            העבודות שלנו מדברות
          </h1>
          <p className="text-white/50 text-sm md:text-base mt-3 max-w-xl mx-auto">
            מבחר מהאתרים, המיתוגים, המערכות והקמפיינים שיצרנו עבור הלקוחות שלנו.
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {Object.entries(CATEGORIES).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${
                activeCategory === key
                  ? "bg-gradient-to-r from-[#f0d78a] to-[#d4a853] text-black border-transparent shadow-[0_0_15px_rgba(212,168,83,0.3)]"
                  : "bg-white/4 border-white/10 text-white/60 hover:border-[#d4a853]/40 hover:text-white"
              }`}
            >
              {categoryIcons[key]}
              {label}
            </button>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4 sm:gap-8 mb-12 text-center"
        >
          {[
            { value: `${filtered.length}`, label: "פרויקטים" },
            { value: "100%", label: "שביעות רצון" },
            { value: "30+", label: "לקוחות ייחודיים" },
          ].map((s, i) => (
            <React.Fragment key={i}>
              <div>
                <div className="voom-animate text-2xl font-black">
                  <AnimatedCounter value={s.value} />
                </div>
                <div className="text-white/40 text-[10px] mt-0.5">{s.label}</div>
              </div>
              {i < 2 && <div className="w-px h-8 bg-white/10" />}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filtered.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} />
            ))}

            {/* Empty state message when there are no projects in the active category */}
            {filtered.length === 0 && (
              <div className="col-span-full py-16 text-center border border-dashed border-white/10 rounded-3xl bg-white/2">
                <Palette className="w-8 h-8 text-[#d4a853]/40 mx-auto mb-3" />
                <p className="text-white/50 text-sm font-bold">בקרוב נעלה לכאן פרויקטים נוספים בתחום זה</p>
                <p className="text-white/20 text-xs mt-1">מערכות ואוטומציות מתקדמות בפיתוח שוטף</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
