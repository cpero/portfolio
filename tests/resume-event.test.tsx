import { describe, it, expect, vi } from "vitest";
import { trackResumeDownload } from "../lib/analytics";

describe("resume download analytics", () => {
  it("logs in non-production and does not send network requests", async () => {
    const fetchSpy = vi
      .spyOn(globalThis as unknown as { fetch: typeof fetch }, "fetch")
      .mockResolvedValue(new Response(null, { status: 204 }) as unknown as Response);
    const consoleSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

    // @ts-expect-error simulate no navigator in jsdom
    globalThis.navigator = {};

    trackResumeDownload("other");

    expect(fetchSpy).not.toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalled();
    const lastCall = consoleSpy.mock.calls.at(-1) as unknown[];
    expect(lastCall?.[0]).toBe("analytics:event");
    expect(lastCall?.[1]).toMatchObject({ type: "resume_download", source: "other" });

    fetchSpy.mockRestore();
    consoleSpy.mockRestore();
  });
});
