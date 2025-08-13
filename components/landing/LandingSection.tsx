"use client";

import headshot from "@/public/headshot.png";
import { bio } from "@/lib/content";
import Headshot from "@/components/landing/Headshot";
import AnimatedSplitText from "@/components/landing/AnimatedSplitText";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LandingSection() {
  const shouldReduceMotion = useReducedMotion();
  const [introActive, setIntroActive] = useState(!shouldReduceMotion);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setTimeout(() => setIntroActive(false), 500);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <section id="hero" className="hero bg-base-100 relative h-screen w-full overflow-hidden">
      <LayoutGroup>
        <AnimatePresence>
          {introActive && (
            <motion.div
              key="intro"
              className="bg-base-100 absolute inset-0 z-10 grid place-items-center"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h1
                layoutId="hero-name"
                className="text-6xl font-extrabold tracking-tight sm:text-7xl"
              >
                {bio.name}
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hero-content max-w-6xl flex-col-reverse items-center gap-10 p-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <motion.h1
              layoutId="hero-name"
              className="text-4xl font-extrabold tracking-tight sm:text-5xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: introActive ? 0 : 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {bio.name}
            </motion.h1>
            <motion.div
              className="text-base-content/80 mt-6 text-xl sm:text-2xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: introActive ? 0 : 1, y: introActive ? 8 : 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <AnimatedSplitText
                text="Accessible and scalable software made with passion"
                initialDelay={0.75}
                wordDuration={0.5}
                stagger={0.1}
              />
            </motion.div>
          </div>
          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: introActive ? 0 : 1, y: introActive ? 8 : 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            <Headshot
              src={headshot}
              alt={`Portrait of ${bio.name}`}
              priority
              sizes="(min-width: 1024px) 16rem, (min-width: 640px) 14rem, 12rem"
            />
          </motion.div>
        </div>
      </LayoutGroup>
    </section>
  );
}
