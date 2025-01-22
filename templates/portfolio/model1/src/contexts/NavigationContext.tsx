import { createContext } from "react";

export type NavLink = {
     label: string;
     href: string;
}

export const NavigationContext = createContext<{
     isActive: boolean,
     setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
     navlinks: NavLink[]
} | null>(null);
