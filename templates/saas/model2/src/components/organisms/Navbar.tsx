import { MenuIcon } from "lucide-react";
import Navigation from "../molecule/navigation/Navigation";
import { useMenuContext } from "@/hooks/guards/useMenuContext";
import MotionButton from "../molecule/buttons/MotionButton";
import useMouse from "@/hooks/useMouse";

const Navbar = () => {
  const { isOpened, setIsOpened } = useMenuContext();

  const { handleMouseLeave, handleMouseMove, cursorPosition, isHovering } =
    useMouse();

  return (
    <nav className="fixed top-0 z-40 w-full bg-[#111204]/30 backdrop-blur-md shadow-lg border-b border-white/10">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative group flex justify-between items-center py-5 px-6 md:px-12 lg:px-16 xl:px-40"
      >
        <h1 className="font-bold text-3xl">
          <span className="text-white">Kro</span>
          <span className="text-[#B9FD50]">nix</span>
        </h1>

        <Navigation />
        <div className="gap-4 flex items-center">
          <MotionButton className="sm:px-4 sm:py-2">Get Started</MotionButton>

          <div
            onClick={() => setIsOpened(!isOpened)}
            className="rounded-[8px] p-1 lg:hidden"
            tabIndex={0}
            role="button"
          >
            <span className="sr-only">mobile Menu</span>
            <MenuIcon className="size-6 text-[#B9FD50]" />
          </div>
        </div>

        {isHovering && (
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(185, 253, 80, 0.5), transparent 10%)`,
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
