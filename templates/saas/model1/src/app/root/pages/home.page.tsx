import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import Container from "@/components/molecules/Container";
import TestimonialCard from "@/components/molecules/TestimonialCArd";
import { PageComponent } from "rasengan";
import Image from "@rasenganjs/image";
import { useTheme } from "@rasenganjs/theme";

import image1 from '@/assets/rasengan-1.png';
import image2 from '@/assets/rasengan-2.png';
import image3 from '@/assets/rasengan-3.png';
import { steps, testimonials } from "@/data";

const Home: PageComponent = () => {
  const { isDark } = useTheme();
  
  return (
    <section className="">
      <Container className="mt-5 lg:mt-20" transparent>
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 lg:w-1/2">
          <Typography
            text="- FREE 30 DAYS TRIAL"
            className={`text-sm font-bold font-urbanist-extrabold tracking-[3px] text-center mb-2 md:text-start ${isDark ? 'text-gray-400' : 'text-gray-500'} `}
          />
          <Typography
            text="The best way to showcase your project"
            className="text-3xl lg:text-[50px] lg:leading-[65px] mb-4 text-center md:text-start"
            weight="bold"
          />
          <Typography
            text="Here you can put a short description about your project"
            className="text-md  text-center md:text-start my-3"
          />
          <div className="flex gap-4">
            <Button
              text="Try for free"
              className="mt-4 bg-rasengan-light-primary text-white"
            />
            <Button
              text="See how it works"
              className="mt-4 text-rasengan-light-primary bg-transparent border-[1px] border-rasengan-light-primary"
            />
          </div>
        </div>

        <div className="relative w-full md:w-2/5 h-[300px] mb-10 md:mb-0 mt-5 md:mt-0">
          <div className="absolute md:-right-10 lg:-right-20 md:translate-x-0 right-1/2 translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2  ">
            <Image
              src={image1}
              alt="Image"
              className=" !size-[320px]  md:!size-[350px] lg:!size-[460px] "
            />
          </div>
        </div>
      </Container>
      <div className="flex flex-col items-center justify-center my-10 md:my-20 lg:my-30 ">
        <Typography
          text="Trusted by individuals and teams at the world's best companies"
          className="text-[17px] lg:text-[20px]  mb-4 text-center md:w-1/2 lg:w-2/5 "
          weight="normal"
        />
        <div className="flex justify-center flex-wrap  gap-7 my-5 ">
          <div className="font-[900] text-[25px] leading-[26px]  text-gray-600 ">
            Logo
          </div>
          <div className="font-[900] text-[25px] leading-[26px]  text-gray-600 ">
            Logo
          </div>
          <div className="font-[900] text-[25px] leading-[26px]  text-gray-600 ">
            Logo
          </div>
          <div className="font-[900] text-[25px] leading-[26px]  text-gray-600 ">
            Logo
          </div>
          <div className="font-[900] text-[25px] leading-[26px]  text-gray-600 ">
            Logo
          </div>
          <div className="font-[900] text-[25px] leading-[26px]  text-gray-600 ">
            Logo
          </div>
        </div>
      </div>

      <Container
        className="mb-20 md:mb:30 lg:mb-40 !pb-10  !flex-col-reverse md:!flex-row"
        variant="double"
      >
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 lg:w-2/5">
          <Typography
            text="Introducing good solution"
            className="text-3xl lg:text-[40px] mb-4 text-center md:text-start"
            weight="bold"
          />
          <Typography
            text="Join our community and experience the benefits today!"
            className="text-lg text-center md:text-start"
          />

          <Button
            text="Try for free"
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

      <Container className="mb-20 md:mb:30 lg:mb-40" transparent>
        <div className="relative w-full md:w-3/5 h-[300px] mb-10 md:mb-0 mt-5 md:mt-0">
          <div className="absolute left-1/2 md:-left-5 -translate-x-1/2 md:translate-x-0 top-0  md:top-1/2 md:-translate-y-1/2  ">
            <Image
              src={image3}
              alt="Image"
              className=" !size-[320px]  md:!size-[350px] lg:!size-[450px] "
            />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start w-full md:w-2/5">
          <Typography
            text="All your work is safe with us"
            className="text-3xl lg:text-[30px] mb-4 text-center md:text-start"
            weight="bold"
          />
          <Typography
            text="We take your data security seriously. We never store your data on our servers. All data is encrypted and stored in a database that is only accessible to you."
            className="text-md text-center md:text-start"
          />

          <Button
            text="Try now"
            className="mt-4 text-rasengan-light-primary bg-transparent border-[1px] border-rasengan-light-primary"
          />
        </div>
      </Container>

      <Container
        className="mb-20 md:mb:30 lg:mb-40 !flex-col-reverse md:!flex-row "
        transparent
      >
        <div className="flex flex-col items-center md:items-start w-full md:w-2/5">
          <Typography
            text="COST SAVER"
            className="text-sm font-bold  text-center mb-2 md:text-start"
          />
          <Typography
            text="Cost saving in a smart way"
            className="text-3xl lg:text-[50px] lg:leading-[65px] mb-4 text-center md:text-start"
            weight="bold"
          />
          <Typography
            text="Deserunt duis commodo voluptate deserunt veniam nulla enim. Magna labore veniam sint anim velit sit dolor amet esse aliqua labore. Esse nulla fugiat sunt ea fugiat nulla reprehenderit. Nulla sint elit ex ad cillum."
            className="text-md text-center md:text-start"
          />
          <div className="flex gap-2">
            <Button
              text="Try now"
              className="mt-4 text-rasengan-light-primary bg-transparent border-[1px] border-rasengan-light-primary"
            />
          </div>
        </div>

        <div className="relative w-full md:w-3/5 h-[300px] mb-10 md:mb-0 mt-5 md:mt-0">
          <div className="absolute right-1/2 md:-right-5 translate-x-1/2 md:translate-x-0 top-0  md:top-1/2 md:-translate-y-1/2  ">
            <Image
              src={image3}
              alt="Image"
              className=" !size-[320px]  md:!size-[350px] lg:!size-[450px] "
            />
          </div>
        </div>
      </Container>

      <Container className="relative mb-20 md:mb:30 lg:mb-40  gap-14" variant="double">
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <Typography
            text="How to join our community"
            className="text-3xl lg:text-[40px] lg:leading-[50px] mb-4 text-center md:text-start"
            weight="bold"
          />
          <Typography
            text="Just three simple steps to optimize your companies operations."
            className="text-lg text-center md:text-start"
          />

          <Button
            text="Sign up now"
            className="mt-4 bg-rasengan-light-primary text-white"
          />
        </div>

        <div className="flex flex-col w-full md:w-2/5  ">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center md:items-start border-b py-7 md:py-4 lg:py-7 last-of-type:border-none md:first-of-type:pt-0 md:last-of-type:pb-0  ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
            >
              <Typography
                text={`Step ${item.id}`}
                className="text-2xl lg:text-[30px] lg:leading-[50px] mb-3 lg:mb-4 text-center md:text-start"
                weight="bold"
              />
              <Typography
                text={`${item.description}`}
                className={`text-[16px] w-4/5 md:w-4/5 text-center md:text-start ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              />
            </div>
          ))}
        </div>
      </Container>

      <Container className="mb-20 w-full flex !flex-col" transparent>
        <div className=" w-full flex flex-col items-center text-center">
          <Typography
            text="Testimonials"
            className=" text-3xl lg:text-[40px] lg:leading-[50px] text-center mb-4  md:text-start"
            weight="bold"
          />
          <Typography
            text="People love what we do and we want to let you know"
            className="  text-lg text-center md:text-start"
          />
        </div>
        <div className="flex gap-4  lg:gap-5 justify-center flex-wrap  mt-14">
          {testimonials?.map((item, index) => (
            <TestimonialCard
              key={index}
              testimonial={item.testimonial}
              ranking={item.ranking}
              author={item.author}
              profile={item.profile}
            />
          ))}
        </div>
      </Container>

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
    </section>
  );
};

Home.path = '/';
Home.metadata = {
  title: 'Home',
  description: 'Home page',
};

export default Home;
