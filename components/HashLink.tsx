"use client";

import Link from "next/link";
import { useCallback } from "react";

interface HashLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function HashLink({ href, children, className, onClick }: HashLinkProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Only handle hash links
      if (!href.startsWith("#")) return;

      e.preventDefault();

      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Get the element's position
        const elementRect = targetElement.getBoundingClientRect();
        const elementTop = elementRect.top + window.pageYOffset;

        // Get the computed scroll-margin-top value
        const computedStyle = window.getComputedStyle(targetElement);
        const scrollMarginTop = parseInt(computedStyle.scrollMarginTop) || 0;

        // Calculate the final scroll position
        const finalScrollTop = elementTop - scrollMarginTop;

        // Update the URL without triggering a page reload
        window.history.pushState(null, "", href);

        // Scroll to the calculated position
        window.scrollTo({
          top: finalScrollTop,
          behavior: "smooth",
        });
      }

      // Call the onClick handler if provided
      if (onClick) {
        onClick();
      }
    },
    [href, onClick],
  );

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
