import useHonor from "@/hooks/useHonor";
import { Title } from "../molecules/Titles";



const HonorAwards = () => {

  const {honors} = useHonor();

  return (
    <>
      <hr className="h-0.5 bg-green-100/90" />

      <div className="absolute ring z-0 lg:-translate-x-52 -translate-x-52 rounded-full blur-container blur-2xl w-96 h-96 bg-green-100/70"></div>
      <Title
        children={"Honor & Awards"}
        subtitle={
          "Proin a dui ac augue pulvinar malesuada. Quisque ac velit non ligula gravida elementum a vel ex."
        }
        alignment={"left"}
        className="max-w-7xl mx-auto sticky lg:px-0 px-6 lg:mt-28 md:mt-20 mt-10"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto mt-20 lg:mb-28 md:mb-20 mb-10">
        {honors.map((honor, index) => (
          <div
            key={index}
            className="w-full h-full p-8 bg-white rounded-lg shadow-none rounded-4xl border-none transition ease-out duration-300 hover:shadow-2xl hover:shadow-purple-200/80">
              <img src={honor.image} alt="" className="-mt-12 mb-9" />
              <p className="font-medium text-2xl">
                {honor.title}
              </p>
              <p className="font-light text-md mt-3">
                {honor.description}
              </p>
          </div>))}
      </div>
    </>
  );
};

export default HonorAwards;
