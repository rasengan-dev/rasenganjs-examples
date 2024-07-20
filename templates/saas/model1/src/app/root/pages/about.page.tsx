import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import Container from '@/components/molecules/Container';
import { PageComponent } from 'rasengan';
import Image from '@rasenganjs/image';
import Heading from '@/components/atoms/Heading';

const About: PageComponent = () => {
  return (
    <section className="">
      <Heading
        title="About us"
        description="We offer revolutionary solutions to your business problems. We are a team of experienced software developers, designers, and marketers who are passionate about building products that solve real-world problems."
      />

      <Container className="mt-[100px]" variant="double">
        <div className="flex flex-col items-center md:items-start w-full md:w-2/5">
          <Typography
            text="Get started with Rasengan today"
            className="text-[40px]"
            weight="bold"
          />
          <Typography
            text="Start optimizing your business today with our free trial"
            className="text-lg"
          />

          <Button text="Sign up now" className="mt-4 text-white" />
        </div>

        <div className="relative w-full md:w-3/5 h-[300px] mb-20 md:mb-0">
          <div className="absolute right-1/2 translate-x-1/2 -top-20 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:-right-[60px]">
            <Image
              src={{
                uri: 'https://assets.api.uizard.io/api/cdn/stream/5c123d9e-4b51-4271-a543-b4ec9665779a.png',
              }}
              alt="Image"
              width={500}
              height={500}
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
