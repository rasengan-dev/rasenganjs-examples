import Image from "@rasenganjs/image";
import logo from "@/assets/Favicon.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigationContext } from "@/hooks/guards/useNavigationContext";


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

export default function Footer() {
  return (
    <>
      <div className="w-screen h-32 bg-[#132238] text-white">
        <nav className="flex w-full justify-around items-center py-4 px-2 container mx-auto">
          <div className="flex items-stqrt gap-2">
            <Image src={logo} alt="Rasengan logo" width={56} height={56} />
            <div className="mt-0.5">
              <p className="font-bold">Hano Kurou</p>
              <p className="uppercase opacity-50 mt-2">UI/UX Designer</p>
            </div>
          </div>
          <FooterNavigation />
          <div className="gap-4 flex items-center text-sm text-slate-300">
               © {new Date(Date.now()).getFullYear()} <i>Rasengan Labs</i>
          </div>
        </nav>
      </div>
    </>
  );
}


export const FooterNavigation = () => {
     const [elementFocused, setElementFocused] = useState<number | null>(null);
     const { navlinks } = useNavigationContext();
   
     // const { isActive, setIsActive } = useNavigationContext();
   
     const handleHoverButton = (index: number | null) => {
       setElementFocused(index);
     };
   
     return (
       <ul className="hidden lg:flex w-fit rounded-full items-center gap-2">
         {navlinks.slice(0, 4).map((elmt, index) => (
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
             className="relative z-10 whitespace-nowrap cursor-pointer py-1.5 px-3 text-xs md:px-4 md:py-2 md:text-base text-white/60 duration-300 ease-in-out hover:text-white/90"
           >
             <div className="overflow-hidden relative">
               <motion.a
                 variants={firstTextVariant}
                 href={elmt.href}
               >
                 {elmt.label}
               </motion.a>
             </div>
             <AnimatePresence>
               {elementFocused === index && (
                 <>
                   <motion.div
                     className="absolute bottom-0 right-0 bottom-0 left-0 rounded-full mx-auto w-10/12 h-1 bg-white -z-10 content-none font-bold text-black"
                     animate={{ scale: 1 }}
                     exit={{scale: 0.9 }}
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
       </ul>
     );
   };