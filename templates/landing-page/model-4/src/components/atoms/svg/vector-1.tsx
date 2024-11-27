import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {

}

export function Vector1(props: Props) {
  return (
    <svg {...props}  width="51" height="60" viewBox="0 0 51 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18.5" stroke="white" stroke-width="3"/>
      <circle cx="31" cy="40" r="19.5" stroke="white"/>
    </svg>
  )
}