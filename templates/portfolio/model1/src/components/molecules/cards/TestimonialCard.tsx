import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/atom/card";
import { Testimonial } from "@/entities/Testimonial";
import { cn } from "@/lib/utils";


export function TestimonialCard({
  image,
  quote,
  author,
  position,
  company,
  className
}: Testimonial) {
  return (
    <Card className="w-full h-auto lg:my-4 rounded-2xl bg-transparent shadow-none border-none lg:mt-16">
      <CardHeader className='-mb-16'>
        <img
          src={image}
          className={`h-24 w-24 rounded-full mx-auto ${className && className?.length > 5 ? 'bg-white opacity-50': ''}`}
          alt="Image"
        />
      </CardHeader>
      <div className={cn('rounded-2xl bg-white shadow-none border-none hover:shadow-2xl hover:shadow-slate-300/20 transition-shadow ease-in-out duration-300 pt-12'
      )}>
        <CardContent className={`${className && className?.length > 5 ? 'bg-white opacity-50': ''}`}>
          <CardDescription className="my-3 lg:text-xl text-md text-center">
            {quote}
          </CardDescription>
        </CardContent>
        <CardFooter className={`flex-col space-y-2 ${className && className?.length > 5 ? 'bg-white opacity-50': ''}`} >
          <p>{author}</p>
          <p className="text-slate-500 text-sm">
            {position} of <span className="text-black text-lg">{company}</span>
          </p>
          {/* <IconButton Variant={'link'} Content="View Case Study" size={'lg'} Icon={<ArrowRight />} className="text-lg ring justify-start bg-red-300" /> */}
        </CardFooter>
      </div>
    </Card>
  );
}
