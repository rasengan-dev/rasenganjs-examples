import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {

}

export function UiUxDesignSVG(props: Props) {
  return (
    <svg {...props} viewBox="0 0 32 32" fill="none">
      <path d="M17.3467 3.89333L25.2133 7.38667C27.48 8.38667 27.48 10.04 25.2133 11.04L17.3467 14.5333C16.4533 14.9333 14.9867 14.9333 14.0933 14.5333L6.22667 11.04C3.96 10.04 3.96 8.38667 6.22667 7.38667L14.0933 3.89333C14.9867 3.49333 16.4533 3.49333 17.3467 3.89333Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 14.6667C4 15.7867 4.84 17.08 5.86667 17.5333L14.92 21.56C15.6133 21.8667 16.4 21.8667 17.08 21.56L26.1333 17.5333C27.16 17.08 28 15.7867 28 14.6667" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 21.3333C4 22.5733 4.73333 23.6933 5.86667 24.2L14.92 28.2267C15.6133 28.5333 16.4 28.5333 17.08 28.2267L26.1333 24.2C27.2667 23.6933 28 22.5733 28 21.3333" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}