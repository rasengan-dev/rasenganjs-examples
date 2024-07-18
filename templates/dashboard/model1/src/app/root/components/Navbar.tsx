import Typography from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";
import { useLocation } from "rasengan";
import { useMemo } from "react";
import {
	Home02Icon,
	Analytics02Icon,
	Atom01Icon,
	MoleculesIcon,
	ProfileIcon,
	Search01Icon,
} from "hugeicons-react";

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
				icon: <Home02Icon size={20} />,
			};
		}

		if (pathname.startsWith("/charts")) {
			return {
				title: "Charts",
				icon: <Analytics02Icon size={20} />,
			};
		}

		if (pathname.startsWith("/ui/atoms")) {
			return {
				title: "Atoms",
				icon: <Atom01Icon size={20} />,
			};
		}

		if (pathname.startsWith("/ui/molecules")) {
			return {
				title: "Molecules",
				icon: <MoleculesIcon />,
			};
		}

		if (pathname.startsWith("/organisms/forms")) {
			return {
				title: "Forms",
				icon: <ProfileIcon size={20} />,
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
				<i className='text-primary-500'>{icon}</i>
				<Typography text={title} className='font-medium text-xl' />
			</div>

			<Input placeholder='Search something...' className='w-[250px]'>
				<Search01Icon size={20} />
			</Input>
		</header>
	);
}
