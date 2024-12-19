import MenuContext from "@/contexts/MenuContext";
import React from "react";

export const useMenuContext = () => {
  const menuContext = React.useContext(MenuContext);

  if (!menuContext) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }

  return menuContext;
};
