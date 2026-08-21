"use client";

import { useEffect } from "react";
import { getVisitorId, getSessionId } from "../lib/analytics";
import { usePathname } from "next/navigation";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    async function trackPageview() {
      const visitorId = getVisitorId();
      const sessionId = getSessionId();
      const referrer = document.referrer;

      try {
        await fetch("/api/analytics/pageview", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page: pathname,
            visitorId,
            sessionId,
            referrer,
          }),
        });
      } catch {
        // Analytics is optional; a failed request must not affect navigation.
      }
    }

    void trackPageview();
  }, [pathname]);

  return null;
}
