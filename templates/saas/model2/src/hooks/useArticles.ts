import brandingImg from "@/assets/images/blogs/branding.png";
import tiktokImg from "@/assets/images/blogs/tiktok.png";
import logoDesignImg from "@/assets/images/blogs/logo_design.png";
import fbImg from "@/assets/images/blogs/fb.png";
import aiImg from "@/assets/images/blogs/ai.png";
import nftImg from "@/assets/images/blogs/nft.png";
import { Article } from "@/entities/Article";

const BlogArticles: Article[] = [
  {
    category: "branding",
    title: "What is the branding, and what we need it?",
    description:
      "On the other hand, we denounce with righteous indignation and small message here before ellipsis",
    image: brandingImg,
  },
  {
    category: "tiktok",
    title: "What is the branding, and what we need it?",
    description:
      "On the other hand, we denounce with righteous indignation and small message here before ellipsis",
    image: tiktokImg,
  },
  {
    category: "logo design",
    title: "What is the branding, and what we need it?",
    description:
      "On the other hand, we denounce with righteous indignation and small message here before ellipsis",
    image: logoDesignImg,
  },
  {
    category: "fb",
    title: "What is the branding, and what we need it?",
    description:
      "On the other hand, we denounce with righteous indignation and small message here before ellipsis",
    image: fbImg,
  },
  {
    category: "ai",
    title: "What is the branding, and what we need it?",
    description:
      "On the other hand, we denounce with righteous indignation and small message here before ellipsis",
    image: aiImg,
  },
  {
    category: "nft",
    title: "What is the branding, and what we need it?",
    description:
      "On the other hand, we denounce with righteous indignation and small message here before ellipsis",
    image: nftImg,
  },
];

const useArticles = () => {
  return {
    articles: BlogArticles,
  };
};

export default useArticles;
