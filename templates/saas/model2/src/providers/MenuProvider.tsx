import React, { createContext } from "react";

const navlinks: { label: string; href: string }[] = [
  { label: "Process", href: "#process" },
  { label: "Benefits", href: "#capabilities" },
  { label: "Services", href: "#pricing" },
  { label: "Porfolio", href: "#works" },
  { label: "FAQ", href: "#faq" },
];

export const MenuContext = createContext<{
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  navlinks: { label: string; href: string }[];
} | null>(null);

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <MenuContext.Provider value={{ isOpened, setIsOpened, navlinks }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
