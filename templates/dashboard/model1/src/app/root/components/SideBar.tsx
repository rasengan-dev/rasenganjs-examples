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

import {
	Menu01Icon,
	Home02Icon,
	Analytics02Icon,
	Atom01Icon,
	MoleculesIcon,
	ProfileIcon,
} from "hugeicons-react";
import AppLogo from "@/components/atoms/AppLogo";

/**
 * The SideBar component renders the sidebar UI for the application.
 * It includes the logo, navigation items, and user profile information.
 * The component uses the `useLocation` hook from the `rasengan` library to determine the current URL path and highlight the active navigation item accordingly.
 */
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
						<AppLogo size='small' />

						<Menu01Icon size={20} />
					</div>

					<Divider />
				</div>

				<div className='w-full flex flex-col items-center gap-4 pt-4'>
					<GroupNavItems title='Data managing'>
						<NavItem title='Dashboard' active={isActive("/")} href='/'>
							<Home02Icon size={20} />
						</NavItem>

						<NavItem title='Charts' active={isActive("/charts")} href='/charts'>
							<Analytics02Icon size={20} />
						</NavItem>
					</GroupNavItems>

					<GroupNavItems title='UI Elements' className='flex-1'>
						<NavItem
							title='Atoms'
							active={isActive("/ui/atoms")}
							href='/ui/atoms'
						>
							<Atom01Icon size={20} />
						</NavItem>

						<NavItem
							title='Molecules'
							active={isActive("/ui/molecules")}
							href='/ui/molecules'
						>
							<MoleculesIcon />
						</NavItem>
					</GroupNavItems>

					<GroupNavItems title='Organisms' className='flex-1'>
						<NavItem
							title='Forms'
							active={isActive("/organisms/forms")}
							href='/organisms/forms'
						>
							<ProfileIcon size={20} />
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
