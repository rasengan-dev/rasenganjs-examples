import { ComponentProps } from "react";

interface ContainerProps {
	children?: React.ReactNode;
	className?: ComponentProps<"div">["className"];
	variant?: "default" | "double";
	transparent?: boolean;
}

export default function Container({
	children,
	className,
	variant = "default",
	transparent = false
}: ContainerProps): JSX.Element {
	return (
		<div className='relative'>
			<div
				className={`relative z-10 w-full max-sm:h-full max-md:h-[800px] flex flex-col-reverse md:flex-row items-center justify-between max-w-[1500px] mx-auto p-10 min-h-[350px] rounded-2xl ${
					!transparent && "shadow-lg bg-white"
				} mb-10 ${className}`}
			>
				{children}
			</div>

			{variant === "double" && (
				<div
					className={`z-0 absolute -bottom-5 scale-95 left-0 w-full h-[100px] rounded-2xl ${
						!transparent && "shadow-lg bg-white"
					}`}
				></div>
			)}
		</div>
	);
}
