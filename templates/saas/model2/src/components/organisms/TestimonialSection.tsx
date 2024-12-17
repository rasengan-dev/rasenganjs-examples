import TestimonialCarousel from "../molecule/carousel/TestimonialCarousel";
import useTestimonials from "@/hooks/useTestimonials";

const TestimonialSection = () => {
  const { testimonials } = useTestimonials();
  return (
    <section id="testimonials" className="pb-24 md:pb-52 pt-20">
      <div className="flex flex-col items-center mb-20">
        <p className="font-light text-[16px] leading-5 mb-3 text-[#111204]">
          TESTIMONIAL
        </p>
        <h2 className="font-bold text-5xl mb-4 max-w-[550px] text-center">
          Customer is Our Top Priority.
        </h2>
        <p className="font-light text-lg text-center max-w-[550px] px-10">
          We survey all of our clients, the results of which go directly to our CEO.
        </p>
      </div>
      <TestimonialCarousel testimonials={testimonials} />
    </section>
  );
};

export default TestimonialSection;
