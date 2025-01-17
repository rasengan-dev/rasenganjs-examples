import { Link } from "rasengan";
import { ComponentProps } from "react";

interface NavItemProps {
	children?: React.ReactNode;
	text: string;
	href?: string;
	className?: ComponentProps<"button">["className"];
	isActive?: boolean;
	onClick?: () => void;
}

export default function NavItem({
	children,
	text,
	href = "#",
	className,
	isActive,
	onClick
}: NavItemProps) {
	return (
		<Link to={href} className='flex items-center gap-2' onClick={onClick}>
			<div>{children}</div>
			<p
				className={`font-urbanist font-normal ${className} ${
					isActive ? "text-[#000000]":"text-[#A6A6A6]" 
				}`}
			>
				{text}
			</p>
		</Link>
	);
}
