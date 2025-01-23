import Image from "@rasenganjs/image";
import computer from "@/assets/images/computer.png";
import Typography from "@/components/atoms/Typography";
import sms from "@/assets/sms.svg"
import bar from "@/assets/bar.svg"
import amanda from "@/assets/amanda.png"
import green_tick from "@/assets/green-tick.svg"
const Blog = () => {
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
        <div className="absolute max-lg:right-[350px] left-[280px] top-[300px]  bg-primary -rotate-[15deg] h-10 w-10 rounded-[10px] max-2xl:hidden flex items-center justify-center">
          <Image src={sms} alt="sms" />
        </div>
        <div className="absolute top-36 -right-16 gap-2  rounded-[10px] flex flex-col justify-between p-4 bg-white shadow-lg">
          <p className="text-[#A9A7B6] text-xs">Total Income</p>
          <div className="flex gap-8">
            <span className="text-base">$245.00</span>
            <Image src={bar} alt="Bar" className="h-full" />
          </div>
        </div>
        <div className="absolute left-[280px] top-[500px] gap-14 rounded-[10px] max-2xl:hidden flex justify-between items-center p-4 bg-white shadow-lg">
          <div className="flex justify-between items-center gap-2">
            <Image src={green_tick} alt="green_tick" className="h-full" />
            <span className="text-base">Money Transfer Succesfull</span>
          </div>
        </div>
        <div className="absolute max-lg:right-[350px] left-[270px]  top-8 gap-14 rounded-[10px] max-2xl:hidden flex justify-between items-center p-4 bg-white shadow-lg">
          <Image src={amanda} alt="amanda" className="h-full" />
          <div className="flex flex-col gap-2">
            <p className="text-[#191A15] text-base">Amanda Young</p>
            <span className="text-xs text-[#A6A6A6]">Expert Saving Money</span>
          </div>
          <p className="bg-primary p-2 rounded-full max-2xl:hidden flex items-center justify-center">
            <Image src={sms} alt="sms" className="h-4 w-4" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
