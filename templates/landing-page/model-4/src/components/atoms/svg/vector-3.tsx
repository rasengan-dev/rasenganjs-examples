import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  size: number
}

export function Vector3(props: Props) {
  return (
    <svg 
      {...props} 
      width={props.size} 
      height={props.size} 
      viewBox="0 0 34 34" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 0.333374C18.1506 0.333374 19.0833 1.26611 19.0833 2.41671V14.9167H31.5833C32.7339 14.9167 33.6666 15.8495 33.6666 17.0001C33.6666 18.1506 32.7339 19.0834 31.5833 19.0834H19.0833V31.5834C19.0833 32.734 18.1506 33.6667 17 33.6667C15.8494 33.6667 14.9166 32.734 14.9166 31.5834V19.0834H2.41665C1.26605 19.0834 0.333313 18.1506 0.333313 17.0001C0.333313 15.8495 1.26605 14.9167 2.41665 14.9167H14.9166V2.41671C14.9166 1.26611 15.8494 0.333374 17 0.333374Z" fill="#E7E7E7"/>
    </svg>
  )
}