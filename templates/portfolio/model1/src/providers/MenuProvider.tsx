import React, {useState} from 'react';
import {NavigationContext} from '@/contexts/NavigationContext';

const navlinks : {label:string; href:string}[] = [
     {label: "Home", href: "#home"},
     {label: "About", href: "#about"},
     {label: "Project", href: "#project"},
     {label: "Testimonial", href: "#testimonial"},
     {label: "Service", href: "#service"},
     {label: "Article", href: "#article"},
]


const MenuProvider = ({children}: {children: React.ReactNode}) =>{
     const [isActive, setIsActive] = useState(false);

     return (
          <NavigationContext.Provider value={{isActive, setIsActive, navlinks}}>
               {children}
          </NavigationContext.Provider>
     )
}

export default MenuProvider;