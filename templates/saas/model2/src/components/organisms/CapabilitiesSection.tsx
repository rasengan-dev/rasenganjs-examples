import { ArrowRightCircleIcon, LoaderIcon } from "lucide-react";
import { Button } from "../atom/button";
import { Badge } from "../atom/badge";

// Images
import requestsImg from "@/assets/icons/benefits/requests.png";
import qualityImg from "@/assets/icons/benefits/quality.png";
import webflowImg from "@/assets/icons/benefits/webflow.png";
import responsiveImg from "@/assets/icons/benefits/responsive.png";
import contractsImg from "@/assets/icons/benefits/contracts.png";
import moneyImg from "@/assets/icons/benefits/money.png";
import customizeImg from "@/assets/icons/benefits/customize.png";
import payImg from "@/assets/icons/benefits/pay.png";
import turnoversImg from "@/assets/icons/benefits/turnovers.png";
import Image from "@rasenganjs/image";
import { cn } from "@/lib/utils";
import MotionIconButton from "../molecule/buttons/MotionIconButton";
import Reveal from "../molecule/animations/Reveal";

const capabilitiesTags = [
  "Web design & UI",
  "Social media visuals",
  "Infographics",
  "Design system",
  "Email design",
  "Stationery",
  "Icons",
  "Packaging & merch",
  "Signage",
  "Brochures",
  "Logos & branding",
  "Digital ads",
  "Wireframes",
];

const Benefits: {
  icon: string;
  title: string;
  description: string;
}[] = [
  {
    icon: requestsImg,
    title: "On-demand requests",
    description:
      "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
  },
  {
    icon: qualityImg,
    title: "Top-notch quality",
    description:
      "High-end work from a dedicated team of senior designers that's always available when you need it.",
  },
  {
    icon: webflowImg,
    title: "Powered by - Webflow",
    description:
      "We build every site on Webflow, making them dynamic, accessible, and easily scalable. It’s easy for you like Squarespace but better.",
  },
  {
    icon: responsiveImg,
    title: "Fast. Responsive. Reliable.",
    description:
      "Get regular updates on your projects and can expect to receive your designs within 2-3 days.",
  },
  {
    icon: contractsImg,
    title: "No Lock in contracts",
    description:
      "Pay the same every month, no surprises. You can use it for as long as you want and cancel anytime.",
  },
  {
    icon: moneyImg,
    title: "Great value for money",
    description:
      "Get the power of dedicated design team at fraction of the cost of full-time employee. ($54k/yr vs. $112k/yr).",
  },
  {
    icon: customizeImg,
    title: "Customized for you",
    description:
      "We design and build custom for you. We’re never starting from a template unless you want that? You don't, right?",
  },
  {
    icon: payImg,
    title: "Creative paying",
    description: "We’re here when you need us and not on payroll when you don’t.",
  },
  {
    icon: turnoversImg,
    title: "Expert turnovers",
    description:
      "You’re getting 10+ years of design experience with every request. No hand-holding required.",
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="bg-[#111204] pt-24 pb-28">
      <Reveal
        variant="to-bottom"
        className="flex flex-col items-center text-white mb-12"
      >
        <p className="font-light text-[16px] leading-5 mb-3 text-[#B9FD50]">
          OUR CAPABILITIES
        </p>
        <h2 className="font-semibold text-6xl leading-[58px] tracking-tighter mb-4 px-6 text-center">
          We can help you with...
        </h2>
      </Reveal>

      <Reveal className="flex gap-4 flex-wrap justify-center px-6 md:max-w-[calc(100vw-104px)] lg:max-w-[calc(100vw-304px)] xl:max-w-[calc(100vw-404px)] mx-auto mb-14">
        {capabilitiesTags.map((tag, index) => (
          <Badge
            key={index + 3}
            className={`bg-[#B9FD50] hover:bg-[#B9FD50] text-[#111204] rounded-[8px] px-5 font-light text-lg h-[38px]`}
          >
            {tag}
          </Badge>
        ))}
      </Reveal>

      <div className="flex justify-center mb-16 md:mb-24 lg:mb-32">
        <Button
          className="rounded-[8px] h-16 px-8 flex justify-center items-center text-white hover:text-white hover:bg-accent/10 bg-[#111204] border-[#111204] hover:border-2"
          variant={"outline"}
          type="button"
        >
          <span className="sr-only">load more</span>
          <LoaderIcon className="size-8 animate-spin text-[#B9FD50]" />
          <span className="font-light text-lg">Load More</span>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-12 px-6 md:px-0 md:max-w-[calc(100vw-104px)] lg:max-w-[calc(100vw-304px)] xl:max-w-[calc(100vw-404px)] mx-auto mb-16 md:mb-24">
        <Reveal variant="to-right" className="w-full sm:w-1/2 md:w-[60%] space-y-4">
          <h3 className="text-[#B9FD50]">BENEFITS</h3>
          <p className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white">
            The design subscription that connects you to your dream team
          </p>
        </Reveal>
        <Reveal
          variant="to-left"
          className="space-y-9 w-full sm:w-1/2 md:w-[40%] sm:pt-12"
        >
          <p className="text-white/80 text-lg lg:text-2xl">
            A subscription can alleviate the stress of staffing, managing expenses,
            or make design calls like a Creative Director. We partner with you to
            ensure that your design elevates your brand to new levels.
          </p>

          <MotionIconButton
            icon={
              <ArrowRightCircleIcon className="size-5 fill-[#111204] text-[#B9FD50] -rotate-45" />
            }
          >
            See pricing
          </MotionIconButton>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6 md:px-0 md:max-w-[calc(100vw-104px)] lg:max-w-[calc(100vw-304px)] xl:max-w-[calc(100vw-404px)] mx-auto">
        {Benefits.map((benefit, index) => (
          <Reveal
            key={index + 3}
            delay={index * 0.2}
            variant="zoom-out"
            className={cn(
              "bg-[#111204] pb-12 pt-8 px-4 lg:px-8 rounded-none",
              index % 3 !== 2 ? "border-r border-[#B9FD505E]" : "",
              index < 6 ? "border-b border-[#B9FD505E]" : ""
            )}
          >
            <div className="p-0">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                loading="lazy"
                width={40}
                height={40}
                className="bg-[#111204] mb-6"
              />
              <p className="text-xl text-white mb-3">{`${index + 1}. ${
                benefit.title
              }`}</p>

              <p className="text-[16px] leading-6 text-[#9593A4] font-light">
                {benefit.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
