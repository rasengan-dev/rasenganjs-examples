import Divider from "@/components/atoms/Divider";
import Image from "@rasenganjs/image";
import logo from "@/assets/logo-text.svg";

export default function SideBar() {
  return (
		<aside className='w-[300px] h-screen bg-white border-[1px] border-border flex flex-col justify-between items-start p-4 pt-0'>
			<div className='w-full'>
				<div>
					<div className='h-[80px] flex items-center justify-between'>
						<Image src={logo} alt='Rasengan.js' width={140} height={"auto"} />

						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width={20}
							height={20}
							fill={"none"}
              className="text-foreground"
						>
							<path
								d='M4 5L20 5'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M4 12L20 12'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M4 19L20 19'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>

					<Divider />
				</div>
			</div>

			<div>Avatar</div>
		</aside>
	);
}