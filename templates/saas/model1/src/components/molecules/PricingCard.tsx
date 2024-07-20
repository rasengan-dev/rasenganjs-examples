import Badge from "../atoms/Badge";
import Button from "../atoms/Button";
import Typography from "../atoms/Typography";
import { useTheme } from "@rasenganjs/theme";

interface PricingCardProps {
  className?: string;
  features?: string[];
  price: string;
  title: string;
  description: string;
  backgroundColor?: string;
}

export default function PricingCard({
  className,
  features,
  price,
  title,
  description,
  backgroundColor,
}: PricingCardProps) {
  const { isDark } = useTheme();
  return (
    <article
      className={`${isDark ? "border-rasengan-dark-border" : "border-rasengan-light-border"} w-full rounded-2xl border-[1px] h-auto p-4 min-h-[200px]`}
    >
      <div className="flex flex-col items-start">
        <Badge
          text={title}
          className={`${title === "Pro" ? "bg-blue-950" : ""}`}
          color={`${title === "Pro" ? "#172554" : ""}`}
        />
        <Typography text={description} className="mt-2 text-sm text-gray-500" />
      </div>

      <div className="mt-8 border-b-[1px] border-gray-200 pb-4 flex items-baseline">
        <Typography text={`$${price}`} className="text-4xl" weight="bold" />
        <Typography
          text="/month"
          className="text-sm text-gray-500"
          weight="normal"
        />
      </div>

      <div className="flex flex-col py-4 gap-2 border-b-[1px] border-gray-200">
        {features?.map((feature, index) => (
          <div key={index} className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              // color={"#000000"}
              fill={"none"}
            >
              <path
                d="M5 14L8.5 17.5L19 6.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Typography text={feature} className="text-sm" weight="normal" />
          </div>
        ))}
      </div>
      <div className="w-full pt-4">
        <Button
          text="Get Started"
          className={`w-full text-white ${title === "Pro" ? "bg-[#172554]" : "bg-rasengan-light-primary"}`}
        />
      </div>
    </article>
  );
}
