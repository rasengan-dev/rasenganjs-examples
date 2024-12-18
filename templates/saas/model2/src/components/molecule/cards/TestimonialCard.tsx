import { Card, CardContent } from "@/components/atom/card";
import { Testimonial } from "@/entities/Testimonial";
import Image from "@rasenganjs/image";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="p-0 flex items-center gap-12 xl:gap-20">
        <div className="flex-1 space-y-4 md:space-y-10">
          <Image
            src={testimonial.logoImg}
            alt={testimonial.enterprise || "gymstory"}
            width={160}
            height={32}
          />
          <div className="space-y-4">
            <p className="font-bold text-xl xl:text-2xl capitalize">
              {testimonial.title}
            </p>
            {testimonial.description}
          </div>

          <div className="space-y-1.5">
            <p className="text-lg xl:text-xl font-bold">{testimonial.authorName}</p>
            {testimonial.authorPosition}
          </div>
        </div>
        <div className="size-60 hidden lg:block xl:size-[325px] bg-green-300 rounded-full">
          <Image
            src={testimonial.authorImg}
            alt={testimonial.authorName}
            width={240}
            height={240}
            className="xl:hidden"
          />
          <Image
            src={testimonial.authorImg}
            alt={testimonial.authorName}
            width={325}
            height={325}
            className="hidden xl:block"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
