import { describe, it, expect, vi } from "vitest";
import { trackResumeDownload } from "../lib/analytics";

describe("resume download analytics", () => {
  it("uses fetch when sendBeacon is not available", async () => {
    const fetchSpy = vi
      .spyOn(globalThis as unknown as { fetch: typeof fetch }, "fetch")
      .mockResolvedValue(new Response(null, { status: 204 }) as unknown as Response);

    // @ts-expect-error simulate no navigator in jsdom
    globalThis.navigator = {};

    trackResumeDownload("other");

    expect(fetchSpy).toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
