import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  size: number
}

export function Vector4(props: Props) {
  return (
    <svg {...props} 
      width={props.size + 67}
      height={props.size} 
      viewBox="0 0 99 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 2L25.2781 26.2247L39.7483 8.60674L57.0497 26.2247L75.9238 8.60674L97 30" stroke="#E7E7E7" strokeWidth="4"/>
    </svg>
  )
}