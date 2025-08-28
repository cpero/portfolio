"use client";

import { PropsWithChildren } from "react";
import * as motion from "motion/react-client";

type StaggeredRevealProps = PropsWithChildren<{
  className?: string;
  staggerDelay?: number;
}>;

export default function StaggeredReveal({
  children,
  className,
  staggerDelay = 0.1,
}: StaggeredRevealProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

// Staggered item component for individual children
export function StaggeredItem({ children, className }: PropsWithChildren<{ className?: string }>) {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
