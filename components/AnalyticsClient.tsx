"use client";

import { useEffect, useRef } from "react";
import { trackVisit } from "@/lib/analytics";
import { Analytics } from "@vercel/analytics/next";

export default function AnalyticsClient(): React.ReactNode {
  const sentRef = useRef(false);
  useEffect(() => {
    if (sentRef.current) return;
    sentRef.current = true;
    trackVisit();
  }, []);
  return <Analytics />;
}
