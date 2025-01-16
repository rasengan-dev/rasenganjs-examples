import Button from "@/components/atoms/Button";
import ToggleSwitch from "@/components/atoms/ToggleButton";
import Typography from "@/components/atoms/Typography";
import { PageComponent } from "rasengan";
import { useState } from "react";

const AboutUs: PageComponent = () => {
  const [selectedOption, setSelectedOption] = useState("Bill Monthly");

  const handleToggle = (option: string) => {
    setSelectedOption(option);
  };

  const plans = [
    {
      name: "Free",
      currency: "$",
      price: "0",
      description: "Have a go and test your superpowers",
      features: [
        "2 Users",
        "2 Files",
        "Public Share & Comments",
        "Chat Support",
        "New income apps",
      ],
      buttonText: "Signup for free",
      buttonColor: "bg-white",
      textColor: "text-primary",
      bgColor: "bg-white",
      detailBgColor: "bg-[#F9FAFB]",
      descriptionColor: "text-[#A6A6A6]",
      priceColor: "text-[#191A15]",
    },
    {
      name: "Pro",
      currency: "$",
      price: "8",
      description: "Experiment the power of infinite possibilities",
      features: [
        "4 Users",
        "All apps",
        "Unlimited editable exports",
        "Folders and collaboration",
        "All incoming apps",
      ],
      buttonText: "Go to pro",
      buttonColor: "bg-primary",
      textColor: "text-white",
      bgColor: "bg-primary",
      detailBgColor: "bg-white",
      highlight: true,
      descriptionColor: "text-white",
      priceColor: "text-white",
    },
    {
      name: "Business",
      currency: "$",
      price: "16",
      description: "Unveil new superpowers and join the Design League",
      features: [
        "All the features of pro plan",
        "Account success Manager",
        "Single Sign-On (SSO)",
        "Co-conception program",
        "Collaboration-Soon",
      ],
      buttonText: "Go to Business",
      buttonColor: "bg-white",
      textColor: "text-primary",
      bgColor: "bg-white",
      detailBgColor: "bg-[#F9FAFB]",
      descriptionColor: "text-[#A6A6A6]",
      priceColor: "text-[#191A15]",
    },
  ];

  return (
    <section
      id="about-us"
      className="bg-custom-gradient-4 px-4 pb-8 lg:px-[130px] lg:pb-[130px] flex flex-col"
    >
      <div className="flex flex-col items-center text-center">
        <Typography
          className="text-3xl md:text-4xl lg:text-5xl"
          weight="bold"
          text="Choose Plan"
        />
        <Typography
          className="text-3xl md:text-4xl lg:text-5xl mt-4"
          weight="bold"
          text="That’s Right For You"
        />
        <p className="text-sm md:text-base lg:text-lg text-[#A6A6A6]  mt-6 mb-10">
          Choose a plan that works best for you. Feel free to contact us.
        </p>
        <ToggleSwitch
          options={["Bill Monthly", "Bill Yearly"]}
          selected={selectedOption}
          onToggle={handleToggle}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-between p-6 rounded-xl shadow-lg ${
              plan.highlight ? "scale-105 overflow-hidden" : ""
            } ${plan.bgColor}`}
          >
            {/* Highlighted Background */}
            {/* {plan.highlight && (
              <div className="absolute inset-0 -z-10 flex items-center justify-center w-full h-full top-32">
                <div className="w-full max-w-[600px] h-full max-h-[600px] bg-[#6BC2A1] rounded-full"></div>
              </div>
            )} */}

            <div className="text-center">
              <h2
                className={`text-2xl md:text-3xl font-bold ${plan.priceColor}`}
              >
                {plan.name}
              </h2>
              <p
                className={`text-sm md:text-base mt-2 ${plan.descriptionColor}`}
              >
                {plan.description}
              </p>
              <div className="mt-4">
                <p
                  className={`text-sm md:text-base inline-block mr-12 ${plan.descriptionColor}`}
                >
                  {plan.currency}
                </p>
                <p className={`text-4xl md:text-5xl ${plan.priceColor}`}>
                  {plan.price}
                </p>
              </div>
              {plan.highlight && (
                <p className="text-xs md:text-sm text-white bg-[#85DAB9] px-3 py-1 rounded-md mt-2 inline-block">
                  Save $50 a year
                </p>
              )}
            </div>
            <div
              className={`flex flex-col justify-between flex-grow p-4 rounded-xl mt-6 shadow-sm ${plan.detailBgColor}`}
            >
              <ul className="space-y-4 md:space-y-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <p className="bg-primary px-2 py-1 rounded-full flex items-center justify-center text-white text-xs">
                      ✔
                    </p>
                    <p className="text-xs md:text-sm lg:text-lg text-[#191A15]">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
              <Button
                text={plan.buttonText}
                className={`mt-6 w-full py-2 shadow rounded-lg text-sm md:text-base lg:text-base ${plan.buttonColor} ${plan.textColor}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

AboutUs.path = "/aboutUs";
AboutUs.metadata = {
  title: "AboutUs",
  description: "AboutUs page",
};

export default AboutUs;
