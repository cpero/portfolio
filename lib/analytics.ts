// Lightweight analytics helpers with safe guards so they can be used before GA is wired

export type ResumeEventSource = "hero" | "resume-section" | "other";

export function trackResumeDownload(source: ResumeEventSource = "other"): void {
  try {
    // GA4 via gtag if available
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gtag = (globalThis as any).gtag as
      | ((command: string, event: string, params?: Record<string, unknown>) => void)
      | undefined;
    gtag?.("event", "resume_download", { source });
  } catch {
    // no-op
  }
  // Helpful dev signal; safe in production too
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("analytics:event", "resume_download", { source });
  }
}
