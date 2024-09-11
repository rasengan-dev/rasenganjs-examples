import { PageComponent, Link } from "rasengan";
import logo from "@/assets/logo.svg";
import Image from "@rasenganjs/image";

import hero from '@/assets/images/hero.png'
import candle from '@/assets/icons/candle.svg'
import { Button } from "@/components/atoms/Button";
import { community, totalDownloads, totalUsers } from "@/assets/icons";

const Home: PageComponent = () => {
  return (
    <section className="w-full h-full min-h-screen text-foreground flex flex-col items-center py-8  font-comfortaa lg:mt-[100px] lg:mb-[200px]">
      <aside className="w-full relative flex flex-row items-center py-8  font-comfortaa">
        <div className="texts  w-3/5 z-10 relative ps-20">
          <h1 className="font-bold text-[46px] leading-[52.8px]">Committed to People<br />
            Committed to <span className="text-primary">The Future</span></h1>
          <p className="font-normal text-[16px] leading-[26px] w-3/4 my-4">An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at </p>
          <Button>Get Started Now</Button>
          <img src={candle} alt="candle" className="absolute left-0 top-0 translate-y-[-50%] w-[100px] h-[100px]" />
        </div>
        <div className="image h-full w-3/5 absolute right-[0] top-[50%] translate-y-[-50%] -z-0">
          <img src={hero} alt="hero" className=" object-contain  w-full h-full" />
        </div>
      </aside>

      <aside className="flex w-full justify-evenly items-center mt-[50px] flex-wrap">
        <div className="flex justify-center items-center">
          <Image src={community} alt="community" width={100} height={100} />
          <div className="ms-2">
            <h2 className="font-semibold text-[28px] leading-[42.4px] ">15K +</h2>
            <p className="font-normal text-[14px] leading-[22.4px] ">Active user</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={totalDownloads} alt="community" width={100} height={100} />
          <div className="ms-2">
            <h2 className="font-semibold text-[28px] leading-[42.4px] ">30K</h2>
            <p className="font-normal text-[14px] leading-[22.4px] ">Total Download</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={totalUsers} alt="community" width={100} height={100} />
          <div className="ms-2">
            <h2 className="font-semibold text-[28px] leading-[42.4px] ">10K</h2>
            <p className="font-normal text-[14px] leading-[22.4px] ">Customer</p>
          </div>
        </div>
      </aside>
    </section>
  );
}

Home.path = "/";
Home.metadata = {
  title: "Home",
  description: "Home page",
};

export default Home