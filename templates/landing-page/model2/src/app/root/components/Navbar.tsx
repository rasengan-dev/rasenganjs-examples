import Button from "@/components/atoms/Button";
import NavItem from "@/components/atoms/NavItem";
import Typography from "@/components/atoms/Typography";
import { useLocation } from "rasengan";

export default function Navbar() {
	const { pathname } = useLocation();

	const isActive = (path: string) => pathname === path;

	return (
		<header className='w-full max-w-[1500px] mx-auto px-10 lg:px-40 py-8 flex items-center justify-between'>
			<div className='flex items-center gap-8'>
				<Typography
					text='Biccas'
					weight='bold'
					className='text-4xl text-primary'
				/>
			</div>
			<nav className='flex items-center gap-8 ml-10'>
				<NavItem text='Home' href='#home' isActive={isActive("/")} />
				<NavItem
					text='Products'
					href='#products'
					isActive={isActive("/pricing")}
				/>
				<NavItem text='FAQ' href='#faq' isActive={isActive("/faq")} />
				<NavItem text='Blog' href='#blog' isActive={isActive("/blog")} />
				<NavItem text='About Us' href='#about-us' isActive={isActive("/about-us")} />
			</nav>

			<div className='flex items-center gap-2'>
				<Button text='Log in' className='bg-transparent text-foreground' />
				<Button text='Sign up' className='bg-primary text-primary-foreground' />
			</div>
		</header>
	);
}
