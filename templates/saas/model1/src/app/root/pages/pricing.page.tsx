import Typography from "@/components/atoms/Typography";
import PricingCard from "@/components/molecules/PricingCard";
import { PageComponent } from "rasengan";
import Image from "@rasenganjs/image";
import Button from "@/components/atoms/Button";
import Container from "@/components/molecules/Container";

const Pricing: PageComponent = () => {
	return (
		<section className=''>
			<div className='flex flex-col items-center mt-10 min-w-[300px] w-[400px] mx-auto text-center mb-4'>
				<Typography text='Pricing' className='text-[40px]' weight='bold' />
				<Typography
					text="Our pricing is not expensive, but it's not cheap either, it's exatly what should be"
					className='text-lg'
					weight='normal'
				/>
			</div>

			<section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
				<div className="block">
					<PricingCard 
						title='Free'
						description='Ideal for those who want to try out our services'
						price='0'
						features={[
							"Up to 10 free projects",
							"500MB storage",
							"10000 requests/month",
							"Email support",
						]}
					/>
				</div>

				<div>
					<PricingCard 
						title='Personal'
						description="Ideal for those who want to start a small business and don't need the full features"
						price='19'
						features={[
							"Up to 100 free projects",
							"1GB storage",
							"100000 requests/month",
							"Email support",
							"Unlimited bandwidth",
							"Custom domain"
						]}
					/>
				</div>

				<div>
					<PricingCard 
						title='Pro'
						description="Ideal for enterprises that need the full features"
						price='49'
						features={[
							"Up to 1000 free projects",
							"10GB storage",
							"1000000 requests/month",
							"Email support",
							"Unlimited bandwidth",
							"Custom domain",
							"SSL certificate",
							"Custom API",
							"Custom dashboard",
							"Custom email",
						]}
					/>
				</div>
			</section>

			<Container className='mt-[100px] mb-[200px]' variant='double'>
				<div className='flex flex-col items-center text-center md:text-start md:items-start w-full md:w-2/5'>
					<Typography
						text='Get started with Rasengan today'
						className='text-[40px]'
						weight='bold'
					/>
					<Typography
						text='Start optimizing your business today with our free trial'
						className='text-lg'
					/>

					<Button text='Sign up now' className='mt-4 text-white bg-rasengan-light-primary' />
				</div>

				<div className='relative w-full md:w-3/5 h-[300px] mb-20 md:mb-0'>
					<div className='absolute right-1/2 translate-x-1/2 -top-20 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:-right-[60px]'>
						<Image
							src={{
								uri: "https://assets.api.uizard.io/api/cdn/stream/5c123d9e-4b51-4271-a543-b4ec9665779a.png",
							}}
							alt='Image'
							width={500}
							height={500}
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};

Pricing.path = "/pricing";
Pricing.metadata = {
	title: "Pricing",
	description: "Discover our pricing",
};

export default Pricing;
