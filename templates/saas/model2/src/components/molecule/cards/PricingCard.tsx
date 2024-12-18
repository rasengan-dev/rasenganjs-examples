import { StarsIcon } from "lucide-react";
import { Badge } from "@/components/atom/badge";
import { Button } from "@/components/atom/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atom/card";
import { Separator } from "@/components/atom/separator";
import { PricingPlan } from "@/entities/PricingPlan";

type PricingCardProps = {
  pricingPlan: PricingPlan;
  isLastCard?: boolean;
};

const PricingCard = ({ pricingPlan, isLastCard = false }: PricingCardProps) => {
  return (
    <Card
      key={pricingPlan.category}
      className={`border bg-[#222222] border-[#B9FD505E] col-span-1 max-w-[404px] mx-auto py-6 lg:py-11 px-5 ${
        isLastCard ? "md:col-span-2 lg:col-span-2 xl:col-span-1 2xl:col-span-1" : ""
      }`}
    >
      <CardContent className="p-0 rounded-t-xl">
        <CardHeader className="space-y-7 p-0 mb-7 px-2 lg:px-4">
          <CardTitle className="flex items-center gap-4">
            <span className="text-white capitalize font-semibold text-4xl">
              {`${pricingPlan.category}${
                pricingPlan.period ? ` - ${pricingPlan.period}` : ""
              }`}
            </span>

            {pricingPlan.tag && (
              <Badge
                className={`${
                  pricingPlan.tag === "popular"
                    ? "bg-[#B9FD50] hover:bg-[#B9FD50]"
                    : "bg-white hover:bg-white"
                } text-[#222222] rounded-[8px] px-5 font-light h-[38px]`}
              >
                {pricingPlan.tag === "popular"
                  ? "Most Popular"
                  : pricingPlan.tag === "best"
                  ? "Best value"
                  : pricingPlan.tag}
              </Badge>
            )}
          </CardTitle>
          <CardDescription className="text-white/80 font-light text-sm pr-2 lg:pr-4">
            {pricingPlan.description}
          </CardDescription>
        </CardHeader>

        <Separator className="bg-[#B9FD505E]" />

        <div className="my-4 lg:my-8 px-2 lg:px-4">
          <p className="font-bold text-5xl text-[#B9FD50]">{`$${pricingPlan.price.value}/m`}</p>
          <p className="font-light text-white/80 text-sm">
            {pricingPlan.price.description
              ? pricingPlan.price.description
              : "Pause or cancel anytime"}{" "}
          </p>
        </div>

        <Separator className="bg-[#B9FD505E]" />

        <ul className="mt-4 lg:mt-8 space-y-3 lg:space-y-7 px-2 lg:px-4">
          {pricingPlan.features?.map((feature, index) => (
            <li
              key={index + 70}
              className="text-white font-light text-lg md:text-xl space-x-4"
            >
              {/*TODO: Start rotation animation once on component load animation */}
              <StarsIcon className="size-5 inline fill-[#B9FD50] text-[#B9FD50]" />
              {typeof feature === "string" ? <span>{feature}</span> : feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-0 px-3 lg:px-5 mt-5 lg:mt-8 flex flex-col gap-5 rounded-b-xl">
        <Button
          className="rounded-[16px] h-[56px] w-full text-[#B9FD50] bg-[#222222] hover:bg-[#B9FD50] hover:text-[#222222] hover:border-[#B9FD50] border-[#B9FD50] hover:border-2"
          variant={"outline"}
          type="button"
        >
          {/*TODO: Phone comming from right animation on hover */}
          <span className="sr-only">book a call</span>
          <span className="font-bold">Book A Call</span>
        </Button>
        <Button
          className="rounded-[16px] h-[56px] w-full bg-[#B9FD50] text-[#222222] hover:text-[#B9FD50] hover:bg-[#222222] hover:border-[#B9FD50] border-[#B9FD50] hover:border-2"
          type="button"
        >
          {/*TODO: Caddie comming from right animation on hover and text "BUY" carousel up display on hover */}
          <span className="sr-only">click to buy</span>
          <span className="font-bold">Click to buy</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
