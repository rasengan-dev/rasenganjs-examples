import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atom/card";
import { Link } from "rasengan";
import { MoveRight } from "lucide-react";

export type Project = {
  image: string;
  categories: string[];
  title: string;
  description: string;
  link: string;
};

export function PojectCard({
  image,
  categories,
  title,
  description,
  link,
}: Project) {
  return (
    <Card className="w-full h-auto my-4 rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-shadow ease-in-out duration-300">
      <CardHeader className="">
        <img
          src={image}
          className="h-full w-full object-cover "
          alt="Image"
        />
      </CardHeader>
      <CardContent>
        <div className="my-4 text-gray-500 text-sm">
          {categories.join(" / ")}
        </div>
        <CardTitle className="text-4xl my-2">{title}</CardTitle>
        <CardDescription className="my-3 text-xl">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          to={link}
          className="text-xl text-primary font-semibold flex justify-start space-x-2"
        >
          <MoveRight />
          <p>View Case Study</p>
        </Link>
        {/* <IconButton Variant={'link'} Content="View Case Study" size={'lg'} Icon={<ArrowRight />} className="text-lg ring justify-start bg-red-300" /> */}
      </CardFooter>
    </Card>
  );
}
