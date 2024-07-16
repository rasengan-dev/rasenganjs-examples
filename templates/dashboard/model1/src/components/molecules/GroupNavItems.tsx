import clsx from "clsx";
import Typography from "../atoms/Typography";

interface GroupNavItemsProps {
	children: React.ReactNode;
	title: string;
	className?: string;
}

export default function GroupNavItems({
	children,
	title,
	className,
}: GroupNavItemsProps) {
	return (
		<div className={clsx("w-full flex flex-col mt-2", className)}>
			<Typography text={title} className='font-light text-xs' />

			<div className='flex flex-col w-[95%] ml-auto mt-4 gap-2'>{children}</div>
		</div>
	);
}
