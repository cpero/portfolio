"use client";

import { useHashScroll } from "@/lib/useHashScroll";

export default function HashScrollHandler() {
  // Hook now handles pathname logic internally
  useHashScroll();
  return null;
}
