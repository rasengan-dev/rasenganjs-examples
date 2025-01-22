import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, XIcon } from "lucide-react";
import { useNavigationContext } from "@/hooks/guards/useNavigationContext";
import { IconButton } from "../buttons/IconButton";

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

const navItemVariant = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Navigation = () => {
  const [elementFocused, setElementFocused] = useState<number | null>(null);
  const { navlinks, isActive, setIsActive } = useNavigationContext();

  const handleHoverButton = (index: number | null) => {
    setElementFocused(index);
  };

  return (
    <>
      <ul className="hidden lg:flex w-fit rounded-full items-center gap-2">
        {navlinks.map((elmt, index) => (
          <motion.li
            key={elmt.label}
            initial="hidden"
            whileHover={"hover"}
            animate="visible"
            variants={navItemVariant}
            onMouseEnter={() => handleHoverButton(index)}
            onMouseLeave={() => {
              handleHoverButton(null);
            }}
            className="relative z-10 whitespace-nowrap cursor-pointer py-1.5 px-3 text-xs md:px-4 md:py-2 md:text-base text-black/60 duration-300 ease-in-out hover:text-black/90"
          >
            <div className="overflow-hidden relative">
              <motion.a variants={firstTextVariant} href={elmt.href}>
                {elmt.label}
              </motion.a>
            </div>
            <AnimatePresence>
              {elementFocused === index && (
                <>
                  <motion.div
                    className="absolute bottom-0 right-0 bottom-0 left-0 rounded-full mx-auto w-10/12 h-1 bg-gradient-to-l from-purple-500 to-slate-800 -z-10 content-none text-red-600 font-bold text-black"
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    initial={{ scale: 0.95 }}
                    layout={true}
                    layoutId="focused-element"
                    transition={{ duration: 0.2 }}
                  />
                </>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
        <IconButton
          Icon={<Mail />}
          Content="Send Message"
          Variant={"large"}
          size={"lg"}
        />
      </ul>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isActive && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed  inset-0 z-50 flex flex-col items-center justify-start pt-16 bg-white/50 lg:hidden backdrop-blur-2xl"
            >
              <motion.div
                className="rounded-full py-1 px-2 text-[#B9FD50] place-content-center transition-all duration-75 ease-in-out hover:text-purple-500 hover:bg-purple-500 mb-5"
                onClick={() => setIsActive(!isActive)}
                tabIndex={0}
                role="button"
              >
                <span className="sr-only">Close Menu</span>
                <XIcon className="size-12 text-purple-500 border-none duration-300 ease-in hover:border-purple-500 hover:bg-purple-500 hover:text-white rounded-full p-2" />
                </motion.div>
              <ul className="flex flex-col items-center gap-4">
                {navlinks.map((elmt, index) => (
                  <motion.li
                    key={elmt.label}
                    initial="initial"
                    whileHover={"hover"}
                    animate="animate"
                    onMouseEnter={() => handleHoverButton(index)}
                    onMouseLeave={() => {
                      handleHoverButton(null);
                    }}
                    className="relative z-10 whitespace-nowrap cursor-pointer py-1.5 px-3 text-base text-black/60 duration-300 ease-in-out hover:text-black/90"
                  >
                    <div className="overflow-hidden relative">
                      <motion.a variants={firstTextVariant} href={elmt.href}>
                        {elmt.label}
                      </motion.a>
                    </div>
                    <AnimatePresence>
                      {elementFocused === index && (
                        <>
                          <motion.div
                            className="absolute bottom-0 right-0 bottom-0 left-0 rounded-full mx-auto w-10/12 h-1 bg-black -z-10 content-none text-red-600 font-bold text-black"
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            initial={{ scale: 0.95 }}
                            layout={true}
                            layoutId="focused-element"
                            transition={{ duration: 0.2 }}
                          />
                        </>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
                <IconButton
                  Icon={<Mail />}
                  Content="Send Message"
                  Variant={"large"}
                  size={"lg"}
                />
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
