import { CheckCircle, MoveRight } from 'lucide-react'
import { Card, CardContent } from "@/components/atom/card"
import { Title } from '../molecules/Titles'
import serviceImg1 from '@/assets/services/service1.png'
import serviceImg2 from '@/assets/services/service2.png'
import serviceImg3 from '@/assets/services/service3.png'



export default function Service() {
  const services = [
    {
      title: "User Experience Design",
      icon: serviceImg1,
      projects: "150+",
      customers: "129+",
      color: 'border-green-400/40 duration-300 ease-in hover:shadow-2xl hover:shadow-green-500/40 hover:border-transparent'
    },
    {
      title: "Product Design",
      icon: serviceImg2,
      projects: "150+",
      customers: "129+",
      color: 'border-slate-400/40 duration-300 ease-in hover:shadow-2xl hover:shadow-slate-500/40 hover:border-transparent'
    },
    {
      title: "User Interface Design",
      icon: serviceImg3,
      projects: "150+",
      customers: "129+",
      color: 'border-orange-200/40 duration-300 ease-in hover:shadow-2xl hover:shadow-orange-300/40 hover:border-transparent'
    }
  ]

  return (
    <div className="mx-auto px-4 lg:py-16 md:py-12 py-1 bg-gradient-to-b from-purple-100/40 to-white" id='service'>
      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto my-20">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-yellow-200 px-4 py-3 rounded-md text-sm">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="font-light">99.96% CLIENT SATISFACTION</span>
          </div>
          
          {/* <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            Services i provide
          </h2> */}
          <Title
          children={"Services i provide"}
          size={'lg'}
          className='font-medium py-2'
          />
          
          <div className="space-y-4 text-slate-600">
            <p>
              I will help you with fingin a solution and solve your problems, We use process design to create digital product. besids that also help their business.
            </p>
            <p>
              We use process design to create digital products. besids that also help their business
            </p>
          </div>

          <button className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-6 rounded-none hover:bg-purple-700 transition-colors border-none shadow-lg shadow-purple-500/50">
            Let's Work Together
            <MoveRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Column */}
        <div className="space-y-4 w-full">
          {services.map((service, index) => (
            <Card key={index} className='shadow-none hover:shadow-green-100/30 hover:shadow-xl lg:w-11/12 rounded-lg border-none'>
              <CardContent className={`p-9 border-4 ${service.color} rounded-lg`}>
                <div className="flex items-center gap-4">
                  <img src={service.icon} alt="" />
                  <div className="space-y-3">
                    <h3 className="font-semibold text-xl text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {service.projects} Projects • {service.customers} Happy Customer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

