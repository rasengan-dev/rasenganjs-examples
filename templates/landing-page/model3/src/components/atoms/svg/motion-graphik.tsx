import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  size: number
}

export function MotionGraphikSVG(props: Props) {
  return (
    <svg {...props} height={props.size} width={props.size} viewBox="0 0 32 32" fill="none">
      <path d="M23.2 25.6667H8.8C6.8 25.6667 6 24.8133 6 22.6933V21.3067C6 19.1867 6.8 18.3333 8.8 18.3333H23.2C25.2 18.3333 26 19.1867 26 21.3067V22.6933C26 24.8133 25.2 25.6667 23.2 25.6667Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.5333 14.3333H11.4667C9.46666 14.3333 8.66666 13.48 8.66666 11.36V9.97333C8.66666 7.85333 9.46666 7 11.4667 7H20.5333C22.5333 7 23.3333 7.85333 23.3333 9.97333V11.36C23.3333 13.48 22.5333 14.3333 20.5333 14.3333Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 29.3333V26.1333" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 17.3333V14.6667" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 2.66666V6.25332" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  )
}