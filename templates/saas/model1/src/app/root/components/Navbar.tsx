import Button from "@/components/atoms/Button";
import NavItem from "@/components/atoms/NavItem";
import ThemeToggler from "@/components/atoms/ThemeToggler";
import Typography from "@/components/atoms/Typography";
import { useState } from "react";
import { Cancel01Icon, Menu11Icon } from "hugeicons-react";
import { Link, useLocation } from "rasengan";

export default function Navbar() {
	const { pathname } = useLocation();

	const isActive = (path: string) => pathname === path;
	const [displayMobileNav, setDisplayMobileNav] = useState<boolean>(false)

	const toogleMobileNav = () => {
		setDisplayMobileNav((prev) => !prev)
	}

	return (
		<header
			className={`w-full  relative z-50 max-w-[1500px] mx-auto px-7  lg:px-40 py-5 lg:py-8 flex items-center justify-between `}
		>
			<div className='flex  items-center gap-8'>
				<Typography text='Rasengan' weight='bold' className='text-2xl lg:text-3xl' />

				<nav className='hidden lg:flex items-center gap-8 ml-10  '>
					<NavItem text='Home' href='/' isActive={isActive("/")} />
					<NavItem
						text='Pricing'
						href='/pricing'
						isActive={isActive("/pricing")}
					/>
					<NavItem
						text='About us'
						href='/about-us'
						isActive={isActive("/about-us")}
					/>
					<NavItem
						text='Contact'
						href='/contact'
						isActive={isActive("/contact")}
					/>

				</nav>
				{/* Mobile Nabar */}

				<nav className={`absolute !-z-40 left-0 ${displayMobileNav ? 'top-[100%]' : '-top-[500%] '} flex flex-col w-full md:flex-row justify-between py-7  px-10 md:px-6  md:pt-16  bg-white shadow-md  transition-all duration-500 ease-in-out `}>
					<div className="flex flex-col md:flex-row gap-3">
						<NavItem text='Home' href='/' isActive={isActive("/")} />
						<NavItem
							text='Pricing'
							href='/pricing'
							isActive={isActive("/pricing")}
						/>
						<NavItem
							text='About us'
							href='/about-us'
							isActive={isActive("/about-us")}
						/>
						<NavItem
							text='Contact'
							href='/contact'
							isActive={isActive("/contact")}
						/> </div>
					<div className="flex flex-col md:flex-row items-baseline gap-2 mt-5 md:mt-0 md:">
						<Button text='Log in' className='bg-transparent text-black   ' />
						<Button
							text='Sign up'
							className='bg-rasengan-light-primary text-white '
						/>
					</div>
				</nav>
			</div>

			<div className='flex items-center gap-1'>
				<Link to='/auth/sign-in'>
					<Button text='Log in' className='bg-transparent text-black' />
				</Link>
				<Link to='/auth/sign-up'>
					<Button
						text='Sign up'
						className='bg-rasengan-light-primary text-white'
					/>
				</Link>

				<ThemeToggler />
			</div>

			<div className="flex lg:hidden items-center gap-1">
				<ThemeToggler />
				{displayMobileNav ? <Cancel01Icon size={18} color={"#000000"} onClick={toogleMobileNav} /> : <Menu11Icon size={18} color={"#000000"} onClick={toogleMobileNav} />}
			</div>
		</header>
	);
}
