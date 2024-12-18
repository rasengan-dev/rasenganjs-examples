import { MenuIcon } from "lucide-react";
import Navigation from "../molecule/navigation/Navigation";
import { useMenuContext } from "@/hooks/guards/useMenuContext";
import MotionButton from "../molecule/buttons/MotionButton";

const Navbar = () => {
  const { isOpened, setIsOpened } = useMenuContext();
  return (
    <nav className="flex w-full justify-between items-center py-7 px-2 md:px-12 lg:px-16 xl:px-40 bg-[#111204]">
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
    </nav>
  );
};

export default Navbar;
