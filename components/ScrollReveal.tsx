"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { useAnimation, useInView, useReducedMotion } from "motion/react";

type ScrollRevealProps = PropsWithChildren<{
  className?: string;
  offset?: number;
  delay?: number;
  amount?: number | "some" | "all";
  direction?: "up" | "down" | "left" | "right";
  stagger?: number;
  duration?: number;
}>;

export default function ScrollReveal({
  children,
  className,
  offset = 50,
  delay = 0,
  amount = "some",
  direction = "up",
  stagger = 0.1,
  duration = 0.8,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView, shouldReduceMotion]);

  // Define direction-based variants
  const getDirectionalVariants = () => {
    const directionalVariants = {
      up: {
        hidden: { opacity: 0, y: offset },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: [0.22, 1, 0.36, 1] as const,
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      },
      down: {
        hidden: { opacity: 0, y: -offset },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: [0.22, 1, 0.36, 1] as const,
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      },
      left: {
        hidden: { opacity: 0, x: offset },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration,
            ease: [0.22, 1, 0.36, 1] as const,
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      },
      right: {
        hidden: { opacity: 0, x: -offset },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration,
            ease: [0.22, 1, 0.36, 1] as const,
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      },
    };

    return directionalVariants[direction];
  };

  if (shouldReduceMotion) {
    return (
      <div className={["w-full overflow-x-hidden", className].filter(Boolean).join(" ")}>
        {children}
      </div>
    );
  }

  return (
    <div className={["w-full overflow-x-hidden", className].filter(Boolean).join(" ")}>
      <motion.div
        ref={ref}
        className="w-full"
        variants={getDirectionalVariants()}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
}
