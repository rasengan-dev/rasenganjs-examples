import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  size: number
}

export function Vector1(props: Props) {
  return (
    <svg {...props}  
      width={props.size} 
      height={props.size + 9} 
      viewBox="0 0 51 60" 
      fill="none" 
    >
      <circle cx="20" cy="20" r="18.5" stroke="white" strokeWidth="3"/>
      <circle cx="31" cy="40" r="19.5" stroke="white"/>
    </svg>
  )
}