import React from "react";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import VoomIntroSection from "@/components/VoomIntroSection";
import TachlesSection from "@/components/TachlesSection";
import PackagesSection from "@/components/PackagesSection";
import AboutSection from "@/components/AboutSection";
import DetailedServicesSection from "@/components/DetailedServicesSection";
import ProcessSection from "@/components/ProcessSection";
import InteractiveSection from "@/components/InteractiveSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]" dir="rtl">
      <SEO />
      <HeroSection />
      <VoomIntroSection />
      <DetailedServicesSection />
      <ProcessSection />
      <InteractiveSection />
      <AboutSection />
      <FAQSection />
      <TachlesSection />
      <PackagesSection />
      <ContactSection />
      <WhatsAppButton phoneNumber="972548090469" />
    </div>
  );
}





