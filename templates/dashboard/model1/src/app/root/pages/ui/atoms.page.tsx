import Input from "@/components/atoms/Input";
import NavItem from "@/components/atoms/NavItem";
import CardContainer from "@/components/molecules/CardContainer";
import { PageComponent } from "rasengan";
import {
	Home02Icon,
	Atom01Icon,
	CallIcon,
	UserSharingIcon,
} from "hugeicons-react";

const Atoms: PageComponent = () => {
	return (
		<section className=''>
			{/* Inputs */}
			<CardContainer title='Simple Inputs'>
				<section className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
					<Input placeholder='Input without label and icon' fullWidth />
					<Input placeholder='Input with icon' fullWidth>
						<UserSharingIcon size={20} />
					</Input>
					<Input
						placeholder='Input with icon'
						className='border-warning-400'
						fullWidth
					>
						<CallIcon size={20} />
					</Input>
					<Input
						placeholder='Input with icon'
						className='border-success-400'
						fullWidth
					>
						<CallIcon size={20} />
					</Input>
				</section>
			</CardContainer>

			<CardContainer title='Sidebar buttons'>
				<section className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					<NavItem title='Dashboard'>
						<Home02Icon size={20} />
					</NavItem>
					<NavItem title='Atoms'>
						<Atom01Icon size={20} />
					</NavItem>
					<NavItem title='Dashboard' active>
						<Home02Icon size={20} />
					</NavItem>
					<NavItem title='Atoms' active>
						<Atom01Icon size={20} />
					</NavItem>
				</section>
			</CardContainer>
		</section>
	);
};

Atoms.path = "/ui/atoms";
Atoms.metadata = {
	title: "Atoms | Rasengan.js",
	description: "Atoms page",
};

export default Atoms;
