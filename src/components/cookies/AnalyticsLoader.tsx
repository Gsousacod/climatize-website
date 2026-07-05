"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { COOKIE_CONSENT_UPDATED_EVENT, getStoredConsent, type StoredConsent } from "@/lib/cookie-consent";

const GA_MEASUREMENT_ID = "G-HDP8XRGJVN";
const GOOGLE_TAG_ID = "GT-TXB8J9LD";
const CLARITY_PROJECT_ID = "xhrv8dpzoc";

export function AnalyticsLoader() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored?.preferences.analytics) setAnalyticsEnabled(true);

    function handleConsentUpdated(event: Event) {
      const consent = (event as CustomEvent<StoredConsent>).detail;
      setAnalyticsEnabled(Boolean(consent?.preferences.analytics));
    }

    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, handleConsentUpdated);
    return () => window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, handleConsentUpdated);
  }, []);

  if (!analyticsEnabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
          gtag('config', '${GOOGLE_TAG_ID}');
        `}
      </Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
        `}
      </Script>
    </>
  );
}
