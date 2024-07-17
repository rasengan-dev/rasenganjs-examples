import clsx from "clsx";
import Typography from "../atoms/Typography";

interface GroupNavItemsProps {
	children: React.ReactNode;
	title: string;
	className?: string;
}

/**
 * Renders a group of navigation items with a title.
 *
 * @param {GroupNavItemsProps} props - The component props.
 * @param {React.ReactNode} props.children - The navigation items to render.
 * @param {string} props.title - The title of the navigation group.
 * @param {string} [props.className] - An optional CSS class name to apply to the container.
 * @returns {React.ReactElement} The rendered group of navigation items.
 */
export default function GroupNavItems({
	children,
	title,
	className,
}: GroupNavItemsProps): React.ReactElement {
	return (
		<div className={clsx("w-full flex flex-col mt-2", className)}>
			<Typography text={title} className='font-light text-xs' />

			<div className='flex flex-col w-[95%] ml-auto mt-4 gap-2'>{children}</div>
		</div>
	);
}
