"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion";

type ScrollRevealProps = PropsWithChildren<{
  className?: string;
  offset?: number;
  delay?: number;
  amount?: number;
  /** Section id to re-trigger animation when navigating via anchor links */
  targetId?: string;
}>;

export default function ScrollReveal({
  children,
  className,
  offset = 150,
  delay = 0.5,
  amount = 0.7,
  targetId,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount, margin: "0px 0px -12% 0px" });

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView, shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion || !targetId) return;
    const retrigger = () => {
      const current = (location.hash || "").replace(/^#/, "");
      if (current && current === targetId) {
        controls.set("hidden");
        requestAnimationFrame(() => {
          controls.start("visible");
        });
      }
    };
    retrigger();
    window.addEventListener("hashchange", retrigger);
    return () => window.removeEventListener("hashchange", retrigger);
  }, [controls, shouldReduceMotion, targetId]);

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
        variants={{ hidden: { opacity: 0, x: offset }, visible: { opacity: 1, x: 0 } }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
