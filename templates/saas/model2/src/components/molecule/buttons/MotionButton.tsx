import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const backgroundVariant = {
  initial: {
    backgroundColor: "#B9FD50",
  },
  hover: {
    backgroundColor: "#111204",
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1],
    },
    border: "1px solid #B9FD50",
  },
  animate: {
    backgroundColor: "#B9FD50",
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const firstTextVariant = {
  initial: {
    y: 0,
  },
  hover: {
    y: -20,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const secondTextVariant = {
  initial: {
    y: 20,
  },
  hover: {
    y: 0,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 20,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const MotionButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className }, ref) => {
    return (
      <motion.button
        initial="initial"
        whileHover={"hover"}
        animate="animate"
        variants={backgroundVariant}
        ref={ref}
        className={cn(
          "px-4 py-2 sm:px-8 sm:py-3 bg-[#B9FD50] rounded-[8px]",
          className
        )}
      >
        <div className="overflow-hidden relative">
          <motion.p
            variants={firstTextVariant}
            className="text-[#111204] font-semibold"
          >
            {children}
          </motion.p>
          <motion.p
            variants={secondTextVariant}
            aria-hidden
            className="absolute top-0 left-0 text-[#B9FD50] font-semibold"
          >
            {children}
          </motion.p>
        </div>
      </motion.button>
    );
  }
);

export default MotionButton;
