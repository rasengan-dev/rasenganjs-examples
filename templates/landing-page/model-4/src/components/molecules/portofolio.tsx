import { useState } from "react";

export function Portfolio() {
  const items = new Array(3).fill(0) ;

  const [activeIndex, setActiveIndex] = useState(0)

  const x = (activeIndex / 3) * -100 ;

  return (
    <section>
      <section className="px-3 lg:px-32">
        <h1 className="text-3xl lg:text-5xl font-bold">Our Awesome Portofolio</h1>
      </section>
      <section 
        style={{ transform: `translateX(${x}%)` }}
        className={` mt-10 lg:px-32 flex lg:grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 w-[300%] lg:w-full`}
      >
        {
          items.map((item, index) => {
            return (
              <>
                {/* small screen  */}
                <article
                  key={index}
                  className={`lg:hidden w-full h-60 rounded-xl bg-[#1E1E20]`} 
                ></article>
                {/* big screen  */}
                <article
                  key={index + 'big'}
                  style={{ transform: `translateY(${(index * 60)}px)` }}
                  className={`hidden lg:block w-full h-60 rounded-xl bg-[#1E1E20]`} 
                ></article>
              </>
            )
          })
        }
      </section>
    </section>
  )
}