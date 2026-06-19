import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

const serviceOptions = [
  { value: "whatsapp_marketing", label: "קידום בוואטסאפ" },
  { value: "social_ads", label: "קידום ממומן ברשתות" },
  { value: "website", label: "בניית אתר" },
  { value: "logo_design", label: "עיצוב לוגו" },
  { value: "other", label: "אחר" }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "whatsapp_marketing",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await base44.entities.Lead.create(formData);
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "", service: "whatsapp_marketing", message: "" });
    } catch (err) {
      console.error(err);
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#070707] relative overflow-hidden" dir="rtl">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#d4a853]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-wide">
            מוכנים להביא לקוחות חדשים?
          </h2>
          <p className="text-white/50 mt-3 text-sm md:text-base">
            השאירו פרטים ונחזור אליכם לשיחת אסטרטגיה קצרה — ללא עלות וללא התחייבות
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-[#d4a853]/15 relative overflow-hidden bg-black/60 backdrop-blur-md"
        >
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#d4a853]/5 rounded-full blur-3xl pointer-events-none" />

          {isSubmitted ? (
            <div className="text-center py-12 flex flex-col items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="w-16 h-16 mx-auto mb-6 bg-[#d4a853]/20 rounded-full flex items-center justify-center"
              >
                <CheckCircle className="w-8 h-8 text-[#d4a853]" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">תודה רבה!</h3>
              <p className="text-white/60 text-sm">הפרטים התקבלו, ניצור קשר בהקדם האפשרי.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-sm text-[#d4a853] hover:underline"
              >
                שליחת טופס נוסף
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
              <div className="grid md:grid-cols-2 gap-6 w-full">
                <div>
                  <label className="block text-white/70 text-xs font-bold mb-2 pr-1">שם מלא *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="הזן את שמך"
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#d4a853]/50 focus:outline-none text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-bold mb-2 pr-1">מספר טלפון *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="050-0000000"
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#d4a853]/50 focus:outline-none text-sm transition-all text-right"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 w-full">
                <div>
                  <label className="block text-white/70 text-xs font-bold mb-2 pr-1">כתובת אימייל</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#d4a853]/50 focus:outline-none text-sm transition-all text-right"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-bold mb-2 pr-1">שירות מבוקש</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:border-[#d4a853]/50 focus:outline-none text-sm transition-all text-right"
                    dir="rtl"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-[#111] text-white">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-full">
                <label className="block text-white/70 text-xs font-bold mb-2 pr-1">הודעה (אופציונלי)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="ספר לנו קצת על העסק שלך..."
                  rows={4}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#d4a853]/50 focus:outline-none text-sm transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212, 168, 83, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full max-w-sm mx-auto h-12 bg-gradient-to-r from-[#f0d78a] via-[#d4a853] to-[#b8934a] hover:from-[#f4e2bb] hover:to-[#c49a45] text-black font-black rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(212, 168, 83, 0.2)] hover:shadow-[0_0_35px_rgba(212, 168, 83, 0.4)] flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>שליחת פרטים לתיאום שיחה</span>
                    <Send className="w-4 h-4 text-black" />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
