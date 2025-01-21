import fullStar from "@/assets/full-star.svg";
import emptyStar from "@/assets/empty-star.svg";
import activity from "@/assets/activity.svg";
import pieChart from "@/assets/activity.svg";
import command from "@/assets/command.svg";
import Image from "@rasenganjs/image";

const Products = () => {
  const starCount = 5;
  const starCount_ = 4;

  return (
    <section
      id="products"
      className="flex flex-col lg:flex-row p-8 lg:px-[130px] lg:py-16 bg-[#faf8ff] gap-8"
    >
      <div className="flex flex-col flex-1">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left">
          How we support our partners all over the world
        </h3>
        <p className="pt-6 pb-8 text-base text-[#A6A6A6] text-center lg:text-left">
          SaaS has become a common delivery model for many business
          applications, including office software, messaging software, payroll
          processing software, DBMS software, and management software.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8 mt-12">
          {[
            { stars: starCount, rating: "4.9", name: "Databricks" },
            { stars: starCount_, rating: "4.8", name: "Chainalysis" },
          ].map(({ stars, rating, name }, idx) => (
            <div key={idx} className="text-center">
              <div className="flex justify-center gap-1">
                {Array.from({ length: stars }).map((_, index) => (
                  <Image key={index} src={fullStar} alt="fullStar" />
                ))}
                {stars < 5 && <Image src={emptyStar} alt="emptyStar" />}
              </div>
              <p>
                <span className="font-bold">{rating}</span> / 5 rating
              </p>
              <span className="text-[#A6A6A6]">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 max-md:pt-8 max-md:gap-8 justify-between">
        {[
          {
            icon: activity,
            title: "Publishing",
            description:
              "Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand.",
          },
          {
            icon: pieChart,
            title: "Analytics",
            description:
              "Analyze your performance and create gorgeous reports.",
          },
          {
            icon: command,
            title: "Engagement",
            description: "Quickly navigate and engage with your audience.",
          },
        ].map(({ icon, title, description }, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="bg-white p-4 h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src={icon}
                alt={title}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <h6 className="text-2xl font-bold">{title}</h6>
              <p className="text-base md:text-lg text-[#A6A6A6]">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
