import React from "react";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import TachlesSection from "@/components/TachlesSection";
import AboutSection from "@/components/AboutSection";
import DetailedServicesSection from "@/components/DetailedServicesSection";
import ProcessSection from "@/components/ProcessSection";
import InteractiveSection from "@/components/InteractiveSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]" dir="rtl">
      <SEO />
      <HeroSection />
      <DetailedServicesSection />
      <ProcessSection />
      <InteractiveSection />
      <TestimonialsSection />
      <ClientsSection />
      <AboutSection />
      <FAQSection />
      <TachlesSection />
      <ContactSection />
      <WhatsAppButton phoneNumber="972548090469" />
    </div>
  );
}





