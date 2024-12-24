import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const BrandsLogos = [
  "./logos/layers.png",
  "./logos/quotient.png",
  "./logos/circooles.png",
  "./logos/hourglass.png",
  "./logos/commandr.png",
];

const carouselVariants = cva("group/brands flex w-full mx-auto overflow-hidden", {
  variants: {
    variant: {
      default: "",
      primary: "bg-black",
      secondary: "bg-[#B9FD50]",
      white: "bg-white",
      neutral: "bg-[#212121]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BrandsCarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselVariants> {}

const BrandsCarousel = ({ className, variant, ...props }: BrandsCarouselProps) => {
  return (
    <div className={cn(carouselVariants({ variant }), className)} {...props}>
      <div
        className={`group-hover/brands:paused flex animate-slide items-center gap-16 md:gap-20 py-4 shrink-0 w-[calc(2*var(5)*(theme(gap.16)+128px))] md:w-[calc(2*var(5)*(theme(gap.20)+144px))]`}
      >
        {[...BrandsLogos, ...BrandsLogos, ...BrandsLogos].map((elmt, index) => (
          <img
            key={index + 10}
            src={elmt}
            alt="logo"
            loading="lazy"
            className="aspect-auto object-contain w-32 md:w-36 h-12"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandsCarousel;
