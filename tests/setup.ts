import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// React 19 compatibility: act is now in react/test-utils instead of react-dom/test-utils
// We need to make act available globally for testing-library
import { act } from "react-dom/test-utils";

// Make act available globally for testing-library
declare global {
  var act: (callback: () => void) => void;
}
globalThis.act = act;

// Polyfill IntersectionObserver for motion/react/useInView
class MockIntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "0px";
  readonly thresholds: ReadonlyArray<number> = [0];
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => [] as IntersectionObserverEntry[]);
}

globalThis.IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver;

// Polyfill matchMedia for useReducedMotion and responsive code paths
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
