import { ArrowRight, Calendar, Notebook } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/atom/card"
import Image from '@rasenganjs/image'
import post1 from '@/assets/article/article1.png'
import post2 from '@/assets/article/article2.png'
import post3 from '@/assets/article/article3.png'

interface Article {
  id: number
  title: string
  description: string
  date: string
  readTime: string
  image: string
}

const articles: Article[] = [
  {
    id: 1,
    title: "Duis magna risus, convallis vel purus eu, sollicidin volutpat velit.",
    description: "Praesent turpis quam, dapibus id diam a, cursus lobortis mi. Praesent nec lorem eget nisi sodales vehicula etiam sagittis dapibus.",
    date: "17 Oct, 2020",
    readTime: "5 min read",
    image: post1
  },
  {
    id: 2,
    title: "Duis magna risus, convallis vel purus eu, sollicidin volutpat velit.",
    description: "Praesent turpis quam, dapibus id diam a, cursus lobortis mi. Praesent nec lorem eget nisi sodales vehicula etiam sagittis dapibus.",
    date: "24 May, 2020",
    readTime: "5 min read",
    image: post2
  },
  {
    id: 3,
    title: "Duis magna risus, convallis vel purus eu, sollicidin volutpat velit.",
    description: "Praesent turpis quam, dapibus id diam a, cursus lobortis mi. Praesent nec lorem eget nisi sodales vehicula etiam sagittis dapibus.",
    date: "1 Feb, 2020",
    readTime: "5 min read",
    image: post3
  }
]

export default function Blog() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-500/10 to-transparent" id='article'>
      <div className="md:max-w-5xl lg:max-w-7xl max-w-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-xl">
            Nam malesuada est elementum nibh tristique, non ornare lacus mollis. Sed lectus nulla, ultrices in gravida in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <Card key={article.id} className="shadow-none bg-white border-none overflow-hidden hover:shadow-xl duration-300 ease-in transition-shadow pt-5">
              <div className="aspect-video relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="object-cover mx-auto"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Notebook className="w-4 h-4 text-purple-500" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 text-sm line-clamp-3">
                  {article.description}
                </p>
              </CardContent>

              <CardFooter className="px-6">
                <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors border-2 border-purple-600/20 ease-out duration-300 hover:border-purple-600 p-3 px-5 rounded-lg">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

