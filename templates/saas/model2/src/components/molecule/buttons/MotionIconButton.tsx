import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import {
  backgroundVariant,
  firstTextVariant,
  secondTextVariant,
} from "../animations/constants";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
  iconX?: number;
}

const MotionIconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, icon, className, iconX = -10 }, ref) => {
    const iconVariant = {
      initial: {
        x: "100%",
      },
      hover: {
        x: iconX,
        transition: {
          duration: 1.125,
          ease: [0.19, 1, 0.22, 1],
        },
      },
      animate: {
        x: "100%",
        transition: {
          duration: 1.125,
          ease: [0.19, 1, 0.22, 1],
        },
      },
    };

    return (
      <motion.button
        initial="initial"
        whileHover={"hover"}
        animate="animate"
        variants={backgroundVariant}
        ref={ref}
        className={cn(
          "w-[143px] h-12 bg-[#B9FD50] rounded-[8px] relative overflow-hidden",
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
            className="absolute top-0 -left-2 text-center text-[#B9FD50] font-semibold w-full"
          >
            {children}
          </motion.p>
        </div>
        <motion.div
          variants={iconVariant}
          className="absolute w-fit h-full top-0 flex items-center right-0 text-red-300 font-bold"
          aria-hidden
        >
          {icon}
        </motion.div>
      </motion.button>
    );
  }
);

MotionIconButton.displayName = "MotionIconButton";

export default MotionIconButton;
