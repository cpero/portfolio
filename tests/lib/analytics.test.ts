import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { trackResumeDownload, trackVisit } from "@/lib/analytics";

describe("analytics", () => {
  const originalEnv = process.env.NODE_ENV;
  const originalNavigator = globalThis.navigator;
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    Object.defineProperty(globalThis, "navigator", {
      value: originalNavigator,
      configurable: true,
    });
    Object.defineProperty(globalThis, "fetch", { value: originalFetch, configurable: true });
  });

  it("logs events and does not send network in non-production (resume + visit)", () => {
    vi.stubEnv("NODE_ENV", "test");
    const consoleSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
    const fetchSpy = vi
      .spyOn(globalThis as unknown as { fetch: typeof fetch }, "fetch")
      .mockResolvedValue(new Response(null, { status: 204 }) as unknown as Response);
    Object.defineProperty(globalThis, "navigator", { value: {}, configurable: true });

    trackResumeDownload("other");
    trackVisit();

    expect(consoleSpy).toHaveBeenCalled();
    // Should not attempt network in non-prod
    expect(fetchSpy).not.toHaveBeenCalled();

    // Validate a recent call looked like our payload marker
    const lastCall = consoleSpy.mock.calls.at(-1) as unknown[];
    expect(lastCall?.[0]).toBe("analytics:event");
    expect(lastCall?.[1]).toMatchObject({ type: "visit" });
  });

  it("uses navigator.sendBeacon in production when available (visit)", () => {
    vi.stubEnv("NODE_ENV", "production");
    const beaconSpy = vi.fn(() => true);
    Object.defineProperty(globalThis, "navigator", {
      value: { sendBeacon: beaconSpy },
      configurable: true,
    });
    const consoleSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
    const fetchSpy = vi
      .spyOn(globalThis as unknown as { fetch: typeof fetch }, "fetch")
      .mockResolvedValue(new Response(null, { status: 204 }) as unknown as Response);

    trackVisit();

    expect(beaconSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it("falls back to fetch in production when sendBeacon is not available (resume)", () => {
    vi.stubEnv("NODE_ENV", "production");
    Object.defineProperty(globalThis, "navigator", { value: {}, configurable: true });
    const consoleSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
    const fetchSpy = vi
      .spyOn(globalThis as unknown as { fetch: typeof fetch }, "fetch")
      .mockResolvedValue(new Response(null, { status: 204 }) as unknown as Response);

    trackResumeDownload("hero");

    expect(fetchSpy).toHaveBeenCalled();
    const [url, init] = fetchSpy.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("/api/analytics");
    expect(init?.method).toBe("POST");
    expect(consoleSpy).not.toHaveBeenCalled();
  });
});
