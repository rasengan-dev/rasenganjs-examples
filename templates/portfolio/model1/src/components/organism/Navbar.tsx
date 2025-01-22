import Navigation from "../molecules/navigators/Navigation";
import { useNavigationContext } from "@/hooks/guards/useNavigationContext";
import Image from "@rasenganjs/image";
import logo from "@/assets/Favicon.png";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const { isActive, setIsActive } = useNavigationContext();

  return (
    <nav className="flex w-full justify-between items-center py-4 px-2 container mx-auto">
      <div className="flex items-start gap-2">
        <Image src={logo} alt="Rasengan logo" width={56} height={56} />
        <div className="mt-0.5">
          <p className="font-bold">Hano Kurou</p>
          <p className="uppercase opacity-50 mt-2">UI/UX Designer</p>
        </div>
      </div>
      <Navigation />
      <div className="gap-4 flex items-center lg:hidden">
        <div
          onClick={() => setIsActive(!isActive)}
          className="rounded-[8px] p-1 lg:hidden"
          tabIndex={0}
          role="button"
        >
          <span className="sr-only">mobile Menu</span>
          <MenuIcon className="size-8 text-purple-500" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;