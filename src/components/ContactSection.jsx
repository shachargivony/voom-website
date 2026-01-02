import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

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
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await base44.entities.Lead.create(formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/20 to-transparent" />
      <div className="absolute bottom-1/2 right-0 w-[500px] h-[500px] bg-[#d4a853]/3 rounded-full blur-[150px]" />
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4a853] text-base md:text-lg font-semibold tracking-[0.12em] drop-shadow-[0_0_14px_rgba(212,168,83,0.35)]">בואו נדבר!</span>
          <h2 className="text-3xl md:text-5xl font-light text-white mt-4 tracking-wide">
            יצירת קשר
          </h2>
          <p className="text-white/40 mt-4 max-w-md mx-auto">
            השאירו פרטים ונחזור אליכם תוך שעות ספורות
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {isSubmitted ? (
            <div className="text-center py-16">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="w-20 h-20 mx-auto mb-6 bg-[#d4a853]/20 rounded-full flex items-center justify-center"
              >
                <CheckCircle className="w-10 h-10 text-[#d4a853]" />
              </motion.div>
              <h3 className="text-2xl text-white mb-3">תודה רבה!</h3>
              <p className="text-white/50">הפרטים התקבלו, ניצור קשר בהקדם</p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="ghost"
                className="mt-6 text-[#d4a853] hover:text-[#d4a853]/80 hover:bg-[#d4a853]/10"
              >
                שליחת טופס נוסף
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/60 text-sm mb-2">שם מלא *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="הזן את שמך"
                    className="bg-[#1a1a1a] border-white/10 text-white placeholder:text-white/30 focus:border-[#d4a853]/50 h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">טלפון *</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="050-0000000"
                    className="bg-[#1a1a1a] border-white/10 text-white placeholder:text-white/30 focus:border-[#d4a853]/50 h-12 rounded-xl"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/60 text-sm mb-2">אימייל</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="bg-[#1a1a1a] border-white/10 text-white placeholder:text-white/30 focus:border-[#d4a853]/50 h-12 rounded-xl"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">שירות מבוקש</label>
                  <Select 
                    value={formData.service} 
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="bg-[#1a1a1a] border-white/10 text-white h-12 rounded-xl focus:ring-[#d4a853]/50">
                      <SelectValue placeholder="בחר שירות" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-white/10">
                      {serviceOptions.map((option) => (
                        <SelectItem 
                          key={option.value} 
                          value={option.value}
                          className="text-white hover:bg-[#d4a853]/20 focus:bg-[#d4a853]/20"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">הודעה</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="ספר לנו קצת על העסק שלך..."
                  rows={4}
                  className="bg-[#1a1a1a] border-white/10 text-white placeholder:text-white/30 focus:border-[#d4a853]/50 rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-gradient-to-r from-[#d4a853] to-[#b8934a] hover:from-[#e0b865] hover:to-[#c9a35a] text-[#0a0a0a] font-medium text-lg rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(212,168,83,0.2)] hover:shadow-[0_0_40px_rgba(212,168,83,0.3)]"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5 ml-2" />
                    שליחה
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

