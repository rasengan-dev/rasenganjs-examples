import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  size: number
}

export function DevelopmentSVG(props: Props) {
  return (
    <svg {...props} height={props.size} width={props.size} viewBox="0 0 32 32" fill="none">
      <path d="M12 17.3333C11.12 17.7733 10.3867 18.4267 9.83999 19.24C9.53332 19.7067 9.53332 20.2933 9.83999 20.76C10.3867 21.5733 11.12 22.2267 12 22.6667" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.28 17.3333C21.16 17.7733 21.8933 18.4267 22.44 19.24C22.7467 19.7067 22.7467 20.2933 22.44 20.76C21.8933 21.5733 21.16 22.2267 20.28 22.6667" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 29.3333H20C26.6667 29.3333 29.3333 26.6667 29.3333 20V12C29.3333 5.33333 26.6667 2.66667 20 2.66667H12C5.33332 2.66667 2.66666 5.33333 2.66666 12V20C2.66666 26.6667 5.33332 29.3333 12 29.3333Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.97336 10.68L28.6 10.6667" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}