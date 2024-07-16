import { ComponentProps } from "react";

interface TypographyProps {
	text: string;
	className?: ComponentProps<"button">["className"];
}

/**
 * Renders a typography component with the specified text, class name, and font weight.
 *
 * @param {TypographyProps} props - The props for the typography component.
 * @param {string} props.text - The text to be displayed.
 * @param {string} [props.className] - An optional class name to be applied to the component.
 * @returns {React.ReactElement} - The rendered typography component.
 */
export default function Typography({
	text,
	className
}: TypographyProps) {
	return <p className={`${className}`}>{text}</p>;
}
