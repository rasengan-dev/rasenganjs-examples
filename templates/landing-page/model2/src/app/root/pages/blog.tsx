import { PageComponent } from "rasengan";
import Image from "@rasenganjs/image";
import computer from "@/assets/images/computer.png";
import Typography from "@/components/atoms/Typography";

const Blog: PageComponent = () => {
  return (
    <section
      id="blog"
      className="flex flex-col lg:flex-row bg-custom-gradient-3 p-6 md:p-10 lg:p-[130px] gap-12"
    >
      <div className="flex flex-1 flex-col items-center lg:items-start text-center lg:text-left">
        <Typography
          className="text-2xl md:text-4xl lg:text-5xl"
          text="What Benefits Will You Get"
          weight="bold"
        />
        <div className="flex flex-col gap-6 mt-8">
          {[
            "Free Consulting With Experts Saving Money",
            "Online Banking",
            "Investment Report Every Month",
            "Saving Money For The Future",
            "Online Transactions",
          ].map((benefit, index) => (
            <p
              key={index}
              className="flex items-center gap-4 text-base md:text-lg"
            >
              <span className="bg-primary px-2 py-1 rounded-full flex items-center justify-center text-white text-xs">
                ✔
              </span>
              {benefit}
            </p>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center lg:justify-end">
        <Image src={computer} alt="computer" className="rounded-xl w-full" />
      </div>
    </section>
  );
};

Blog.path = "/blog";
Blog.metadata = {
  title: "Blog",
  description: "Blog page",
};

export default Blog;
