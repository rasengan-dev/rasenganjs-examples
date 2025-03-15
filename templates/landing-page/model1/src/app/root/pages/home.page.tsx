import { PageComponent, Link } from "rasengan";
import logo from "@/assets/logo.svg";
import Image from "@rasenganjs/image";

import hero from "@/assets/images/hero.png";
import candle from "@/assets/icons/candle.svg";
import { Button } from "@/components/atoms/Button";
import { community, totalDownloads, totalUsers } from "@/assets/icons";

const Home: PageComponent = () => {
	return (
		<section className='w-full h-full min-h-screen bg-background text-foreground flex flex-col items-center py-8  font-comfortaa lg:pt-[200px] lg:mb-[200px]'>
			<div className='h-auto min-h-[800px] lg:min-h-[600px] w-full flex flex-col pt-[200px] lg:pt-0'>
				<div className='w-full relative flex flex-row items-center py-8 font-comfortaa'>
					<div className='w-full lg:w-3/5 relative lg:ps-20 flex flex-col justify-center items-center lg:items-start'>
						<h1 className='font-bold text-[46px] leading-[52.8px] text-center lg:text-left'>
							Committed to People
							<br />
							Committed to <span className='text-primary'>The Future</span>
						</h1>
						<p className='font-normal text-[16px] leading-[26px] lg:w-3/4 my-4 text-center lg:text-left'>
							An enim nullam tempor sapien gravida donec enim ipsum porta justo
							congue magna at{" "}
						</p>
						<Button>Get Started Now</Button>

						<div className='absolute top-0 left-1/2 -translate-y-[100px] lg:top-0 lg:-left-4 lg:-translate-y-0'>
							<Image src={candle} alt='candle' width={100} height={"100px"} />
						</div>
					</div>
					<div className='image absolute right-[50px] h-full w-2/5 hidden lg:block'>
						<Image src={hero} alt='hero' width={500} height={"auto"} />
					</div>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mt-[50px] lg:mt-[150px]'>
					<div className='flex flex-col lg:flex-row  mx-auto justify-center items-center w-[250px]'>
						<Image src={community} alt='community' width={100} height={100} />
						<div className='ms-2 flex flex-col items-center lg:itemx-start'>
							<h2 className='font-semibold text-[28px] leading-[42.4px] '>
								15K +
							</h2>
							<p className='font-normal text-[14px] leading-[22.4px] '>
								Active user
							</p>
						</div>
					</div>
					<div className='flex flex-col lg:flex-row  mx-auto justify-center items-center w-[250px]'>
						<Image
							src={totalDownloads}
							alt='community'
							width={100}
							height={100}
						/>
						<div className='ms-2 flex flex-col items-center lg:itemx-start'>
							<h2 className='font-semibold text-[28px] leading-[42.4px] '>
								30K
							</h2>
							<p className='font-normal text-[14px] leading-[22.4px] '>
								Total Download
							</p>
						</div>
					</div>
					<div className='flex flex-col lg:flex-row  mx-auto justify-center items-center w-[250px]'>
						<Image src={totalUsers} alt='community' width={100} height={100} />
						<div className='ms-2 flex flex-col items-center lg:itemx-start'>
							<h2 className='font-semibold text-[28px] leading-[42.4px] '>
								10K
							</h2>
							<p className='font-normal text-[14px] leading-[22.4px] '>
								Customer
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Home.path = "/";
Home.metadata = {
	title: "Home",
	description: "Home page",
};

export default Home;
