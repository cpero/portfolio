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
      if (!href.startsWith("#")) return;

      e.preventDefault();

      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const elementRect = targetElement.getBoundingClientRect();
        const elementTop = elementRect.top + window.pageYOffset;

        const computedStyle = window.getComputedStyle(targetElement);
        const scrollMarginTop = parseInt(computedStyle.scrollMarginTop) || 0;

        const finalScrollTop = elementTop - scrollMarginTop;

        window.history.pushState(null, "", href);

        window.scrollTo({
          top: finalScrollTop,
          behavior: "smooth",
        });
      }

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
