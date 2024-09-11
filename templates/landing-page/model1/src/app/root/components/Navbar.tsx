import { Button } from "@/components/atoms/Button";
import NavItem from "@/components/atoms/NavItem";
import Typography from "@/components/atoms/Typography";
import { useLocation } from "rasengan";
import { useState } from "react";
import { Link } from "rasengan";
import AppLogo from "@/components/atoms/AppLogo";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
	const { pathname } = useLocation();
	const [displayMobileNav, setDisplayMobileNav] = useState<boolean>(false);

	const isActive = (path: string) => pathname === path;
	const toogleMobileNav = () => {
		setDisplayMobileNav((prev) => !prev);
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 w-full h-[80px] flex items-center z-50 border-b-[1px] border-border bg-background/90 backdrop-blur-3xl backdrop-sepia-0`}
		>
			<div className='w-full max-w-[1500px] mx-auto flex items-center justify-between px-7 lg:px-32'>
				<Link to='/'>
					<AppLogo />
				</Link>

				<div className={`flex items-center gap-8`}>
					<nav
						className={`hidden xl:flex items-center gap-6 ml-10 text-foreground`}
					>
						<NavItem text='Home' href='#home' isActive={isActive("/")} />
						<NavItem
							text='About us'
							href='#about-us'
							isActive={isActive("/pricing")}
						/>
						<NavItem
							text='Services'
							href='#services'
							isActive={isActive("/about-us")}
						/>
						<NavItem
							text='Blog'
							href='#blog'
							isActive={isActive("/about-us")}
						/>
						<NavItem
							text='Contact us'
							href='#contact-us'
							isActive={isActive("/contact")}
						/>
					</nav>
				</div>

				<div className='flex items-center gap-1'>
					<div className='hidden xl:flex items-center gap-2'>
						<Link to='/auth/sign-in'>
							<Button
								variant={"outline"}
								className={`w-[6rem] border-transparent text-primary hover:text-primary`}
							>
								Log in
							</Button>
						</Link>
						<Link to='/auth/register'>
							<Button
								variant={"outline"}
								className={`border-primary text-primary hover:text-primary w-[6rem]`}
							>
								Sign up
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
