// import Image from "@rasenganjs/image";
import hero from "@/assets/heroImg.png";
import { DownloadIcon, MoveRightIcon } from "lucide-react";
import BrandSlide from "../molecules/caroussels/BrandSlide";
import { Button } from "../atom/Button";


const HeroSection = () => {
  return (
      <div className="mx-auto xl:h-[1056px] lg:h-[920px] md:h-[750px] h-[1160px] bg-hero-bg relative bg-no-repeat bg-center overflow-hidden">
        <div className="container mx-auto md:flex justify-evenly items-center h-full">
          <div className="lg:w-1/2 w-full px-6 ">
            <p className="lg:text-6xl md:text-5xl text-[40px] font-semibold md:-mt-52 mt-6">
              👋 Hey There, I’m <br />
              <span className="text-primary underline">Hano kurōu</span>
            </p>
            <p className="text-lg mt-8 font-light">
              Product Designer and UI/UX in Tokyo. I’m specialize in User
              Experience Design, User Research, Product Design, and User
              Interface Design.
            </p>
            <div className="flex lg:gap-x-4 md:gap-x-4 gap-x-2 mt-8">
              <Button
                size="lg"
                className="bg-purple-600 duration-300 ease-out hover:bg-purple-700 lg:p-8 md:p-8 p-7 px-5 rounded-2xl text-md shadow-none"
              >
                View Projects
                <MoveRightIcon className="mr-2 h-6 w-10" />
              </Button>
              <Button
                size="lg"
                className="bg-purple-100 text-purple-500 duration-300 ease-out hover:bg-purple-500 hover:text-purple-100 lg:p-8 md:p-8 p-7 px-5 rounded-2xl text-md shadow-none"
              >
                Download CV
                <DownloadIcon className="mr-2 h-6 w-10" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex m-0 items-center justify-center lg:h-screen ">
            <div className="content-none h-full w-[780px] max-h-[800px] absolute top-32 right-52 items-center"></div>
            <img src={hero} alt="Hero" height="full" className="w-[652px] mt-32" />
          </div>
        </div>
        <div className="h-64 bg-white/30 backdrop-blur-2xl border-[3px] border-t-white/80 absolute bottom-0 content-none w-screen">
          <div className="container mx-auto">
            <p className="lg:w-1/3 md:w-1/2 font-bold text-2xl text-start mt-4 px-4">
              I work with over 279+ happy <br /> clients all over the world.
            </p>
            <BrandSlide />
          </div>
        </div>
      </div>
  );
};

export default HeroSection;
