import Divider from "@/components/atoms/Divider";
import Image from "@rasenganjs/image";
import logo from "@/assets/logo.svg";
import Avatar from "@/components/atoms/Avatar";
import Typography from "@/components/atoms/Typography";

import avatar from "@/assets/images/avatar.png";
import GroupNavItems from "@/components/molecules/GroupNavItems";
import NavItem from "@/components/atoms/NavItem";
import { useLocation } from "rasengan";
import { useCallback } from "react";

export default function SideBar() {
	const { pathname } = useLocation();

	const isActive = useCallback(
		(path: string) => {
			// To handle the case where path = /
			if (pathname === path) {
				return true;
			}

			return pathname.startsWith(path) && path !== "/";
		},
		[pathname]
	);

	return (
		<aside className='w-[300px] h-screen bg-white border-[1px] border-border flex flex-col justify-between items-start p-4 pt-0'>
			<div className='w-full'>
				<div>
					<div className='h-[80px] flex items-center justify-between'>
						<Image src={logo} alt='Rasengan.js' width={170} height={"auto"} />

						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width={20}
							height={20}
							fill={"none"}
							className='text-foreground cursor-pointer'
						>
							<path
								d='M4 5L20 5'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M4 12L20 12'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M4 19L20 19'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>

					<Divider />
				</div>

				<div className='w-full flex flex-col items-center gap-4 pt-4'>
					<GroupNavItems title='Data managing'>
						<NavItem title='Dashboard' active={isActive("/")} href='/'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								width={20}
								height={20}
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
						</NavItem>

						<NavItem
							title='Data Visualization'
							active={isActive("/charts")}
							href='/charts'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								width={20}
								height={20}
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
						</NavItem>
					</GroupNavItems>

					<GroupNavItems title='UI Elements' className='flex-1'>
						<NavItem
							title='Atoms'
							active={isActive("/ui/atoms")}
							href='/ui/atoms'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								width={20}
								height={20}
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
						</NavItem>

						<NavItem
							title='Molecules'
							active={isActive("/ui/molecules")}
							href='/ui/molecules'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								width={20}
								height={20}
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
						</NavItem>
					</GroupNavItems>

					<GroupNavItems title='Organisms' className='flex-1'>
						<NavItem
							title='Forms'
							active={isActive("/organisms/forms")}
							href='/organisms/forms'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								width={20}
								height={20}
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
						</NavItem>
					</GroupNavItems>
				</div>
			</div>

			<div className='w-full flex items-center gap-4'>
				<div className='rounded-full border-2 border-primary-400 p-[2px]'>
					<Avatar src={avatar} />
				</div>

				<div className='flex flex-col'>
					<Typography text='BAHA Ephraim' className='font-bold text-md' />
					<Typography
						text='@jeansamist - Admin'
						className='font-light'
						isSmall
					/>
				</div>
			</div>
		</aside>
	);
}
