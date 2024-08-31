import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Returns the appropriate CSS class name for the specified font weight.
 *
 * @param weight - The font weight to get the class name for.
 * @returns The CSS class name for the specified font weight.
 */
export const getFont = (weight: string) => {
  switch (weight) {
    case 'normal':
      return 'font-poppins-regular';
    case 'bold':
      return 'font-poppins-bold';
    case 'light':
      return 'font-poppins-light';
    case 'medium':
      return 'font-poppins-medium';
    case 'black':
      return 'font-poppins-black';
    case 'thin':
      return 'font-poppins-thin';
    default:
      return "font-poppins-regular";
  }
};