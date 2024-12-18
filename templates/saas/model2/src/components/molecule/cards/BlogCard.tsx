import { Card, CardContent } from "@/components/atom/card";
import { Article } from "@/entities/Article";
import Image from "@rasenganjs/image";

type BlogCardProps = {
  article: Article;
};

const BlogCard = ({ article }: BlogCardProps) => {
  return (
    <Card className="rounded-r-xl relative cursor-none hover:scale-105 transform-gpu duration-75 ease-in custom-cursor overflow-hidden w-[323px] sm:w-auto sm:h-[212px] max-w-[528px] mx-auto rounded-l-2xl bg-transparent z-40 border border-[#B9FD505E]">
      <CardContent className="flex flex-col sm:flex-row p-0 rounded-xl">
        <Image
          src={article.image}
          width={323}
          height={212}
          alt={article.title}
          className="aspect-auto object-contain block sm:hidden rounded-xl"
          loading="lazy"
        />
        <Image
          src={article.image}
          width={223}
          height={212}
          alt={article.title}
          className="aspect-auto object-contain hidden sm:block"
          loading="lazy"
        />
        <div className="flex-1 h-full p-5 rounded-r-xl">
          <p className="uppercase font-semibold text-sm text-[#B9FD50] mb-3">
            {article.category}
          </p>
          <p className="text-xl xl:text-2xl text-white font-bold mb-[14px]">
            {article.title}
          </p>
          <p className="text-[#ABABB2] text-[16px] font-normal leading-6 line-clamp-2">
            {article.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
