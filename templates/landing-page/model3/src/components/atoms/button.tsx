import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
}

export function Button(props: Props) {
  return (
    <button 
      {...props}
      className="bg-primary bg-opacity-80 duration-150 hover:bg-opacity-100 text-white h-12 w-40 font-medium flex justify-center items-center gap-x-1"
    >
      {props.children}
      {props.icon}
    </button>
  )
}