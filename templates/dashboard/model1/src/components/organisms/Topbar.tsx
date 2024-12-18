import {
  Atom01Icon,
  Search01Icon,
  Home02Icon,
  Analytics02Icon,
  MoleculesIcon,
  ProfileIcon,
} from "hugeicons-react";
import { FunctionComponent, useMemo } from "react";
import { Input } from "../atoms/input";
import { useLocation } from "rasengan";

export type TopbarProps = {};

export const Topbar: FunctionComponent<TopbarProps> = () => {
  const { pathname } = useLocation();

  const { title, icon } = useMemo(() => {
    if (pathname === "/") {
      return {
        title: "Dashboard",
        icon: <Home02Icon size={24} />,
      };
    }

    if (pathname.startsWith("/charts")) {
      return {
        title: "Charts",
        icon: <Analytics02Icon size={24} />,
      };
    }

    if (pathname.startsWith("/ui/atoms")) {
      return {
        title: "Atoms",
        icon: <Atom01Icon size={24} />,
      };
    }

    if (pathname.startsWith("/ui/molecules")) {
      return {
        title: "Molecules",
        icon: <MoleculesIcon />,
      };
    }

    if (pathname.startsWith("/organisms/forms")) {
      return {
        title: "Forms",
        icon: <ProfileIcon size={24} />,
      };
    }

    return {
      title: "",
      icon: null,
    };
  }, [pathname]);
  return (
    <nav
      className={
        "h-24 flex bg-white border-b border-border px-6 items-center justify-between"
      }
    >
      <div className="flex items-center gap-4 text-primary">
        {icon}
        <span className="font-semibold text-2xl text-title">{title}</span>
      </div>
      <Input
        lefticon={Search01Icon}
        type="text"
        placeholder="Search some thing"
      />
    </nav>
  );
};
