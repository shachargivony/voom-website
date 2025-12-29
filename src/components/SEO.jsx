import React from "react";
import { Helmet } from "react-helmet";

export default function SEO() {
  const title = "VOOM - שיווק דיגיטלי וקידום עסקים | קידום בוואטסאפ, אתרים ופרסום ממומן";
  const description = "VOOM - חברת שיווק דיגיטלי מובילה. קידום בוואטסאפ למעל 100,000 אנשים, בניית אתרים מקצועיים, קידום ממומן ברשתות חברתיות ועיצוב לוגואים. הלקוח בפרונט - תוצאות מדידות ושירות אישי.";
  const keywords = "שיווק דיגיטלי, קידום עסקים, קידום בוואטסאפ, בניית אתרים, פרסום ממומן, קידום ברשתות חברתיות, עיצוב לוגו, מיתוג עסקי, שיווק בפייסבוק, שיווק באינסטגרם, לידים, ROI, קמפיינים ממומנים, אתר נחיתה, VOOM";
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="VOOM" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="VOOM" />
      <meta property="og:locale" content="he_IL" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      {/* Additional SEO Tags */}
      <meta name="language" content="Hebrew" />
      <meta name="geo.region" content="IL" />
      <meta name="geo.placename" content="Israel" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "VOOM",
          "description": description,
          "url": siteUrl,
          "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68d1bcb04e9b119c1964d650/a3188441a_WhatsApp2025-12-13192441_fc538f0e.jpg",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+972-50-0000000",
            "contactType": "Customer Service",
            "areaServed": "IL",
            "availableLanguage": "Hebrew"
          },
          "sameAs": [],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IL"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "שירותי שיווק דיגיטלי",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "קידום בוואטסאפ",
                  "description": "פרסום לקבוצות וואטסאפ עם חשיפה למעל 100,000 אנשים"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "בניית אתרים",
                  "description": "אתרים מקצועיים מותאמים המרה עם SEO מובנה"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "קידום ממומן",
                  "description": "קמפיינים ממומנים בפייסבוק, אינסטגרם וטיקטוק"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "עיצוב לוגו ומיתוג",
                  "description": "עיצוב לוגו ייחודי ומיתוג מלא לעסק"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
}

