"use client";

import { useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

export function useHashScroll() {
  const pathname = usePathname();
  const scrollToHash = useCallback((hash: string, smooth = true) => {
    if (!hash) return;

    // Remove the # from the hash
    const targetId = hash.slice(1);

    // Find the target element
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    // Get the element's position
    const elementRect = targetElement.getBoundingClientRect();
    const elementTop = elementRect.top + window.pageYOffset;

    // Get the computed scroll-margin-top value
    const computedStyle = window.getComputedStyle(targetElement);
    const scrollMarginTop = parseInt(computedStyle.scrollMarginTop) || 0;

    // Calculate the final scroll position
    const finalScrollTop = elementTop - scrollMarginTop;

    // Scroll to the calculated position
    window.scrollTo({
      top: finalScrollTop,
      behavior: smooth ? "smooth" : "auto",
    });
  }, []);

  const handleHashChange = useCallback(() => {
    const hash = window.location.hash;
    if (hash) {
      // Use requestAnimationFrame to ensure DOM is fully rendered
      requestAnimationFrame(() => {
        // Add a small delay to ensure all CSS is applied
        setTimeout(() => scrollToHash(hash), 50);
      });
    }
  }, [scrollToHash]);

  useEffect(() => {
    // Only enable hash scrolling on the home page
    if (pathname !== "/") return;

    // Handle initial page load with hash
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        // Add a longer delay for initial page load to ensure everything is rendered
        setTimeout(() => scrollToHash(hash, false), 200);
      }
    }

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [handleHashChange, scrollToHash, pathname]);

  return { scrollToHash };
}
