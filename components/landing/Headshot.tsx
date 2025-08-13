"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type HeadshotProps = {
  src: StaticImageData | string;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

export default function Headshot({ src, alt, priority, sizes }: HeadshotProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="mask mask-hexagon bg-accent aspect-square w-48 p-1 shadow-xl sm:w-56 sm:p-1.5 lg:w-64 lg:p-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }
      }
    >
      <div className="mask mask-hexagon bg-base-200 relative h-full w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          priority={priority}
          fill
          onLoadingComplete={() => setIsLoaded(true)}
          className="bg-base-300 object-cover object-[50%_20%]"
          sizes={sizes}
        />
      </div>
    </motion.div>
  );
}
