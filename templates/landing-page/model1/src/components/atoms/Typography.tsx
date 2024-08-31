import { getFont } from "@/lib/utils";
import { ComponentProps, useMemo } from "react";

interface TypographyProps {
	id?: ComponentProps<"button">["id"];
	text?: string;
	children?: React.FC<Record<string, unknown>>;
	className?: ComponentProps<"button">["className"];
	weight?: "normal" | "bold" | "light" | "medium" | "black" | "thin";
	variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

/**
 * Renders a typography component with the specified text, class name, and font weight.
 *
 * @param {TypographyProps} props - The props for the typography component.
 * @param {string} props.text - The text to be displayed.
 * @param {string} [props.className] - An optional class name to be applied to the component.
 * @param {string} [props.weight] - The font weight of the text, defaults to "light".
 * @returns {React.ReactElement} - The rendered typography component.
 */
export default function Typography({
	// children: Heading,
	text,
	variant = "p",
	className,
	id,
	weight = "light",
}: TypographyProps): React.ReactElement {
	const Heading = useMemo(() => {
		switch (variant) {
			case "h1":
				return (
					<h1
						className={`${getFont(
							"black"
						)} scroll-m-20 text-4xl tracking-tight lg:text-5xl text-foreground ${className} `}
						id={id}
					>
						{text}
					</h1>
				);

			case "h2":
				return (
					<h2
						className={`${getFont(
							"bold"
						)} ${className} scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0 text-foreground`}
						id={id}
					>
						{text}
					</h2>
				);

			case "h3":
				return (
					<h3
						className={`${getFont(
							"bold"
						)}${className} scroll-m-20 text-2xl tracking-tight text-foreground`}
						id={id}
					>
						{text}
					</h3>
				);

			case "h4":
				return (
					<h4
						className={`${getFont(
							"medium"
						)}${className} scroll-m-20 text-xl tracking-tight text-foreground`}
						id={id}
					>
						{text}
					</h4>
				);

			case "p":
				return (
					<p
						className={`${getFont(
							"normal"
						)} ${className} leading-7 text-foreground`}
						id={id}
					>
						{text}
					</p>
				);

			default:
				return (
					<p
						className={`${getFont(
							"normal"
						)} ${className} leading-7 text-foreground`}
						id={id}
					>
						{text}
					</p>
				);
		}
	}, []);

	return Heading;
}
