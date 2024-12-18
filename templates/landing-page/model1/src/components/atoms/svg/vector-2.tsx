import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  size: number,
}

export function Vector2(props: Props) {
  return (
    <svg 
      {...props} 
      width={props.size} 
      height={props.size} 
      viewBox="0 0 106 121" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32.5135 78.1455L33.8715 20.1376L83.4287 50.3176L32.5135 78.1455Z" stroke="#E7E7E7" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M37.0689 100.854L38.508 39.3827L91.0239 71.3644L37.0689 100.854Z" stroke="#E7E7E7" strokeLinejoin="round"/>
    </svg>
  )
}