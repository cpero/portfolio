import { describe, it, expect } from "vitest";
import Headshot from "../components/landing/Headshot";
import React from "react";
import { render } from "@testing-library/react";

describe("images have required attributes", () => {
  it("headshot renders with alt and priority when passed", () => {
    const { getByAltText } = render(
      <Headshot src="/headshot.png" alt="Portrait of Test" priority sizes="100vw" />,
    );
    const img = getByAltText("Portrait of Test");
    expect(img).toBeTruthy();
  });
});
