import { Testimonial } from "@/entities/Testimonial";
// import gymstoryImg from "@/assets/images/logos/gymstory.png";
import userImg from "@/assets/user.png";

const Testimonials: Testimonial[] = [
  {
    logoImg: "./logos/gymstory.png",
    title:
      "1. Kronix is the best digital agency i have ever seen! Highly Recommended!",
    description: (
      <p>
        I recently hired <strong>Ideapeel</strong> for a custom web development
        project and couldn't be happier with the results. The team was able to bring
        my unique ideas to life and create a website that truly stands out.
      </p>
    ),
    authorName: "Diana Loreza",
    authorImg: userImg,
    authorPosition: (
      <p className="font-light text-[16px] leading-6">
        Director of <span className="font-bold uppercase">Gymstory</span>
      </p>
    ),
  },
  {
    logoImg: "./logos/gymstory.png",
    title:
      "2. Kronix is the best digital agency i have ever seen! Highly Recommended!",
    description: (
      <p>
        I recently hired <strong>Ideapeel</strong> for a custom web development
        project and couldn't be happier with the results. The team was able to bring
        my unique ideas to life and create a website that truly stands out.
      </p>
    ),
    authorName: "Diana Loreza",
    authorImg: userImg,
    authorPosition: (
      <p className="font-light text-[16px] leading-6">
        Director of <span className="font-bold uppercase">Gymstory</span>
      </p>
    ),
  },
];

const useTestimonials = () => {
  return {
    testimonials: Testimonials,
  };
};

export default useTestimonials;
