import Typography from "@/components/atoms/Typography";

export default function Footer() {
	return (
		<footer className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 bg-footer text-footer-foreground w-full max-w-[1500px] mx-auto px-10 lg:px-40 py-10'>
			<div className='flex flex-col gap-5'>
				<div className='flex flex-col gap-2'>
					<Typography text='Biccas' weight='bold' className='text-2xl' />
					<Typography text='2024 @ Biccas' />
					<Typography text='All rights reserved' />
				</div>
			</div>

			<div className='flex flex-col gap-5'>
				<Typography text='Company' weight='bold' className='text-lg' />

				<div className='flex flex-col gap-2'>
					<Typography text='About' />
					<Typography text='Blog' />
					<Typography text='Careers' />
					<Typography text='Contact' />
					<Typography text='Help Center' />
				</div>
			</div>

			<div className='flex flex-col gap-5'>
				<Typography text='Legal' weight='bold' className='text-lg' />

				<div className='flex flex-col gap-2'>
					<Typography text='Cookies Policy' />
					<Typography text='Privacy Policy' />
					<Typography text='Terms of Service' />
				</div>
			</div>

			<div className='flex flex-col gap-5'>
				<Typography text='Socials' weight='bold' className='text-lg' />

				<div className='flex flex-col gap-2'>
					<Typography text='Facebook' />
					<Typography text='Instagram' />
					<Typography text='Twitter' />
					<Typography text='LinkedIn' />
				</div>
			</div>
		</footer>
	);
}
