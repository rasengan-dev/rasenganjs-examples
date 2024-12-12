import { useState } from "react";
import { ChevronLeft } from "../atoms/svg/chevron-left";
import { ChevronRight } from "../atoms/svg/chevron-right";
import Image from "@rasenganjs/image";

export function PortofolioSm() {
  const items = [
    { img: '/portofolio-1.png' },
    { img: '/portofolio-2.png' },
    { img: '/portofolio-3.png' }
  ]
  const [activeIndex, setActiveIndex] = useState(0) ;

  const handlePrev = () => {
    if(activeIndex == 0) return 

    setActiveIndex(activeIndex - 1)
  }

  const handleNext = () => {
    if(activeIndex == (items.length - 1)) return 

    setActiveIndex(activeIndex + 1)
  }

  const x = -100 * ( activeIndex / items.length )

  return (
    <>
      <section className="w-full overflow-hidden">
        <section 
          style={{ transform: `translateX(${x}%)` }}
          className={`mt-10 lg:px-32 flex duration-200 ease-in-out lg:grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 w-[300%] lg:w-full`}
        >
          {
            items.map((item, index) => {
              return (
                <article
                  key={index}
                  className={`lg:hidden w-full h-60 p-4 rounded-xl bg-[#1E1E20] flex justify-center items-center`} 
                >
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <Image
                      width={'100%'}
                      height={'100%'}
                      alt="Image"
                      src={item.img}
                      objectfit="cover" 
                    />
                  </div>
                </article>
              )
            })
          }
        </section>
      </section>
      <div className="flex justify-center gap-4 my-10 items-center">
        <span
          className="bg-[#1E1E20] hover:bg-[#5454D4] cursor-pointer w-14 h-14 flex justify-center items-center rounded-full" 
          onClick={handlePrev}
        >
          <ChevronLeft />
        </span>
        <span
          className="bg-[#1E1E20] hover:bg-[#5454D4] cursor-pointer w-14 h-14 flex justify-center items-center rounded-full" 
          onClick={handleNext}
        >
          <ChevronRight />
        </span>
      </div>
    </>
  )
}