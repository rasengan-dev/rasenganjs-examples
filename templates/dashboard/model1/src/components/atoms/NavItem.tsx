import clsx from "clsx";
import React, { ComponentProps } from "react";
import Typography from "./Typography";
import { Link } from "rasengan";

interface NavItemProps {
	children?: React.ReactNode;
	className?: ComponentProps<"div">["className"];
	title: string;
	active?: boolean;
	href?: string;
	onClick?: () => void;
}

export default function NavItem({
	children,
	className,
	title,
	active = false,
	href,
	onClick,
}: NavItemProps) {
	return (
		<React.Fragment>
			{href ? (
				<Link to={href}>
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
				</Link>
			) : (
				<div
					className={clsx(
						"w-full h-10 rounded-md px-4 flex flex-row items-center justify-between transition-all duration-300 cursor-pointer",
						className,
						active ? "bg-primary-100 text-primary-500" : "hover:bg-primary-50"
					)}
					onClick={onClick}
				>
					<div className='flex items-center gap-3'>
						{children}
						<Typography text={title} className='font-light text-md' />
					</div>
				</div>
			)}
		</React.Fragment>
	);
}
