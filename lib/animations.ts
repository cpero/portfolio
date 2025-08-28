// Animation utilities and variants for consistent animations across the portfolio

import type { Variants, Transition } from "motion/react";

// Common easing functions
export const easings = {
  smooth: [0.22, 1, 0.36, 1] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
  elastic: [0.175, 0.885, 0.32, 1.275] as const,
  easeOut: [0.25, 0.46, 0.45, 0.94] as const,
  easeIn: [0.55, 0.055, 0.675, 0.19] as const,
} as const;

// Common transition configurations
export const transitions = {
  fast: { duration: 0.2, ease: easings.smooth },
  normal: { duration: 0.4, ease: easings.smooth },
  slow: { duration: 0.8, ease: easings.smooth },
  bounce: { duration: 0.6, ease: easings.bounce },
  elastic: { duration: 0.8, ease: easings.elastic },
} as const;

// Fade animations
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.normal,
  },
};

// Slide animations from different directions
export const slideVariants = {
  up: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.normal,
    },
  },
  down: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.normal,
    },
  },
  left: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: transitions.normal,
    },
  },
  right: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: transitions.normal,
    },
  },
} as const;

// Scale animations
export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.bounce,
  },
};

// Stagger container variants
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger item variants
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
};

// Hover animations
export const hoverVariants = {
  lift: {
    scale: 1.05,
    y: -5,
    transition: transitions.fast,
  },
  glow: {
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    transition: transitions.fast,
  },
  rotate: {
    rotate: 5,
    transition: transitions.fast,
  },
} as const;

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  in: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    },
  },
  out: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.2,
      ease: easings.easeOut,
    },
  },
};

// Text reveal variants
export const textRevealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
};

// Card hover variants
export const cardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.normal,
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: transitions.fast,
  },
};

// Utility function to create custom variants
export function createVariants(
  direction: keyof typeof slideVariants = "up",
  customTransition?: Transition,
): Variants {
  return {
    hidden: slideVariants[direction].hidden,
    visible: {
      ...slideVariants[direction].visible,
      transition: customTransition || slideVariants[direction].visible.transition,
    },
  };
}

// Utility function to create stagger variants
export function createStaggerVariants(
  staggerDelay: number = 0.1,
  itemTransition?: Transition,
): { container: Variants; item: Variants } {
  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: 0.1,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: itemTransition || transitions.normal,
      },
    },
  };
}
