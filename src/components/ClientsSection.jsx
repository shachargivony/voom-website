import React from "react";
import { motion } from "framer-motion";

const industries = [
  { label: "מסעדות ואירוח", icon: "🍽️" },
  { label: "מסחר אלקטרוני", icon: "🛒" },
  { label: "סוכנויות תיירות", icon: "✈️" },
  { label: "נדל״ן והשקעות", icon: "🏢" },
  { label: "חינוך והדרכות", icon: "🎓" },
  { label: "חנויות דיגיטליות", icon: "💻" },
  { label: "מרפאות ואסתטיקה", icon: "💆" },
  { label: "טכנולוגיה וסטארטאפים", icon: "🚀" },
  { label: "שירותים פיננסיים", icon: "💰" },
  { label: "קוסמטיקה ואופנה", icon: "👗" },
  { label: "ספורט וכושר", icon: "💪" },
  { label: "בנייה ושיפוץ", icon: "🏗️" },
];

const row2Items = [...industries].reverse();

function Tag({ item }) {
  return (
    <div className="industry-tag flex-shrink-0">
      <span className="text-base">{item.icon}</span>
      <span className="text-white/80 text-xs md:text-sm font-bold">{item.label}</span>
    </div>
  );
}

// Single seamless marquee: one container holds 2 copies,
// animates the wrapper from 0 → -50% so the seam is invisible.
function MarqueeRow({ items, direction = "left", duration = 32 }) {
  const x = direction === "left"
    ? ["0%", "-50%"]
    : ["-50%", "0%"];

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-3 w-max"
        dir="ltr"
        animate={{ x }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {/* Two identical copies side-by-side */}
        {items.map((item, idx) => <Tag key={`a-${idx}`} item={item} />)}
        {items.map((item, idx) => <Tag key={`b-${idx}`} item={item} />)}
      </motion.div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#050505] to-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4a853]/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white">
            עסקים מהתחומים האלה כבר עובדים איתנו
          </h2>
          <p className="text-white/50 text-sm md:text-base mt-2">
            מאחורינו מאות בעלי עסקים בעשרות תחומים בישראל — העסק שלך בתוכם.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="relative z-10 space-y-4">
        {/* Edge fade masks */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />

        <MarqueeRow items={industries} direction="left" duration={30} />
        <MarqueeRow items={row2Items} direction="right" duration={34} />
      </div>
    </section>
  );
}
