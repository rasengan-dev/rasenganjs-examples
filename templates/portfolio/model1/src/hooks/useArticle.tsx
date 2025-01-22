import { Article } from "@/entities/Article";
import Article1Img from '@/assets/articles/article1.png'
import Article2Img from '@/assets/articles/article2.png'
import Article3Img from '@/assets/articles/article3.png'

const Articles : Article[] = [
     {    
          date: '17 Oct, 2020',
          readingTime: 5,
          title: "Duis magna risus, convallis vel purus eu, sollicidin volutpat velit.",
          description:"Praesent turpis quam, dapibus id diam a, cursus lobortis mi. Praesent nec lorem eget nisi sodales vehicula etiam sagittis dapibus.",
          image: Article1Img,
          link: '#'
     },
     {    
          date: '24 May, 2020',
          readingTime: 6,
          title: "Duis magna risus, convallis vel purus eu, sollicidin volutpat velit.",
          description:"Praesent turpis quam, dapibus id diam a, cursus lobortis mi. Praesent nec lorem eget nisi sodales vehicula etiam sagittis dapibus.",
          image: Article2Img,
          link: '#'
     },
     {    
          date: '1 Feb, 2020',
          readingTime: 5,
          title: "Duis magna risus, convallis vel purus eu, sollicidin volutpat velit.",
          description:"Praesent turpis quam, dapibus id diam a, cursus lobortis mi. Praesent nec lorem eget nisi sodales vehicula etiam sagittis dapibus.",
          image: Article3Img,
          link: '#'
     },
]

const useArticle = () => {
     return {
          articles: Articles,
     }
}
export default useArticle;