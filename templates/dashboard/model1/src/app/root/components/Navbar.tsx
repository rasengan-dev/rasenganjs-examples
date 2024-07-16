import Typography from "@/components/atoms/Typography";

export default function Navbar() {
	return (
		<header className='w-full h-[80px] border-b-[1px] border-b-border bg-white flex px-8 items-center justify-between'>
			<Typography text='Dashboard' className="font-bold" />
		</header>
	);
}
