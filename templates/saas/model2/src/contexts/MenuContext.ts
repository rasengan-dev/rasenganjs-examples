import React from "react";

const MenuContext = React.createContext<{
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  navlinks: { label: string; href: string }[];
} | null>(null);

export default MenuContext;
