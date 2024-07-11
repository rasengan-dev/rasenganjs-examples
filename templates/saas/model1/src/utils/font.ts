/**
 * Returns the appropriate CSS class name for the specified font weight.
 *
 * @param weight - The font weight to get the class name for.
 * @returns The CSS class name for the specified font weight.
 */
export const getFont = (weight: string) => {
  switch (weight) {
    case "normal":
      return "font-urbanist-normal";
    case "bold":
      return "font-urbanist-bold";
    case "light":
      return "font-urbanist-light";
    case "medium":
      return "font-urbanist-medium";
    case "semibold":
      return "font-urbanist-semibold";
    case "extrabold":
      return "font-urbanist-extrabold";
    case "black":
      return "font-urbanist-black";
    case "extralight":
      return "font-urbanist-extralight";
    case "thin":
      return "font-urbanist-thin";
    default:
      return "font-urbanist-normal";
  }
}