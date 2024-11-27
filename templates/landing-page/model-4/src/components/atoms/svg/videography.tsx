import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  size: number
}

export function VideographySVG(props: Props) {
  return (
    <svg {...props} height={props.size} width={props.size} viewBox="0 0 32 32" fill="none" >
      <path d="M29.3333 20V12C29.3333 5.33332 26.6667 2.66666 20 2.66666H12C5.33332 2.66666 2.66666 5.33332 2.66666 12V20C2.66666 26.6667 5.33332 29.3333 12 29.3333H20C26.6667 29.3333 29.3333 26.6667 29.3333 20Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.35999 9.47998H28.64" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.36 2.81332V9.29332" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.64 2.81332V8.69332" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 19.2667V17.6667C13 15.6133 14.4533 14.7733 16.2267 15.8L17.6133 16.6L19 17.4C20.7733 18.4267 20.7733 20.1067 19 21.1333L17.6133 21.9333L16.2267 22.7333C14.4533 23.76 13 22.92 13 20.8667V19.2667V19.2667Z" stroke="inherit" strokeWidth="2" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}