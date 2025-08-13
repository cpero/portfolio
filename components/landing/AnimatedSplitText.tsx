"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type AnimatedSplitTextProps = {
  text: string;
  className?: string;
  /** Delay before the first word animates (seconds) */
  initialDelay?: number;
  /** Duration of each word's animation (seconds) */
  wordDuration?: number;
  /** Time between each word animation (seconds) */
  stagger?: number;
};

export default function AnimatedSplitText({
  text,
  className,
  initialDelay = 0.15,
  wordDuration = 0.35,
  stagger = 0.04,
}: AnimatedSplitTextProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: initialDelay,
      },
    },
  };

  const wordVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0 } },
      }
    : {
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: wordDuration, ease: [0.16, 1, 0.3, 1] },
        },
      };

  const words = text.trim().split(/\s+/);

  return (
    <span className={`inline-block ${className ?? ""}`} aria-label={text}>
      {/* Animated words (hidden from screen readers for clarity) */}
      <motion.span
        className="inline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        // Prevent flash of un-animated content before hydration
        style={{ opacity: 0 }}
        aria-hidden="true"
      >
        {words.map((word, index) => (
          <motion.span key={`${word}-${index}`} className="inline-block will-change-transform">
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
            {index < words.length - 1 ? <span className="inline-block">&nbsp;</span> : null}
          </motion.span>
        ))}
      </motion.span>
      {/* Visually hidden full text fallback for a11y */}
      <span className="sr-only">{text}</span>
    </span>
  );
}
