import useArticles from "@/hooks/useArticles";
import { Button } from "../atom/button";
import BlogCard from "../molecule/cards/BlogCard";

const BlogSection = () => {
  const { articles } = useArticles();
  return (
    <section id="blog" className="w-full bg-[#111204] sm:pt-16 pb-16 sm:pb-24">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center text-white mb-20">
          <p className="font-normal text-[16px] leading-5 mb-3 text-[#B9FD50]">
            BLOGS
          </p>
          <h2 className="font-bold text-5xl mb-4">News & Articles</h2>
          <p className="font-normal text-[16px] leading-6">
            Best Articles to get started
          </p>
        </div>

        <div className="grid lg:grid-cols-2 px-6 gap-8 mb-24 2xl:max-w-[calc(100vw-304px)]">
          {articles.map((article) => (
            <BlogCard key={article.title} article={article} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            className="rounded-[16px] py-6 px-8 sm:py-8 sm:px-12 text-[#B9FD50] bg-[#111204] hover:bg-[#B9FD50] hover:text-[#111204] hover:border-[#B9FD50] border-[#B9FD50] hover:border-2"
            variant={"outline"}
            type="button"
          >
            <span className="sr-only">load more</span>
            <span className="font-bold">LOAD MORE</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
