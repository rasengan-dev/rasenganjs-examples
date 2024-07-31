import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import Container from '@/components/molecules/Container';
import { PageComponent } from 'rasengan';
import Image from '@rasenganjs/image';
import Heading from '@/components/atoms/Heading';

import image3 from '@/assets/rasengan-3.png';
import image1 from '@/assets/rasengan-1.png';
import image4 from '@/assets/rasengan-4.png';
import { contributors } from '@/data';
import ProfileCard from '@/components/molecules/ProfileCard';

const About: PageComponent = () => {
  return (
    <section className="">
      <Heading
        title="About us"
        description="We offer revolutionary solutions to your business problems. We are a team of experienced software developers, designers, and marketers who are passionate about building products that solve real-world problems."
      />
      <div className="flex justify-center w-full my-10 md:my-14 lg:my-16">
        <Image
          src={image4}
          alt="Image"
          className=" !w-full md:!w-[500px] lg:!w-[580px] !h-[200px]  md:!h-[270px] lg:!h-[310px] object-cover "
        />
      </div>

      <Heading
        title="Our Mission"
        description="Dolore non dolor voluptate in. Aliquip nostrud ut laborum ut sunt Lorem ad dolor. Mollit enim quis culpa quis ullamco consequat. Cillum duis consectetur ad fugiat. Quis non magna esse duis sunt dolor deserunt pariatur ipsum reprehenderit incididunt tempor ea. Culpa ex elit laborum duis duis sint occaecat tempor veniam consequat commodo irure."
      />
      <Container
        className=" mt-5 md:mt-14 lg:mt-20  mb-14 md:mb-20 lg:mb-36 !flex-col-reverse md:!flex-row "
        transparent
      >
        <div className="flex flex-col items-center md:items-start w-full md:w-2/5">
          <Typography
            text="Let's start working more efficiently today!"
            className="text-3xl lg:text-[50px] lg:leading-[65px] mb-4 text-center md:text-start"
            weight="bold"
          />
        </div>

        <div className="relative w-full md:w-3/5 h-[300px] mb-10 md:mb-0 mt-5 md:mt-0">
          <div className="absolute right-1/2 md:-right-5 translate-x-1/2 md:translate-x-0 top-0  md:top-1/2 md:-translate-y-1/2  ">
            <Image
              src={image1}
              alt="Image"
              className=" !size-[320px]  md:!size-[350px] lg:!size-[450px] "
            />
          </div>
        </div>
      </Container>
      <Heading
        title="Team"
        description="Meet people behind our magical product"
      />
      <div className="flex my-5 md:my-10 lg:my-14 py-5 justify-center flex-wrap gap-8 lg:gap-x-16 lg:gap-y-8">
        {contributors.map((item, index) => (
          <ProfileCard
            key={index}
            avatar={item.avatar}
            name={item.name}
            description={item.description}
            portfolio={item.portfolio}
            linkedin={item.linkedin}
          />
        ))}
      </div>

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
