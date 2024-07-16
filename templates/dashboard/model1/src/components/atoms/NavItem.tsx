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

/**
 * A React component that renders a navigation item with an optional link and active state.
 *
 * @param {NavItemProps} props - The props for the NavItem component.
 * @param {React.ReactNode} [props.children] - The content to be displayed inside the navigation item.
 * @param {string} [props.className] - Additional CSS classes to apply to the navigation item.
 * @param {string} props.title - The title to be displayed for the navigation item.
 * @param {boolean} [props.active] - Whether the navigation item is in the active state.
 * @param {string} [props.href] - The URL to link the navigation item to.
 * @param {() => void} [props.onClick] - A callback function to be called when the navigation item is clicked.
 * @returns {React.ReactElement} - The rendered NavItem component.
 */
export default function NavItem({
	children,
	className,
	title,
	active = false,
	href,
	onClick,
}: NavItemProps): React.ReactElement {
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
