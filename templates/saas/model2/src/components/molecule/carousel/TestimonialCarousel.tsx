import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Testimonial } from "@/entities/Testimonial";
import TestimonialCard from "../cards/TestimonialCard";

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
  showDots?: boolean;
};

const TestimonialCarousel = ({
  testimonials,
  showDots = false,
}: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const multipleTestimonials = useMemo(
    () => testimonials.length > 1,
    [testimonials]
  );

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.6,
      },
    },
  };

  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#D9D9D9",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.3,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="relative flex flex-col-reverse gap-8 md:gap-0 px-6 sm:px-0 md:flex-row md:justify-center size-full max-h-[468px] bg-primary-200/25 rounded-[10px] *:shrink-0">
      <AnimatePresence mode="popLayout">
        {testimonials[currentIndex] && (
          <motion.div
            animate={{ opacity: 1, x: 0, scale: 1 }}
            key={testimonials[currentIndex].title}
            variants={slideVariants}
            exit={{ opacity: 0, x: 0, scale: 0.8, rotate: 3 }}
            initial={{ opacity: 0, x: 0, scale: 0.8 }}
            layout
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="sm:max-w-[calc(100vw-100px)] md:max-w-[calc(100vw-200px)] lg:max-w-[calc(100vw-300px)] xl:max-w-[calc(100vw-400px)] 2xl:max-w-[calc(100vw-500px)] transition-all duration-300 ease-in max-h-[468px] border border-[#D9D9D9] rounded-[40px] py-4 md:py-8 xl:py-16 px-4 md:px-8 xl:px-14 mx-auto"
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </motion.div>
        )}
      </AnimatePresence>
      {multipleTestimonials ? (
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:mx-auto flex justify-end sm:pr-12 gap-4 md:pr-0 md:w-[90%] md:-translate-y-1/2 md:justify-between">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            tabIndex={0}
            role="button"
            className="flex size-8 cursor-pointer items-center shadow-lg justify-center rounded-full"
            onClick={handlePrevious}
          >
            <ChevronLeftIcon className="size-7" />
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            tabIndex={0}
            role="button"
            className="flex size-8 cursor-pointer items-center shadow-lg justify-center rounded-full"
            onClick={handleNext}
          >
            <ChevronRightIcon className="size-7" />
          </motion.div>
        </div>
      ) : null}
      {multipleTestimonials && showDots ? (
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 justify-center gap-3 rounded-full bg-black/25 px-2 py-1">
          {testimonials.map((_, index) => (
            <motion.div
              key={index + 20}
              className={`size-[15px] rounded-[50%] bg-neutral-300 ${
                currentIndex === index ? "bg-neutral-600" : ""
              }`}
              onClick={() => handleDotClick(index)}
              initial="initial"
              animate={currentIndex === index ? "animate" : ""}
              whileHover="hover"
              role="button"
              variants={dotsVariants}
            ></motion.div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default TestimonialCarousel;
