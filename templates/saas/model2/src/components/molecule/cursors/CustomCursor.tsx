import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [isVisible, setIsVisible] = useState(false); // Cursor visibility state

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Add hovered state (optional: class changes on hover)
  useEffect(() => {
    const links = document.querySelectorAll(".custom-cursor");

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => setIsVisible(true));
      link.addEventListener("mouseleave", () => setIsVisible(false));
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => setIsVisible(true));
        link.removeEventListener("mouseleave", () => setIsVisible(false));
      });
    };
  }, []);

  return (
    <motion.div
      key={"custom-cursor"}
      className="pointer-events-none fixed top-0 left-0 z-[9999] size-16 bg-[#B9FD50] flex justify-center items-center rounded-full border-2 border-black"
      style={{
        left: position.x - 30, // Center the cursor
        top: position.y - 30, // Center the cursor
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        scale: isVisible ? 1 : 0.75,
      }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
    >
      <ArrowUpRightIcon className="size-10 text-black" />
    </motion.div>
  );
}
