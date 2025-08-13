import { describe, it, expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import Home from "@/app/page";

describe("anchors and sections", () => {
  it("renders main content with expected section wrappers", () => {
    const { container } = render(React.createElement(Home));
    const main = container.querySelector("main#content");
    expect(main).toBeTruthy();
    // Ensure our ScrollReveal wrappers exist via data attribute or ids
    const sectionIds = ["about", "skills", "experience", "projects", "contact"];
    for (const id of sectionIds) {
      const anchorTarget = container.querySelector(`#${id}`);
      expect(anchorTarget).toBeTruthy();
    }
  });
});


