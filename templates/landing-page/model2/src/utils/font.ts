/**
 * Returns the appropriate CSS class name for the specified font weight.
 *
 * @param weight - The font weight to get the class name for.
 * @returns The CSS class name for the specified font weight.
 */
export const getFont = (weight: string) => {
  switch (weight) {
    case "normal":
      return "font-normal";
    case "bold":
      return "font-bold";
    case "light":
      return "font-light";
    case "medium":
      return "font-medium";
    case "semibold":
      return "font-semibold";
    case "extrabold":
      return "font-extrabold";
    case "black":
      return "font-black";
    case "extralight":
      return "font-extralight";
    case "thin":
      return "font-thin";
    default:
      return "font-normal";
  }
}