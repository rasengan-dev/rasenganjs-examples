import { useMenuContext } from "@/hooks/guards/useMenuContext";
import { motion, AnimatePresence } from "framer-motion";
import { XCircleIcon } from "lucide-react";

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
    y: "100%",
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
      type: "spring",
      stiffness: 200,
      damping: "10",
    },
  },
};

const MobileNavigation = () => {
  const { isOpened, setIsOpened, navlinks } = useMenuContext();
  return (
    <div className="relative">
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
            className="fixed inset-0 z-50 flex flex-col gap-24 px-12 py-8 bg-[#111204] text-white"
          >
            {/* Navigation Links */}

            <div
              tabIndex={0}
              role="button"
              onClick={() => setIsOpened(!isOpened)}
              className="flex justify-end"
            >
              <span className="sr-only">close Menu</span>
              <XCircleIcon className="size-12 text-[#B9FD50]" />
            </div>
            <nav className="flex-1 place-content-center ">
              <ul className="text-2xl">
                {navlinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: index * 0.2 },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                    className="font-plusJakartaSans text-3xl md:text-5xl xl:text-7xl font-bold"
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpened(false)} // Close menu on click
                      className="hover:text-gray-400 transition"
                    >
                      <div className="relative h-24 overflow-hidden w-full custom-cursor">
                        <motion.p
                          variants={firstTextVariant}
                          className="text-white size-full"
                        >
                          {link.label}
                        </motion.p>
                        <motion.p
                          initial="initial"
                          whileHover={"hover"}
                          animate="animate"
                          variants={secondTextVariant}
                          aria-hidden
                          className="absolute top-0 left-0 text-[#B9FD50] size-full"
                        >
                          {link.label}
                        </motion.p>
                      </div>
                    </a>
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
