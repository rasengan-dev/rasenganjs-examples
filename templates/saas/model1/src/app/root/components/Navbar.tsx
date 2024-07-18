import Button from "@/components/atoms/Button";
import NavItem from "@/components/atoms/NavItem";
import ThemeToggler from "@/components/atoms/ThemeToggler";
import Typography from "@/components/atoms/Typography";
import { Link, useLocation } from "rasengan";

export default function Navbar() {
	const { pathname } = useLocation();

	const isActive = (path: string) => pathname === path;

	return (
		<header
			className={`w-full max-w-[1500px] mx-auto px-10 lg:px-40 py-8 flex items-center justify-between`}
		>
			<div className='flex items-center gap-8'>
				<Typography text='Rasengan' weight='bold' className='text-3xl' />

				<nav className='flex items-center gap-8 ml-10'>
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
		</header>
	);
}
