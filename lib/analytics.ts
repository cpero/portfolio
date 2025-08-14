// Lightweight analytics helper that posts to our API route instead of GA

export type ResumeEventSource = "hero" | "resume-section" | "other";

function postAnalyticsEvent(payload: unknown): void {
  try {
    const url = "/api/analytics";

    // Prefer sendBeacon for reliability during page unloads
    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
      navigator.sendBeacon(url, blob);
      return;
    }

    // Fallback to fetch
    if (typeof fetch === "function") {
      void fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      });
    }
  } catch {
    // no-op
  }
}

export function trackResumeDownload(source: ResumeEventSource = "other"): void {
  postAnalyticsEvent({ type: "resume_download", source, timestamp: Date.now() });
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("analytics:event", "resume_download", { source });
  }
}

export function trackVisit(): void {
  try {
    const path = typeof window !== "undefined" ? window.location.pathname : "/";
    const ref = typeof document !== "undefined" ? document.referrer : "";
    postAnalyticsEvent({ type: "visit", path, ref, timestamp: Date.now() });
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.debug("analytics:event", "visit", { path, ref });
    }
  } catch {
    // no-op
  }
}
