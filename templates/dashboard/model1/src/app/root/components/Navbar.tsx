import Typography from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";

export default function Navbar() {
	return (
		<header className='w-full h-[80px] border-b-[1px] border-b-border bg-white flex p-4 items-center justify-between'>
			<Typography text='Dashboard' className='font-medium text-xl' />

			<Input placeholder='Hello'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					width={20}
					height={20}
          className="text-foreground"
					fill={"none"}
				>
					<path
						d='M17.5 17.5L22 22'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinejoin='round'
					/>
				</svg>
			</Input>
		</header>
	);
}
