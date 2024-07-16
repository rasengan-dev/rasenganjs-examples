import clsx from "clsx";
import { ComponentProps, act } from "react";
import Typography from "./Typography";

interface NavItemProps {
	children?: React.ReactNode;
	className?: ComponentProps<"div">["className"];
	title: string;
	active?: boolean;
	onClick?: () => void;
}

export default function NavItem({
	children,
	className,
	title,
	active = false,
	onClick,
}: NavItemProps) {
	return (
		<div
			className={clsx(
				"w-full h-10 rounded-md px-4 flex flex-row items-center justify-between transition-all duration-300 cursor-pointer",
				className,
				active ? "bg-primary-100 text-primary-500" : "hover:bg-primary-50"
			)}
		>
			<div className='flex items-center gap-3'>
				{children}
				<Typography text={title} className='font-light text-md' />
			</div>
		</div>
	);
}
