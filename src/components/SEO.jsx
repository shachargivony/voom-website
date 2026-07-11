import React from "react";
import { Helmet } from "react-helmet";

const SITE_URL = "https://www.voom-media.com"; // ← הדומיין המעודכן
const PHONE = "+972-54-809-0469";
const LOGO_URL = `${SITE_URL}/logo.png`;

const title = "VOOM | משרד שיווק דיגיטלי בישראל – קידום ממומן, קריאייטיב ואוטומציה שיווקית";
const description =
  "VOOM הוא משרד שיווק דיגיטלי מוביל בישראל. אנו מתמחים בקידום ממומן בפייסבוק, אינסטגרם וטיקטוק, יצירת קריאייטיב וקופירייטינג, בניית אתרים ממירים, ואוטומציה שיווקית בוואטסאפ. תתחילו את השינוי של העסק שלכם עוד היום.";

const keywords = [
  // Brand
  "VOOM", "וום", "VOOM שיווק", "וום שיווק דיגיטלי",
  // Core services HE
  "משרד שיווק", "משרד שיווק דיגיטלי", "חברת שיווק", "חברת שיווק דיגיטלי",
  "שיווק דיגיטלי", "שיווק דיגיטלי ישראל", "שיווק עסקי",
  "קידום ממומן", "פרסום ממומן", "קמפיינים ממומנים",
  "ניהול קמפיינים", "ניהול רשתות חברתיות",
  // Platforms
  "קידום בפייסבוק", "שיווק בפייסבוק", "פרסום בפייסבוק",
  "קידום באינסטגרם", "שיווק באינסטגרם",
  "קידום בטיקטוק", "שיווק בטיקטוק",
  "שיווק בגוגל", "Google Ads",
  // Content & creative
  "קריאייטיב שיווקי", "קופירייטינג", "תוכן שיווקי",
  "הפקת סרטונים לעסקים", "Reels לעסקים", "עריכת וידאו שיווקי",
  // Automation & WhatsApp
  "שיווק בוואטסאפ", "קידום בוואטסאפ", "אוטומציה שיווקית",
  "צ'אטבוט וואטסאפ", "מועדון לקוחות",
  // Web
  "בניית אתרים", "בניית אתר עסקי", "דף נחיתה", "אתר תדמית",
  // Branding
  "מיתוג עסקי", "עיצוב לוגו", "שפה ויזואלית",
  // Leads & results
  "לידים", "ייצור לידים", "החזר השקעה", "ROI",
  // Local IL
  "שיווק דיגיטלי ישראל", "קידום עסקים בישראל"
].join(", ");

// Full Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VOOM",
  alternateName: "וום שיווק דיגיטלי",
  url: SITE_URL,
  logo: LOGO_URL,
  description,
  foundingDate: "2023",
  areaServed: "IL",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IL"
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "sales",
      areaServed: "IL",
      availableLanguage: "Hebrew"
    }
  ],
  sameAs: [
    "https://www.facebook.com/voommarketing",
    "https://www.instagram.com/voommarketing"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "שירותי שיווק דיגיטלי ואוטומציה",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "קידום ממומן ברשתות חברתיות",
          description: "בניית וניהול קמפיינים ממומנים בפייסבוק, אינסטגרם וטיקטוק כולל קריאייטיב, קופי ואופטימיזציה שוטפת"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "יצירת קריאייטיב וקופירייטינג שיווקי",
          description: "עיצוב מודעות, כתיבת קופי שיווקי ממיר, הפקת Reels וסרטוני תוכן לרשתות חברתיות"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "בניית אתרים ודפי נחיתה",
          description: "פיתוח אתרי תדמית, חנויות דיגיטליות ודפי נחיתה מותאמים להמרות ולמנועי חיפוש"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "אוטומציה שיווקית וצ'אטבוט בוואטסאפ",
          description: "הקמת מערכות אוטומציה לשיווק, CRM, דיוור אוטומטי וצ'אטבוט ייעודי בוואטסאפ"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "מיתוג עסקי ועיצוב לוגו",
          description: "בניית שפה ויזואלית ייחודית, עיצוב לוגו מקצועי וספר מותג מלא לעסקים"
        }
      }
    ]
  }
};

// LocalBusiness Schema (boosts local SEO)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: "VOOM – משרד שיווק דיגיטלי",
  description,
  url: SITE_URL,
  telephone: PHONE,
  image: LOGO_URL,
  priceRange: "₪₪₪",
  currenciesAccepted: "ILS",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IL"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "32.0853",
    longitude: "34.7818"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00"
    }
  ],
  sameAs: [
    "https://www.facebook.com/voommarketing",
    "https://www.instagram.com/voommarketing"
  ]
};

// WebSite schema with SearchAction
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VOOM",
  url: SITE_URL,
  inLanguage: "he",
  description,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?s={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

// BreadcrumbList
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "דף הבית",
      item: SITE_URL
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "שירותים",
      item: `${SITE_URL}/#tachles-section`
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "חבילות",
      item: `${SITE_URL}/#packages-section`
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "צור קשר",
      item: `${SITE_URL}/#contact`
    }
  ]
};

// FAQ Schema (boosts featured snippets)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "מה זה VOOM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VOOM הוא משרד שיווק דיגיטלי ישראלי המתמחה בקידום ממומן, יצירת קריאייטיב, קופירייטינג, בניית אתרים ואוטומציה שיווקית לעסקים בישראל."
      }
    },
    {
      "@type": "Question",
      name: "אילו שירותי שיווק דיגיטלי מציעה VOOM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VOOM מציעה קידום ממומן בפייסבוק, אינסטגרם וטיקטוק, יצירת קריאייטיב וקופירייטינג שיווקי, הפקת Reels וסרטוני תוכן, בניית אתרים ודפי נחיתה, אוטומציה שיווקית עם צ'אטבוט בוואטסאפ, מיתוג ועיצוב לוגו."
      }
    },
    {
      "@type": "Question",
      name: "איך VOOM מסייעת לעסקים לצמוח?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VOOM בונה מעטפת שיווק 360° הכוללת פרסום ממומן, קריאייטיב מקצועי ואוטומציה שיווקית שמביאים לידים איכותיים, מקצרים את זמן המענה ללקוחות ומגדילים את שיעורי ההמרה."
      }
    },
    {
      "@type": "Question",
      name: "כמה עולה שיווק דיגיטלי ב-VOOM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VOOM מציעה חבילות שיווק דיגיטלי מותאמות אישית לכל עסק. ניתן לתאם שיחת ייעוץ ראשונית ללא עלות לקבלת הצעת מחיר מותאמת."
      }
    }
  ]
};

export default function SEO() {
  const canonicalUrl = typeof window !== "undefined" ? window.location.origin : SITE_URL;

  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="VOOM" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* ── Language & Geo ── */}
      <meta name="language" content="Hebrew" />
      <html lang="he" />
      <meta name="geo.region" content="IL" />
      <meta name="geo.placename" content="Israel" />
      <meta name="geo.position" content="32.0853;34.7818" />
      <meta name="ICBM" content="32.0853, 34.7818" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="VOOM" />
      <meta property="og:locale" content="he_IL" />
      <meta property="og:image" content={LOGO_URL} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="VOOM – משרד שיווק דיגיטלי" />

      {/* ── Twitter / X ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={LOGO_URL} />

      {/* ── Structured Data ── */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
}
