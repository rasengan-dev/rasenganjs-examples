import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import {
  backgroundVariant,
  firstTextVariant,
  secondTextVariant,
} from "../animations/constants";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

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
          "px-4 py-2 sm:px-8 sm:py-3 bg-[#B9FD50] border border-[#B9FD50] rounded-[8px]",
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
