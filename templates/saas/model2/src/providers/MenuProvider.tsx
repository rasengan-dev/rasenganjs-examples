import MenuContext from "@/contexts/MenuContext";
import React from "react";

const navlinks: { label: string; href: string }[] = [
  { label: "Process", href: "#process" },
  { label: "Benefits", href: "#capabilities" },
  { label: "Services", href: "#pricing" },
  { label: "Portfolio", href: "#works" },
  { label: "FAQ", href: "#faq" },
];

export default function MenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <MenuContext.Provider value={{ isOpened, setIsOpened, navlinks }}>
      {children}
    </MenuContext.Provider>
  );
}
