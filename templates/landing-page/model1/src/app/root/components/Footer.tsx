import AppLogo from "@/components/atoms/AppLogo";
import { Button } from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Typography from "@/components/atoms/Typography";
import { Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer
			className={`bg-footer border-border border-t-[1px] w-full font-poppins-regular`}
		>
			<div
				className={`relative lg:h-[200px] lg:mb-0 mb-10`}
			>
				<section className='flex flex-col justify-center items-center relative lg:absolute lg:-top-[50%] lg:left-1/2 lg:-translate-x-1/2 max-w-[1000px] w-full mx-auto py-10 px-10 md:px-40 bg-primary lg:rounded-lg'>
					<Typography
						text='Subscribe To Our Newsletter And Get The Coupon Code'
						variant='h2'
						className='text-primary-foreground font-poppins-black text-center'
					/>
					<Typography
						text='All your information is completely confidential'
						className='text-primary-foreground font-poppins-regular text-center text-[12px]'
					/>

					<div className='max-w-[400px] w-full rounded-lg p-2 bg-white mt-4 flex items-center'>
						<Input
							className='border-transparent focus:border-transparent focus:ring-0 text-sm'
							placeholder='Type your email'
							icon={<Mail size={20} className='text-primary' />}
						/>

						<Button className='bg-[#FCA61F] text-white rounded-md ml-2'>
							Subscribe
						</Button>
					</div>
				</section>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-[1500px] mx-auto px-10 lg:px-40 py-10'>
				<div className='flex flex-col gap-5'>
					<div className='flex flex-col gap-2'>
						{/* <Typography text="Rasengan" weight="bold" className="text-2xl" /> */}
						<AppLogo size='small' />
						<Typography text='2024 @ Rasengan' />
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
						<Typography text='Facebook' weight='black' />
						<Typography text='Instagram' />
						<Typography text='Twitter' />
						<Typography text='LinkedIn' />
					</div>
				</div>
			</div>
		</footer>
	);
}
