import Image from "@rasenganjs/image";
import { Button } from "../atoms/button";
import { Arrow } from "../atoms/svg/arrow";
import { Vector1 } from "../atoms/svg/vector-1";
import { Vector2 } from "../atoms/svg/vector-2";
import { Vector3 } from "../atoms/svg/vector-3";
import { Vector4 } from "../atoms/svg/vector-4";

export function Hero() {
  return (
    <section className="lg:min-h-[600px] lg:h-[calc(100dvh-64px)] py-14 lg:py-0 flex flex-col gap-y-20 lg:flex-row gap-2">
      <section className="h-full flex px-3 lg:px-32 flex-col gap-4 justify-center">
        <h1 className="font-bold text-5xl lg:text-6xl">
          <span>Build Your</span> <br />
          <span>Awesome </span> <br />
          <span>Platform</span>
        </h1>
        <p className="font-thin">
          Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.
        </p>
        <Button icon={<Arrow />}>
          Our services
        </Button>
      </section>
      <section className="h-full w-full justify-center lg:justify-start flex items-center px-3 lg:px-0 lg:pr-32 relative">
        <div className="flex justify-center lg:w-96 h-96 relative">
          {/* small screen  */}
          <div className="lg:hidden">
            <Vector1 size={40} className=" absolute right-0 top-0" />
            <Vector2 size={60} className=" absolute left-0 bottom-0" />
            <Vector3 size={30} className=" absolute right-0 bottom-0" />
            <Vector4 size={20} className=" absolute left-0 top-0" />
          </div>
          {/* big screen  */}
          <div className="hidden lg:block">
            <Vector1 size={40} className=" absolute right-0 top-0" />
            <Vector2 size={60} className=" absolute left-0 bottom-0" />
            <Vector3 size={30} className=" absolute right-0 bottom-0" />
            <Vector4 size={20} className=" absolute left-0 top-0" />
          </div>
          <Image
            alt="Hero Section"
            src={'/hero.webp'}
            width={'100%'} 
            height={'100%'}
            objectfit="contain"
          />
        </div>
      </section>
    </section>
  )
}