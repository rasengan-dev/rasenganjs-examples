import { LoaderIcon } from "lucide-react";
import { Button } from "../atom/button";

// Images
import img1 from "@/assets/images/works/1.png";
import img2 from "@/assets/images/works/2.png";
import img3 from "@/assets/images/works/3.png";
import img4 from "@/assets/images/works/4.png";
import img5 from "@/assets/images/works/5.png";
import img6 from "@/assets/images/works/6.png";
import img7 from "@/assets/images/works/7.png";
import img8 from "@/assets/images/works/8.png";
import img9 from "@/assets/images/works/9.png";
import img10 from "@/assets/images/works/10.png";
import img11 from "@/assets/images/works/11.png";
import img12 from "@/assets/images/works/12.png";
import Image from "@rasenganjs/image";
import Reveal from "../molecule/animations/Reveal";

const images: string[][] = [
  [img1, img2, img3],
  [img4, img5, img6],
  [img7, img8, img9],
  [img10, img11, img12],
];

const WorksSection = () => {
  return (
    <section id="works" className="pt-20 space-y-10 max-w-[1500px] mx-auto">
      <Reveal variant="to-bottom" className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mb-4 max-w-[550px] px-4 text-center">
          Our Beautiful Works
        </h2>
        <p className="font-light text-lg text-center max-w-[550px] px-10">
          We help our clients grow their bottom-line with clear and professional
          websites.
        </p>
      </Reveal>

      <Reveal className="flex justify-center">
        <Button
          className="rounded-[8px] h-12 sm:h-16 px-6 sm:px-8 flex justify-center items-center text-[#111204] hover:bg-[#B9FD50] border-[#111204] hover:border-2"
          variant={"outline"}
          type="button"
        >
          <span className="sr-only">load more</span>
          <LoaderIcon className="size-8 animate-spin" />
          <span className="font-light text-lg">Load More</span>
        </Button>
      </Reveal>

      <Reveal className="grid grid-cols-1 sm:grid-cols-2 md:px-8 lg:px-0 lg:grid-cols-4">
        {images.map((val, index) => (
          <div
            className={`col-span-1 space-y-6 pt-6 ${
              index % 2 === 0
                ? "sm:pt-10 md:pt-14 lg:pt-16 xl:pt-20 2xl:pt-28"
                : "sm:pt-0"
            }`}
            key={index + 1}
          >
            {val.map((elmt, index2) => (
              <div
                className={`h-[300px] lg:h-[240px] xl:h-[300px] 2xl:h-[340px] w-max mx-auto bg-white`}
                key={index2 + 2}
              >
                <Image
                  alt={`${index}${index2}`}
                  height={340}
                  width={340}
                  src={elmt}
                  loading="lazy"
                  className="w-full object-cover hidden 2xl:block"
                />

                <Image
                  alt={`${index}${index2}`}
                  height={240}
                  width={240}
                  src={elmt}
                  loading="lazy"
                  className="w-full object-cover hidden lg:block xl:hidden"
                />

                <Image
                  alt={`${index}${index2 + 1}`}
                  height={300}
                  width={300}
                  src={elmt}
                  loading="lazy"
                  className="w-full object-cover block lg:hidden xl:block 2xl:hidden"
                />
              </div>
            ))}
          </div>
        ))}
      </Reveal>
    </section>
  );
};

export default WorksSection;
