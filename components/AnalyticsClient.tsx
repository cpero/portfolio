"use client";

import { useEffect, useRef } from "react";
import { trackVisit } from "@/lib/analytics";

export default function AnalyticsClient(): null {
  const sentRef = useRef(false);
  useEffect(() => {
    if (sentRef.current) return;
    sentRef.current = true;
    trackVisit();
  }, []);
  return null;
}
