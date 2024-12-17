import Reveal from "../molecule/animations/Reveal";
import PricingCard from "../molecule/cards/PricingCard";
import usePricingPlans from "@/hooks/usePricingPlans";

const PricingSection = () => {
  const { pricingPlans } = usePricingPlans();

  return (
    <section id="pricing" className="w-full bg-[#111204] pt-24 pb-8">
      <div className="max-w-[1140px] mx-auto">
        <Reveal
          variant="to-bottom"
          className="flex flex-col items-center text-white mb-20"
        >
          <p className="font-light text-[16px] leading-5 mb-3 text-[#B9FD50]">
            Clear & Simple Pricing
          </p>
          <h2 className="font-bold text-5xl mb-4 px-6 md:px-0 text-center">
            Simple pricing to level up your brand.
          </h2>
          <p className="font-light text-lg text-center max-w-[550px] text-white/80 px-14">
            Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee.
            Cancel anytime.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-24 mx-auto px-6 md:px-0 md:max-w-[calc(100vw-54px)] lg:max-w-[calc(100vw-174px)] xl:max-w-[calc(100vw-204px)] 2xl:max-w-[calc(100vw-304px)]">
          {pricingPlans.map((pricingPlan, index) => (
            <PricingCard
              key={pricingPlan.category}
              pricingPlan={pricingPlan}
              isLastCard={index === pricingPlans.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
