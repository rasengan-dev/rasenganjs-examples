import { useMenuContext } from "@/hooks/guards/useMenuContext";
import { motion, AnimatePresence } from "framer-motion";
import { XCircleIcon } from "lucide-react";
import { firstTextVariant, secondTextVariant } from "../animations/constants";

// Menu animations
const menuVariants = {
  hidden: {
    opacity: 0,
    x: "100%",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  }, // Off-screen to the right
  visible: {
    opacity: 1,
    x: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: "100%",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const MobileNavigation = () => {
  const { isOpened, setIsOpened, navlinks } = useMenuContext();
  return (
    <div className={`relative`}>
      {/* Animated Menu */}
      <AnimatePresence>
        {isOpened && (
          <motion.div
            key="menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed inset-0 z-50 flex flex-col gap-24 px-6 sm:px-12 py-8 bg-[#111204] text-white"
          >
            {/* Navigation Links */}

            <div className="flex justify-end">
              <div tabIndex={0} role="button" onClick={() => setIsOpened(!isOpened)}>
                <span className="sr-only">close Menu</span>
                <XCircleIcon className="size-12 text-[#B9FD50]" />
              </div>
            </div>
            <nav className="flex-1 place-content-center">
              <ul className="space-y-6">
                {navlinks.map((link, index) => (
                  <motion.li
                    key={link.href + index}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: index * 0.3 },
                      },
                    }}
                    onClick={() => setIsOpened(false)} // Close menu on click
                    whileHover={"hover"}
                    className="font-plusJakartaSans font-bold"
                  >
                    <div className="relative overflow-hidden text-5xl sm:text-6xl md:text-8xl">
                      <motion.a
                        href={link.href}
                        variants={firstTextVariant}
                        className="text-white block"
                      >
                        {link.label}
                      </motion.a>
                      <motion.a
                        href={link.href}
                        variants={secondTextVariant}
                        aria-hidden
                        className="absolute bottom-0 -left-0 text-[#B9FD50]"
                      >
                        {link.label}
                      </motion.a>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavigation;
