import Image from "@rasenganjs/image";
import { PlaySVG } from "../atoms/svg/play";

export function About() {
  return (
    <section id="about" className="px-3 lg:px-32">
      <section className="grid grid-cols-1 gap-y-6 lg:gap-y-0 lg:grid-cols-2">
        <h2 className="font-bold text-3xl lg:text-5xl lg:text-balance">Why Enver Is The Best Choice?</h2>
        <h4 className="font-extralight text-pretty">Watch this one minute video so you understand why you should use our services!</h4>
      </section>
      <section className="h-[450px] flex justify-center items-center mt-8 relative">
        <div className="h-full w-full">
          <Image
            alt="About"
            src={'/about-bg.png'}
            width={'100%'} 
            height={'100%'}
            objectfit="cover"
          />
        </div>
        <span className="absolute w-20 h-20 rounded-full flex items-center justify-center bg-opacity-90 hover:bg-opacity-100 duration-150 bg-primary">
          <PlaySVG />
        </span>
        {/* <video src="" /> */}
      </section>
    </section>
  )
}