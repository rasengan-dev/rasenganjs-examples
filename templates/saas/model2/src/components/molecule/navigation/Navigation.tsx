import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMenuContext } from "@/hooks/guards/useMenuContext";
import { MenuIcon } from "lucide-react";
import { firstTextVariant, secondTextVariant } from "../animations/constants";

const Navigation = () => {
  const [elementFocused, setElementFocused] = useState<number | null>(null);

  const { navlinks } = useMenuContext();
  const { isOpened, setIsOpened } = useMenuContext();

  const handleHoverButton = (index: number | null) => {
    setElementFocused(index);
  };

  return (
    <ul className="hidden z-40 lg:flex w-fit rounded-full border-2 p-1 border-[#B9FD50] items-center gap-2 text-white">
      {navlinks.map((elmt, index) => (
        <motion.li
          key={elmt.label}
          initial="initial"
          whileHover={"hover"}
          animate="animate"
          //   variants={backgroundVariant}
          onMouseEnter={() => handleHoverButton(index)}
          onMouseLeave={() => {
            handleHoverButton(null);
          }}
          className="relative z-10 whitespace-nowrap cursor-pointer py-1.5 px-3 text-xs uppercase mix-blend-difference md:px-4 md:py-2 md:text-base"
        >
          <div className="overflow-hidden relative">
            <motion.a
              variants={firstTextVariant}
              href={elmt.href}
              className="text-[#B9FD50] z-20 block"
            >
              {elmt.label}
            </motion.a>
            <motion.a
              variants={secondTextVariant}
              aria-hidden
              href={elmt.href}
              className="absolute top-0 left-0 text-[#111204] z-20"
            >
              {elmt.label}
            </motion.a>
          </div>
          <AnimatePresence>
            {elementFocused === index && (
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                className="-z-10 absolute top-0 right-0 bottom-0 left-0 rounded-full bg-[#B9FD50] dark:bg-neutral-800"
                exit={{ opacity: 0, scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.95 }}
                layout={true}
                layoutId="focused-element"
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </motion.li>
      ))}
      <motion.div
        className="rounded-full py-1 px-2 text-[#B9FD50] place-content-center transition-all duration-75 ease-in-out hover:text-[#111204] hover:bg-[#B9FD50]"
        onClick={() => setIsOpened(!isOpened)}
        tabIndex={0}
        role="button"
      >
        <span className="sr-only">mobile Menu</span>
        <MenuIcon className="size-6 " />
      </motion.div>
    </ul>
  );
};

export default Navigation;
