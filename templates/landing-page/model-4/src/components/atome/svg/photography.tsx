import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {

}

export function PhotographySVG(props: Props) {
  return (
    <svg {...props} viewBox="0 0 32 32" fill="none">
      <path d="M9.01333 29.3333H22.9867C26.6667 29.3333 28.1333 27.08 28.3067 24.3333L29 13.32C29.1867 10.44 26.8933 7.99999 24 7.99999C23.1867 7.99999 22.44 7.53332 22.0667 6.81332L21.1067 4.87999C20.4933 3.66666 18.8933 2.66666 17.5333 2.66666H14.48C13.1067 2.66666 11.5067 3.66666 10.8933 4.87999L9.93333 6.81332C9.56 7.53332 8.81333 7.99999 8 7.99999C5.10667 7.99999 2.81333 10.44 3 13.32L3.69333 24.3333C3.85333 27.08 5.33333 29.3333 9.01333 29.3333Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 10.6667H18" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 24C18.3867 24 20.3333 22.0533 20.3333 19.6667C20.3333 17.28 18.3867 15.3333 16 15.3333C13.6133 15.3333 11.6667 17.28 11.6667 19.6667C11.6667 22.0533 13.6133 24 16 24Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  )
}