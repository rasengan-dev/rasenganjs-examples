import { ComponentProps } from "react";

interface TypographyProps {
	text: string;
	className?: ComponentProps<"button">["className"];
	isSmall?: boolean;
}

/**
 * Renders a typography component with the specified text, class name, and font weight.
 *
 * @param {TypographyProps} props - The props for the typography component.
 * @param {string} props.text - The text to be displayed.
 * @param {string} [props.className] - An optional class name to be applied to the component.
 * @param {boolean} [props.isSmall] - Whether the font size should be small.
 * @returns {React.ReactElement} - The rendered typography component.
 */
export default function Typography({
	text,
	isSmall = false,
	className
}: TypographyProps): React.ReactElement {
	return isSmall ? (
		<small className={`${className}`}>{text}</small>
	) : (
		<p className={`${className}`}>{text}</p>
	);
}
