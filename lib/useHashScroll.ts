"use client";

import { useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

export function useHashScroll() {
  const pathname = usePathname();
  const scrollToHash = useCallback((hash: string, smooth = true) => {
    if (!hash) return;

    const targetId = hash.slice(1);

    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const elementRect = targetElement.getBoundingClientRect();
    const elementTop = elementRect.top + window.pageYOffset;

    const computedStyle = window.getComputedStyle(targetElement);
    const scrollMarginTop = parseInt(computedStyle.scrollMarginTop) || 0;

    const finalScrollTop = elementTop - scrollMarginTop;

    window.scrollTo({
      top: finalScrollTop,
      behavior: smooth ? "smooth" : "auto",
    });
  }, []);

  const handleHashChange = useCallback(() => {
    const hash = window.location.hash;
    if (hash) {
      requestAnimationFrame(() => {
        setTimeout(() => scrollToHash(hash), 50);
      });
    }
  }, [scrollToHash]);

  useEffect(() => {
    if (pathname !== "/") return;

    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => scrollToHash(hash, false), 200);
      }
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [handleHashChange, scrollToHash, pathname]);

  return { scrollToHash };
}
