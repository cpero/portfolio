"use client";

import { PropsWithChildren, useRef } from "react";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";

type ScrollLinkedAnimationProps = PropsWithChildren<{
  className?: string;
  startOffset?: number;
  endOffset?: number;
  property?: "opacity" | "scale" | "y" | "x" | "rotate";
  startValue?: number;
  endValue?: number;
}>;

export default function ScrollLinkedAnimation({
  children,
  className,
  startOffset = 0,
  endOffset = 1,
  property = "opacity",
  startValue = 0,
  endValue = 1,
}: ScrollLinkedAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${startOffset}`, `end ${endOffset}`],
  });

  const animatedValue = useTransform(scrollYProgress, [0, 1], [startValue, endValue]);

  const style = {
    [property]: animatedValue,
  };

  return (
    <motion.div ref={ref} className={className} style={style}>
      {children}
    </motion.div>
  );
}

// Parallax component for background elements
export function ParallaxBackground({
  children,
  className,
  speed = 0.5,
}: PropsWithChildren<{ className?: string; speed?: number }>) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

// Fade in/out based on scroll position
export function ScrollFade({
  children,
  className,
  fadeInOffset = 0.2,
  fadeOutOffset = 0.8,
}: PropsWithChildren<{
  className?: string;
  fadeInOffset?: number;
  fadeOutOffset?: number;
}>) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, fadeInOffset, fadeOutOffset, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} className={className} style={{ opacity }}>
      {children}
    </motion.div>
  );
}
