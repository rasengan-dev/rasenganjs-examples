import Button from "@/components/atoms/Button";
import NavItem from "@/components/atoms/NavItem";
import Typography from "@/components/atoms/Typography";
import { useTheme } from "@rasenganjs/theme";
import { useLocation } from "rasengan";
import { ComputerIcon, Moon02Icon, Sun03Icon } from "hugeicons-react";
import { useState } from "react";

export default function Navbar() {
	const { pathname } = useLocation();
	const { theme, setTheme, isDark } = useTheme();

	const [open, setOpen] = useState(false)

	const isActive = (path: string) => pathname === path;

	console.log(theme);

	const themes = [
		{
			label: 'light',
			icon: <Sun03Icon size={24} color={"#000000"} variant={"stroke"} />
		},
		{
			label: 'dark',
			icon: <Moon02Icon size={24} color={"#000000"} variant={"stroke"} />
		},
		{
			label: 'system',
			icon: <ComputerIcon size={24} color={"#000000"} variant={"stroke"} />
		}
	]

	const getThemeIcon = (theme: string) => {
		switch (theme) {
			case 'light':
				return <Sun03Icon size={24} color={"#000000"} variant={"stroke"} />
			case 'dark':
				return <Moon02Icon size={24} color={"#000000"} variant={"stroke"} />
			case 'system':
				return <ComputerIcon size={24} color={"#000000"} variant={"stroke"} />

			default:
				break;
		}
	}

	const handleTheme = (theme: string) => {
		setTheme(theme)
		setOpen(false)
	}
	return (
		<header className={`w-full max-w-[1500px] mx-auto px-10 lg:px-40 py-8 flex items-center justify-between ${isDark ? 'bg-black':'bg-white'}`}>
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
				<Button text='Log in' className='bg-transparent text-black' />
				<Button text='Sign up' className="bg-rasengan-light-primary text-white" />
				
			<div className="relative mx-4 px-4 border-l-2 border-gray-300">
				<div onClick={() => setOpen((prev) => !prev)} className="cursor-pointer">
					{getThemeIcon(theme)}
				</div>
				<div className={`absolute ${!open && 'hidden'} top-8 left-0 bg-gray-300 mt-2 p-2 rounded-lg`}>
					{
						themes.map((theme, index) => (
							<div key={index} className="flex my-1 cursor-pointer" onClick={() => handleTheme(theme.label)}>
								{theme.icon}
								<Typography text={theme.label} className="mx-1" />
							</div>
						))
					}
				</div>
			</div>
			</div>

		</header>
	);
}
