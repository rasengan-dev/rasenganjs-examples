import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import Container from '@/components/molecules/Container';
import { PageComponent } from 'rasengan';
import Image from '@rasenganjs/image';
import Heading from '@/components/atoms/Heading';

import image3 from '@/assets/rasengan-3.png';

const About: PageComponent = () => {
  return (
    <section className="">
      <Heading
        title="About us"
        description="We offer revolutionary solutions to your business problems. We are a team of experienced software developers, designers, and marketers who are passionate about building products that solve real-world problems."
      />

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
              src={image3}
              alt="Image"
              className=" !size-[320px]  md:!size-[380px] lg:!size-[430px] "
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

About.path = '/about-us';
About.metadata = {
  title: 'About Us',
  description: 'Discover more about us',
};

export default About;
