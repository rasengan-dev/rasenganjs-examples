// /**
//  * A React component that displays a carousel of recent projects.
//  *
//  * The component uses the `useProject` hook to fetch the project data, and then renders a carousel with the project cards.
//  * The carousel is implemented using the `Carousel` component from the `@/components/atom/carousel` module.
//  * The component also includes navigation buttons to move between the carousel items.
//  */
// import React from "react";
// useTestimony;
// import { TestimonialCard } from "../molecules/cards/testimonialCard";
// import { Title } from "../molecules/Titles";
// import { useState } from "react";
// import { CarouselApi } from "@/components/atom/carousel";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/atom/carousel";
// import useTestimony from "@/hooks/useTestimony";

// const Projects = () => {
//   const { testimonial } = useTestimony();

//   const [api, setApi] = useState<CarouselApi>();
//   const [current, setCurrent] = React.useState(0);
//   const [count, setCount] = React.useState(0);

//   React.useEffect(() => {
//     if (!api) {
//       return;
//     }

//     setCount(api.scrollSnapList().length);
//     setCurrent(api.selectedScrollSnap() + 1);

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap() + 1);
//     });
//   }, [api]);

//   {
//     if (!testimonial) {
//       throw new Error("No projects found");
//     } else {
//       return (
//         <>
//           <Title children="Recent Projects" alignment={"center"} size={"lg"} />

//           <div className="relative flex justify-end w-screen -mr-2 bg-gradient-to-t from-[#132238]/5 to-transparent pb-32">
//             <Carousel
//               setApi={setApi}
//               className="w-full"
//               opts={{
//                 align: "start",
//                 loop: true,
//               }}
//             >
//               <CarouselContent>
//                 {testimonial.map((project, index) => (
//                   <CarouselItem
//                     key={index}
//                     className="md:basis-2/2 lg:basis-3/3 ms-6 mx-3 transform transition-transform hover:scale-105 hover:-rotate-2"
//                   >
//                     <TestimonialCard
//                       image={project.image}
//                       quote={project.quote}
//                       company={project.company}
//                       author={project.author}
//                       position={project.position}
//                     />
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>

//               <div className="flex items-center justify-center gap-4 mt-16">
//                 <CarouselPrevious className="relative inset-0 translate-y-0 h-16 w-16 rounded-full bg-white duration-300 ease-in hover:bg-purple-600 hover:border-purple-600" />
//                 <CarouselNext className="relative inset-0 translate-y-0 h-16 w-16 rounded-full bg-white duration-300 ease-in hover:bg-purple-600 hover:border-purple-600" />
//               </div>
//             </Carousel>
//             <div className="py-2 text-center text-sm text-muted-foreground">
//               Slide {current} of {count}
//             </div>
//           </div>
//         </>
//       );
//     }
//   }
// };

import { TestimonialCard } from "../molecules/cards/TestimonialCard";
import { Title } from "../molecules/Titles";
import { useEffect, useState } from "react";
import { CarouselApi } from "@/components/atom/carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atom/carousel";
import useTestimony from "@/hooks/useTestimony";
import { AnimatePresence, motion } from "framer-motion";


const Testimonial = () => {
  const { testimonial } = useTestimony();


  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  // const [count, setCount] = useState(0);
  // const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    // setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);


  if (!testimonial) {
    throw new Error("No Testimonial found");
  } else {
    return (
      <>
        <div className="bg-purple-100/20" id="testimonial">
        <Title children="Client Testimonial" subtitle="Nam malesuada est elementum nibh tristique, non ornare lacus mollis. Sed lectus nulla, ultrices in gravida in." alignment={"center"} size={"lg"} className="pt-10 mt-5 mb-0 px-2" />
        <div className="relative flex justify-around lg:w-screen md:w-screen max-w-auto -mr-2 bg-gradient-to-t from-[#132238]/5 to-transparent lg:pb-32 md:pb-20 pb-10">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "center",
              loop: false,
            }}
          >
              <CarouselContent className="flex justify-center h-auto">
              {testimonial.map((project, index) => {
                const isActive = index === current + 1;
                
                return (
                  <AnimatePresence key={index}>
                    <CarouselItem  className={`basis-full md:basis-1/3 lg:basis-1/3 transform transition-transform ${
                          isActive ? "opacity-1" : "opacity-70"
                        }`}>
                      <motion.div
                        initial={{scale: 0.75 }}
                        animate={{
                          // opacity: isActive ? 1 : 0.7,
                          scale: isActive ? 0.92 : 0.8,
                          
                        }}
                        exit={{scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        // className={`basis-full md:basis-1/3 lg:basis-1/3 transform transition-transform rounded-lg`}
                      >
                        <TestimonialCard
                          image={project.image}
                          quote={project.quote}
                          company={project.company}
                          author={project.author}
                          position={project.position}
                          className={`${isActive ? "z-10" : "z-0 bg-white opacity-50"}`}
                        />
                      </motion.div>
                    </CarouselItem>
                  </AnimatePresence>
                );
              })}
            </CarouselContent>

            <div className="flex items-center justify-center gap-4 lg:mt-16 md:mt-12 mt-0">
              <CarouselPrevious className="relative inset-0 translate-y-0 h-14 w-14 rounded-full bg-white duration-300 ease-in hover:bg-purple-600 border-2 border-purple-600" />
              <CarouselNext className="relative inset-0 translate-y-0 h-14 w-14 rounded-full bg-white duration-300 ease-in hover:bg-purple-600 border-2 border-purple-600" />
            </div>
          </Carousel>
        </div>
        </div>
      </>
    );
  }
};

export default Testimonial;


// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Projects = () => {
//   const numbers = [
//     { id: 1, value: 1 },
//     { id: 2, value: 2 },
//     { id: 3, value: 3 },
//     { id: 4, value: 4 },
//     { id: 5, value: 5 },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const next = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % numbers.length);
//   };

//   const prev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? numbers.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full max-w-md mx-auto">
//       <div className="flex justify-around ring bg-red-100/30 overflow-hidden">
//         <div className="h-20 w-96">
//           <motion.div
//             key={numbers[currentIndex].id}
//             initial={{ opacity: 1, x: 100 }}
//             animate={{ opacity: 1, x: 10 , y: 10 }}
//             exit={{ opacity: 1, x: -100 }}
//             transition={{ duration: 0.5 }}
//             className="flex justify-center items-center h-full ring"
//           >
//             <div>
//               <span className="text-2xl font-bold opacity-0.5">
//               {numbers[currentIndex -1 ? 0 : 5 ].value}
//             </span>
//             </div>
//           </motion.div>
//         </div>
//         <div className="h-20 w-96">
//           <motion.div
//             key={numbers[currentIndex].id}
//             initial={{ opacity: 1, x: 100 }}
//             animate={{ opacity: 1, x: 10 , y: 10 }}
//             exit={{ opacity: 1, x: -100 }}
//             transition={{ duration: 0.5 }}
//             className="flex justify-center items-center h-full ring"
//           >
//             <div>
//               {/* <span className="text-2xl font-bold opacity-0.5">
//               {numbers[currentIndex -1 ].value}
//             </span> */}
//               <span className="text-4xl font-bold">
//                 {numbers[currentIndex].value}
//               </span>
//               {/* <span className="text-2xl font-bold opacity-0.5">
//               {numbers[currentIndex + 1].value}
//             </span> */}
//             </div>
//           </motion.div>
//         </div>
//         <div className="h-20 w-96">
//           <motion.div
//             key={numbers[currentIndex].id}
//             initial={{ opacity: 1, x: 100 }}
//             animate={{ opacity: 1, x: 10 , y: 10 }}
//             exit={{ opacity: 1, x: -100 }}
//             transition={{ duration: 0.5 }}
//             className="flex justify-center items-center h-full ring"
//           >
//             <div>
//               {/* <span className="text-2xl font-bold opacity-0.5">
//               {numbers[currentIndex -1 ].value}
//             </span> */}
//               <span className="text-4xl font-bold">
//                 {numbers[currentIndex].value}
//               </span>
//               {/* <span className="text-2xl font-bold opacity-0.5">
//               {numbers[currentIndex + 1].value}
//             </span> */}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//       <div className="flex justify-between mt-4">
//         <button
//           onClick={prev}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//         >
//           Prev
//         </button>
//         <button
//           onClick={next}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Projects;
