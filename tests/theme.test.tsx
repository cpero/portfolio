import { describe, it, expect } from "vitest";
import { generateNoFlashThemeScript } from "../lib/theme";

describe("theme no-flash script", () => {
  it("produces a small inline script that sets data-theme", () => {
    const script = generateNoFlashThemeScript();
    expect(typeof script).toBe("string");
    expect(script).toContain("data-theme");
  });
});


