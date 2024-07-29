import Typography from '@/components/atoms/Typography';
import PricingCard from '@/components/molecules/PricingCard';
import { PageComponent } from 'rasengan';
import Button from '@/components/atoms/Button';
import Container from '@/components/molecules/Container';
import Heading from '@/components/atoms/Heading';
import Accordion from '@/components/atoms/Accordion';
import { useTheme } from '@rasenganjs/theme';
import Image from '@rasenganjs/image';

import image2 from '@/assets/rasengan-2.png';

const Pricing: PageComponent = () => {
  const { isDark } = useTheme();

  return (
    <section className={`${isDark ? 'bg-rasengan-dark-background' : ''}`}>
      <Heading
        title="Pricing"
        description="Our pricing is not expensive, but it's not cheap either, it's exatly what should be"
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20">
        <div className="block">
          <PricingCard
            title="Free"
            description="Ideal for those who want to try out our services, without needing too much resources"
            price="0"
            features={[
              'Up to 10 free projects',
              '500MB storage',
              '10000 requests/month',
              'Email support',
            ]}
          />
        </div>

        <div>
          <PricingCard
            title="Personal"
            description="Ideal for those who want to start a small business and don't need the full features"
            price="19"
            features={[
              'Up to 100 free projects',
              '1GB storage',
              '100000 requests/month',
              'Email support',
              'Unlimited bandwidth',
              'Custom domain',
            ]}
          />
        </div>

        <div>
          <PricingCard
            title="Pro"
            description="Ideal for enterprises that need the full features and the most resources"
            price="49"
            features={[
              'Up to 1000 free projects',
              '10GB storage',
              '1000000 requests/month',
              'Email support',
              'Unlimited bandwidth',
              'Custom domain',
              'SSL certificate',
              'Custom API',
              'Custom dashboard',
              'Custom email',
            ]}
          />
        </div>
      </section>

      <Container
        className="mt-[100px] mb-20 md:mb:30 lg:mb-40 !flex-col-reverse md:!flex-row"
        variant="double"
      >
        <div className="flex flex-col items-center md:items-start w-full md:w-2/5">
          <Typography
            text="Get started with Rasengan.js today"
            className="text-3xl lg:text-[40px] lg:leading-[50px] mb-4 text-center md:text-start"
            weight="bold"
          />
          <Typography
            text="Start optimizing your processes today!"
            className="text-lg text-center md:text-start"
          />

          <Button
            text="Sign up now"
            className="mt-4 bg-rasengan-light-primary text-white"
          />
        </div>

        <div className="relative w-full md:w-3/5 h-[300px]  ">
          <div className="absolute right-1/2 md:-right-8 translate-x-1/2 md:translate-x-0 -top-14 md:-top-16 lg:-top-20   ">
            <Image
              src={image2}
              alt="Image"
              className=" !size-[320px]  md:!size-[380px] lg:!size-[430px] "
            />
          </div>
        </div>
      </Container>

      <section className="mb-[200px]">
        <Heading
          title="FAQ"
          description="You have a particular question about our product ? Here are the frequently asked questions. "
        />

        <div className="py-10 flex flex-col	max-w-[600px] mx-auto">
          <Accordion title="Is this template completely customiseable ?">
            <Typography text="Of course ! You can apply what ever modification you want to sweet your needs." />
          </Accordion>
          <Accordion title="What is the best way to contact you ?">
            <Typography text="You can contact us by email or by phone." />
            <Typography
              text="Email : contact@rasenganjs.com"
              className="mt-1"
            />
            <Typography text="Phone : +237 6 77 77 77 77" />
          </Accordion>

          <Accordion title="Can I use this template for my business ?">
            <Typography text="Yes ! You can use this template for your business." />
          </Accordion>

          <Accordion title="How can I get started with Rasengan ? ">
            <Typography text="You can get started by visiting the documentation and start following the guide step by step." />
            <Typography text="Don't forget to have a practice project to test your code." />
          </Accordion>
        </div>
      </section>
    </section>
  );
};

Pricing.path = '/pricing';
Pricing.metadata = {
  title: 'Pricing',
  description: 'Discover our pricing',
};

export default Pricing;
