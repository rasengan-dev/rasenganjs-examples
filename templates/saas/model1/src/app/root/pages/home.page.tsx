import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import Container from '@/components/molecules/Container';
import { PageComponent } from 'rasengan';
import Image from '@rasenganjs/image';

const Home: PageComponent = () => {
  return (
    <section className="">
      <Container className="mt-[100px]" variant="double">
        <div className="flex flex-col items-center md:items-start w-full md:w-2/5">
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

        <div className="relative w-full md:w-3/5 h-[300px] mb-20 md:mb-0">
          <div className="absolute right-1/2 translate-x-1/2 -top-20 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:-right-[140px]">
            <Image
              src={{
                uri: 'https://assets.api.uizard.io/api/cdn/stream/b1248553-6fb6-4670-8bef-7a02781703b7.png',
              }}
              alt="Image"
              width={600}
              height={500}
            />
          </div>
        </div>
      </Container>

      <Container className="mt-20" transparent>
        <div className="relative w-full md:w-3/5 h-[300px] mb-20 md:mb-0">
          <div className="absolute right-1/2 translate-x-1/2 -top-20 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:-left-[140px]">
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
    </section>
  );
};

Home.path = '/';
Home.metadata = {
  title: 'Home',
  description: 'Home page',
};

export default Home;
