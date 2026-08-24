"use client";

import { useEffect } from "react";
import { getVisitorId, getSessionId } from "../lib/analytics";
import { usePathname } from "next/navigation";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    void fetch("/api/analytics/pageview", {
      method: "POST",
      keepalive: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: pathname,
        visitorId: getVisitorId(),
        sessionId: getSessionId(),
        referrer: document.referrer,
      }),
    }).catch(() => {
      // Analytics is optional; a failed request must not affect navigation.
    });
  }, [pathname]);

  return null;
}
