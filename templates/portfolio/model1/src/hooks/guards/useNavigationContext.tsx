import { NavigationContext } from "@/contexts/NavigationContext";
import React from "react";

export const useNavigationContext = () =>{
     const navigationContext = React.useContext(NavigationContext) 
          
     if (!navigationContext) {
          throw new Error('NavigationContext is not available at this level');
     }

     return navigationContext;
}
