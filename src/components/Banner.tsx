import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import fotoBanner from "@/assets/recent/banner.webp";
import { Toolbar } from "./Toolbar";
import { Button } from "./ui/button";

const EASE = [0.22, 1, 0.36, 1] as const;

export const Banner = () => {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const goToExperience = () => {
    const target = document.getElementById("experience-section");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const entrance = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 20, filter: "blur(6px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        transition: { duration: 0.8, ease: EASE },
      };

  return (
    <section ref={ref} className="relative">
      <div className="relative h-dvh overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `url(${fotoBanner}) no-repeat center center`,
            backgroundSize: "cover",
            y: bgY,
          }}
          initial={reduce ? false : { scale: 1.12 }}
          animate={reduce ? false : { scale: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-black/50 to-black/50 pointer-events-none" />
        <motion.div
          className="relative w-full h-full grid place-content-center"
          style={{
            opacity: reduce ? 1 : contentOpacity,
            y: reduce ? 0 : contentY,
          }}
        >
          <div className="container text-center">
            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-white"
              {...entrance}
              transition={{ ...entrance.transition, delay: 0.3 }}
            >
              Finca la Pesebrera
              <br />
              Grandes espacios. <br />
              Mínimas preocupaciones.
            </motion.h1>
            <motion.p
              className="text-white text-lg lg:text-xl mt-5"
              {...entrance}
              transition={{ ...entrance.transition, delay: 0.5 }}
            >
              Un refugio donde el río Guaracú se encuentra con la arquitectura
              moderna y el alma rural
            </motion.p>
            <motion.div
              className="flex gap-10 items-center justify-center pt-20"
              {...entrance}
              transition={{ ...entrance.transition, delay: 0.7 }}
            >
              <Button variant="secondary" size={"xl"} onClick={goToExperience}>
                <span>Explora Experiencias</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 z-2 grid w-full"
        initial={reduce ? false : { opacity: 0, y: 30 }}
        animate={reduce ? false : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
      >
        <Toolbar />
      </motion.div>
    </section>
  );
};
