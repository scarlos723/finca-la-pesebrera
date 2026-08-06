import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface BlurFadeProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  amount?: number;
  blur?: number;
  duration?: number;
  once?: boolean;
}

export const BlurFade = ({
  children,
  delay = 0,
  direction = "up",
  className,
  amount = 16,
  blur = 6,
  duration = 0.7,
  once = true,
}: BlurFadeProps) => {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const initial = (() => {
    const base = { opacity: 0, filter: `blur(${blur}px)` };
    switch (direction) {
      case "up":
        return { ...base, y: amount };
      case "down":
        return { ...base, y: -amount };
      case "left":
        return { ...base, x: -amount };
      case "right":
        return { ...base, x: amount };
      case "none":
        return base;
    }
  })();

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
