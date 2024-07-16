import clsx from "clsx";
import { ComponentProps } from "react";

interface InputProps extends Omit<ComponentProps<"input">, "size"> {
	children?: React.ReactNode;
	size?: "small" | "medium" | "large";
}

/**
 * Renders an input component with optional label and size variations.
 *
 * @param children - Optional React node to be rendered as a label inside the input.
 * @param size - Optional size of the input, can be "small", "medium", or "large".
 * @param className - Optional additional CSS classes to apply to the input.
 * @param rest - Remaining props to be passed to the underlying `input` element.
 * @returns A React component that renders an input with optional label and size variations.
 */
export default function Input({
	children,
	size = "small",
	className,
	...rest
}: InputProps) {
	return (
		<div className='relative w-auto h-auto'>
			<input
				{...rest}
				className={clsx(
					"w-full px-4 py-4 rounded-md text-sm font-light bg-transparent border-[1px] border-border outline-primary transition-all placeholder-slate-400 placeholder-light",
					children ? "pl-12" : "",
          size === "small" ? "h-10" : size === "medium" ? "h-14" : "h-18",
					className
				)}
			/>

			<div className='absolute inset-y-0 left-4 top-1/2 -translate-y-1/2 flex items-center justify-center'>
				{children}
			</div>
		</div>
	);
}
