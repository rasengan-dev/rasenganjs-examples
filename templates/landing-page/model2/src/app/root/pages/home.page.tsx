import { PageComponent } from "rasengan";
import Products from "./products";
import Faq from "./faq";
import Blog from "./blog";
import AboutUs from "./about-us";
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
import vector from "@/assets/vector.svg";
import bar from "@/assets/bar.svg";
import ButtonWithLogo from "@/components/atoms/ButtonWithLogo";
import Typography from "@/components/atoms/Typography";

const Home: PageComponent = () => {
  return (
    <section className="w-full h-full flex flex-col">
      <div className="max-lg:flex-col flex flex-grow px-8 lg:px-[130px] pt-4 lg:pt-14 bg-custom-gradient gap-4">
        <div className="flex flex-1 flex-col">
          <Typography
            className="max-xl:text-5xl text-7xl pb-6"
            weight="bold"
            text="We’re here to Increase your Productivity"
          />
          <img src={curve} alt="curve" className="py-8" />
          <p className="text-lg py-8">
            Let's make your work more organize and easily using the Taskio
            Dashboard with many of the latest featuresin managing work every
            day.
          </p>
          <div className="flex gap-6 mt-8">
            <Button
              text="Try free trial"
              className="text-lg bg-primary text-white"
            />
            <ButtonWithLogo
              logo={
                <img
                  src={play}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              }
              text="View Demo"
              className="bg-transparent text-foreground text-[#A6A6A6]"
            />
          </div>
        </div>

        <div className="relative flex flex-1 justify-end max-lg:mt-12">
          <Image src={charlie} alt="Charlie" className="rounded-xl" />
          <div className="absolute top-6 -right-4 bg-[#FBC75E] rotate-[15deg] h-10 w-10 rounded-[10px] flex items-center justify-center">
            <Image src={database} alt="database" />
          </div>
          <div className="absolute bg-[#FFAA94] top-[510px] right-[50px] rotate-[15deg] h-10 w-10 rounded-[10px] flex items-center justify-center">
            <Image src={message} alt="message" />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex bg-custom-gradient items-center pt-14 px-8 lg:px-[130px] pb-14 lg:py-28">
        <Typography
          className="text-4xl text-center"
          weight="bold"
          text="More than 25,000 teams use Collabs"
        />

        <div className="flex flex-wrap justify-center items-center gap-12 mt-14 text-[#A6A6A6] text-xl md:text-2xl lg:text-3xl">
          <p className="flex items-center gap-2">
            <Image src={unspash} alt="unsplash" />
            <span>Unsplash</span>
          </p>
          <p className="flex items-center gap-2">
            <Image src={notion} alt="notion" />
            <span>Notion</span>
          </p>
          <p className="flex items-center gap-2">
            <Image src={intercom} alt="intercom" />
            <span>INTERCOM</span>
          </p>
          <p className="flex items-center gap-2">
            <Image src={descript} alt="descript" />
            <span>Descript</span>
          </p>
          <p className="flex items-center gap-2">
            <div className="bg-[#A6A6A6] rounded-full p-2 flex items-center justify-center">
              <Image src={ellipse} alt="grammarly" />
            </div>
            <span>Grammarly</span>
          </p>
        </div>
      </div>

      <div className="flex-grow">
        <Products />
      </div>

      <div className="flex-grow">
        <Faq />
      </div>

      <div className="flex-grow">
        <Blog />
      </div>

      <div className="flex-grow">
        <AboutUs />
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
