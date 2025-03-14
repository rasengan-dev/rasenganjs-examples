import { ComponentProps } from "react";

interface ButtonWithLogoProps {
	children?: React.ReactNode;
	text: string;
	logo: React.ReactNode; // Accepts any React Node for the logo
	className?: ComponentProps<"button">["className"];
}

/**
 * Renders a button component with a logo and the provided text.
 *
 * @param {ButtonWithLogoProps} props - The props for the button component.
 * @param {React.ReactNode} [props.children] - Optional children to render inside the button.
 * @param {string} props.text - The text to display on the button.
 * @param {React.ReactNode} props.logo - The logo to display alongside the text.
 * @param {string} [props.className] - Additional class names for the button.
 * @returns {JSX.Element} - The rendered button component with a logo.
 */
export default function ButtonWithLogo({
	children,
	text,
	logo,
	className,
}: ButtonWithLogoProps): JSX.Element {
	return (
		<button
			className={`${className} flex justify-center items-center gap-2`}
		>
			<span className="flex-shrink-0">{logo}</span>

			<p className="font-urbanist-medium">{text}</p>

           <div>{children}</div>
		</button>
	);
}
