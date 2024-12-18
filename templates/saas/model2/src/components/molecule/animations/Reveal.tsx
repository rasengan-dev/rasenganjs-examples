import { Variants, motion, useAnimation, useInView } from "framer-motion";
import * as React from "react";

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "to-top" | "to-bottom" | "to-left" | "to-right" | "zoom-out";
  once?: boolean;
  duration?: number;
  delay?: number;
}

const Reveal = React.forwardRef<HTMLDivElement, RevealProps>(
  (
    {
      children,
      className,
      variant = "to-top",
      once = true,
      duration = 0.5,
      delay = 0.25,
    },
    ref
  ) => {
    const compRef = ref
      ? (ref as { current: HTMLDivElement | null })
      : React.createRef<HTMLDivElement>();

    const isInView = useInView(compRef, { once: once });

    const mainControls = useAnimation();

    React.useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
      }
    }, [isInView, mainControls]);

    const getVariants = (): Variants => {
      switch (variant) {
        case "to-top":
          return {
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          };
        case "to-bottom":
          return {
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          };
        case "to-left":
          return {
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          };
        case "to-right":
          return {
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          };
        case "zoom-out":
          return {
            hidden: { opacity: 0, scale: 1.5 },
            visible: { opacity: 1, scale: 1 },
          };

        default:
          return {};
      }
    };

    return (
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: delay }}
        className={className}
        ref={compRef}
      >
        {children}
      </motion.div>
    );
  }
);

Reveal.displayName = "Reveal";

export default Reveal;
