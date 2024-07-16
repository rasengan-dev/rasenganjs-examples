import Typography from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";
import { useLocation } from "rasengan";
import { useMemo } from "react";

/**
 * Renders the Navbar component for the application.
 * The Navbar includes a title and a search input with a search icon.
 * The Navbar is positioned at the top of the page and spans the full width.
 */
export default function Navbar() {
	const { pathname } = useLocation();

	const { title, icon } = useMemo(() => {
		if (pathname === "/") {
			return {
				title: "Dashboard",
				icon: (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						width={20}
						height={20}
						className='text-primary-400'
						fill={"none"}
					>
						<path
							d='M12.0002 18L12.0002 15'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
						/>
						<path
							d='M2.35157 13.2135C1.99855 10.9162 1.82204 9.76763 2.25635 8.74938C2.69065 7.73112 3.65421 7.03443 5.58132 5.64106L7.02117 4.6C9.41847 2.86667 10.6171 2 12.0002 2C13.3832 2 14.5819 2.86667 16.9792 4.6L18.419 5.64106C20.3462 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6488 13.2135L21.3478 15.1724C20.8473 18.4289 20.5971 20.0572 19.4292 21.0286C18.2613 22 16.5538 22 13.139 22H10.8614C7.44652 22 5.73909 22 4.57118 21.0286C3.40327 20.0572 3.15305 18.4289 2.65261 15.1724L2.35157 13.2135Z'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinejoin='round'
						/>
					</svg>
				),
			};
		}

		if (pathname.startsWith("/charts")) {
			return {
				title: "Charts",
				icon: (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						width={20}
						height={20}
						className='text-primary-400'
						fill={"none"}
					>
						<path
							d='M6.5 17.5L6.5 14.5M11.5 17.5L11.5 8.5M16.5 17.5V13.5'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
						/>
						<path
							d='M21.5 5.5C21.5 7.15685 20.1569 8.5 18.5 8.5C16.8431 8.5 15.5 7.15685 15.5 5.5C15.5 3.84315 16.8431 2.5 18.5 2.5C20.1569 2.5 21.5 3.84315 21.5 5.5Z'
							stroke='currentColor'
							strokeWidth='1.5'
						/>
						<path
							d='M21.4955 11C21.4955 11 21.5 11.3395 21.5 12C21.5 16.4784 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4784 2.5 12C2.5 7.52169 2.5 5.28252 3.89124 3.89127C5.28249 2.50003 7.52166 2.50003 12 2.50003L13 2.5'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				),
			};
		}

		if (pathname.startsWith("/ui/atoms")) {
			return {
				title: "Atoms",
				icon: (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						width={20}
						height={20}
						className='text-primary-400'
						fill={"none"}
					>
						<circle
							cx='12'
							cy='12'
							r='4'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M22 9H21.99M2.00995 9H2M12.005 22H11.995'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M7.55556 21C4.47364 19.4999 2.37683 16.5285 2 13.1273M16.4444 21C19.5264 19.4999 21.6232 16.5285 22 13.1273M5.55555 4.25658C9.23956 1.24781 14.5382 1.24781 18.2222 4.25658'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				),
			};
		}

		if (pathname.startsWith("/ui/molecules")) {
			return {
				title: "Molecules",
				icon: (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						width={20}
						height={20}
						className='text-primary-400'
						fill={"none"}
					>
						<circle
							cx='12'
							cy='13'
							r='4'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<circle
							cx='12'
							cy='4'
							r='2'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<circle
							cx='4'
							cy='20'
							r='2'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<circle
							cx='20'
							cy='20'
							r='2'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M12 9V6M18.5 18.5L15 16M5.5 18.5L9 16'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				),
			};
		}

		if (pathname.startsWith("/organisms/forms")) {
			return {
				title: "Forms",
				icon: (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						width={20}
						height={20}
						className='text-primary-400'
						fill={"none"}
					>
						<path
							d='M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z'
							stroke='currentColor'
							strokeWidth='1.5'
						/>
						<path
							d='M2.5 12H21.5'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M13 7L17 7'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<circle
							cx='8.25'
							cy='7'
							r='1.25'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<circle
							cx='8.25'
							cy='17'
							r='1.25'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M13 17L17 17'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				),
			};
		}

		return {
			title: "",
			icon: null,
		};
	}, [pathname]);

	return (
		<header className='w-full h-[80px] border-b-[1px] border-b-border bg-white flex p-4 items-center justify-between'>
			<div className='flex items-center gap-2'>
				{icon}
				<Typography text={title} className='font-medium text-xl' />
			</div>

			<Input placeholder='Search something...' className='w-[250px]'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					width={20}
					height={20}
					className='text-foreground'
					fill={"none"}
				>
					<path
						d='M17.5 17.5L22 22'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinejoin='round'
					/>
				</svg>
			</Input>
		</header>
	);
}
