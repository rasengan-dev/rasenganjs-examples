import { SVGAttributes } from "react";

export function Arrow(props: SVGAttributes<SVGElement>) {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
      <path d="M8 7.5C8 6.94772 8.44772 6.5 9 6.5L17 6.5C17.5523 6.5 18 6.94772 18 7.5V15.5C18 16.0523 17.5523 16.5 17 16.5C16.4477 16.5 16 16.0523 16 15.5V9.91421L7.70711 18.2071C7.31658 18.5976 6.68342 18.5976 6.29289 18.2071C5.90237 17.8166 5.90237 17.1834 6.29289 16.7929L14.5858 8.5L9 8.5C8.44772 8.5 8 8.05228 8 7.5Z" fill="white"/>
    </svg>
  )
}