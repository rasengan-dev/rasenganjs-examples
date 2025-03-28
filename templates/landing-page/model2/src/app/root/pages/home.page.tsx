import { PageComponent } from "rasengan";
import Products from "@/components/organismes/products";
import Faq from "@/components/organismes/faq";
import Blog from "@/components/organismes/blog";
import AboutUs from "@/components/organismes/about-us";
import Button from "@/components/atoms/Button";
import Image from "@rasenganjs/image";
import charlie from "@/assets/images/charlie.png";
import play from "@/assets/play.svg";
import curve from "@/assets/curve.svg";
import unspash from "@/assets/unspash.svg";
import notion from "@/assets/notion.svg";
import intercom from "@/assets/intercom.svg";
import descript from "@/assets/descript.svg";
import ellipse from "@/assets/ellipse.svg";
import database from "@/assets/database.svg";
import message from "@/assets/message.svg";
import bar from "@/assets/bar.svg";
import vector from "@/assets/vector.svg";
import ButtonWithLogo from "@/components/atoms/ButtonWithLogo";
import Typography from "@/components/atoms/Typography";
import { MoveIn } from "@/components/molecules/move-in";

const Home: PageComponent = () => {
	return (
		<section className='w-full h-full flex flex-col'>
			<MoveIn
				id='section1'
				className='max-lg:flex-col flex flex-grow px-8 lg:px-[130px] pt-4 lg:pt-14 bg-custom-gradient gap-4'
			>
				<div className='flex flex-1 flex-col max-w-[700px] mx-auto lg:mx-0 lg:max-w-full'>
					<Typography
						className='max-xl:text-5xl text-7xl pb-6 text-center lg:text-left'
						weight='bold'
						text='We’re here to Increase your Productivity'
					/>
					<img src={curve} alt='curve' className='py-8' />
					<p className='text-lg py-8 text-center lg:text-left'>
						Let's make your work more organize and easily using the Taskio
						Dashboard with many of the latest features in managing work every
						day.
					</p>
					<div className='flex gap-6 mt-8 justify-center lg:justify-start'>
						<Button
							text='Try free trial'
							className='text-lg bg-primary text-white'
						/>
						<ButtonWithLogo
							logo={
								<img
									src={play}
									alt='Logo'
									className='w-full h-full object-contain'
								/>
							}
							text='View Demo'
							className='bg-transparent text-foreground text-[#A6A6A6]'
						/>
					</div>
				</div>

				<div className='relative flex flex-1 justify-center lg:justify-end max-lg:mt-12'>
					<div className='relative'>
						<Image src={charlie} alt='Charlie' className='rounded-xl' />
						<div className='absolute top-6 -right-4 bg-[#FBC75E] rotate-[15deg] h-10 w-10 rounded-[10px] flex items-center justify-center'>
							<Image src={database} alt='database' />
						</div>
						<div className='absolute bg-[#FFAA94] top-[510px] right-[50px] rotate-[15deg] h-10 w-10 rounded-[10px] flex items-center justify-center'>
							<Image src={message} alt='message' />
						</div>
					</div>
					<div className="absolute bg-[#4535AF] max-lg:right-[350px] right-[430px] top-[160px] rotate-[-15deg] h-10 w-10 rounded-[10px] max-2xl:hidden flex items-center justify-center"><Image src={vector} alt="vector"/></div>
					<div className="absolute max-lg:right-[350px] left-[270px] gap-14 top-[25px] rounded-[10px] max-2xl:hidden flex justify-between items-center p-4 bg-white">
              <div className="flex flex-col gap-2">
                <p className="text-[#A9A7B6] text-xs">Enter amount</p>
                <span className="text-base">$450..00</span>
              </div>
              <Button
              text="Send"
              className="text-xs bg-primary text-white"
            /> 
          </div>
          <div className="absolute left-[340px] gap-2 top-[410px] rounded-[10px] max-2xl:hidden flex flex-col justify-between p-4 bg-white">
             <p className="text-[#A9A7B6] text-xs">Total Income</p>  
              <div className="flex gap-8">
                <span className="text-base">$245.00</span>
                <Image src={bar} alt="Bar" className="h-full"/>
              </div> 
          </div>
          <div className="absolute -right-20 top-[300px] rotate-[15deg] rounded-[10px] max-2xl:hidden flex flex-col justify-between p-4 bg-[#161C28] overflow-hidden">
             <span className="absolute bg-white rounded-full w-[100px] h-[100px] -right-10 -top-10 p-2 opacity-20"></span>
              <div className="flex">
              <p className="bg-white rounded-full w-7 h-7 p-2 opacity-20"> </p>
              <p className="bg-white rounded-full w-7 h-7 p-2 opacity-20"> </p>
              </div>
              <p className="text-[#E6E6E6] text-xs mt-6">Creadit Crad</p>
              <p className="text-[#E6E6E6] text-xs mb-6 mt-2">....1234</p>
              <div className="flex justify-between items-center gap-10">
                <span className="p-3 w-10 bg-[#FFFFFF] rounded-[4px] opacity-20"></span>
                <p className="text-[#E6E6E6] text-xs">09/25</p>
              </div>
              <span className="absolute bg-white rounded-full w-[150px] h-[150px] top-[100px] -left-10 p-2 opacity-20"></span>
          </div>
				</div>
			</MoveIn>

			<MoveIn
				id='section2'
				className='flex flex-col bg-custom-gradient items-center pt-14 px-8 lg:px-[130px] pb-14 lg:py-28'
			>
				<Typography
					className='text-4xl text-center'
					weight='bold'
					text='More than 25,000 teams use Collabs'
				/>
				<div className='flex flex-wrap justify-center items-center gap-12 mt-14 text-[#A6A6A6] text-xl md:text-2xl lg:text-3xl'>
					<p className='flex items-center gap-2'>
						<Image src={unspash} alt='unsplash' />
						<span>Unsplash</span>
					</p>
					<p className='flex items-center gap-2'>
						<Image src={notion} alt='notion' />
						<span>Notion</span>
					</p>
					<p className='flex items-center gap-2'>
						<Image src={intercom} alt='intercom' />
						<span>INTERCOM</span>
					</p>
					<p className='flex items-center gap-2'>
						<Image src={descript} alt='descript' />
						<span>Descript</span>
					</p>
					<p className='flex items-center gap-2'>
						<div className='bg-[#A6A6A6] rounded-full p-2 flex items-center justify-center'>
							<Image src={ellipse} alt='grammarly' />
						</div>
						<span>Grammarly</span>
					</p>
				</div>
			</MoveIn>

			<MoveIn id='section3'>
				<Products />
			</MoveIn>

			<MoveIn id='section4'>
				<Faq />
			</MoveIn>

			<MoveIn id='section5'>
				<Blog />
			</MoveIn>

			<MoveIn id='section6'>
				<AboutUs />
			</MoveIn>
		</section>
	);
};

Home.path = "/";
Home.metadata = {
	title: "Home",
	description: "Home page",
};

export default Home;
