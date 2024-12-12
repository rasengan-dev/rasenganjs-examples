import { DevelopmentSVG } from "../atoms/svg/development";
import { GraphicDesignSVG } from "../atoms/svg/graphic-design";
import { MotionGraphikSVG } from "../atoms/svg/motion-graphik";
import { PhotographySVG } from "../atoms/svg/photography";
import { UiUxDesignSVG } from "../atoms/svg/ui-ux-design";
import { Vector2 } from "../atoms/svg/vector-2";
import { Vector3 } from "../atoms/svg/vector-3";
import { VideographySVG } from "../atoms/svg/videography";

export function Services() {
  const items = [
    {
      title: 'Development',
      description: 'Create a platform with the best and coolest quality from us.',
      icon: <DevelopmentSVG size={32} stroke="#5454D4" />,
      bgColor: 'bg-[#5454D4]',
    },
    {
      title: 'UI/UX Designer',
      description: 'We provide UI/UX Design services, and of course with the best quality',
      icon: <UiUxDesignSVG size={32} stroke="#F04037" />,
      bgColor: 'bg-[#F04037]',
    },
    {
      title: 'Graphik Designer',
      description: 'We provide Graphic Design services, with the best designers',
      icon: <GraphicDesignSVG size={32} stroke="#FEDC5A" />,
      bgColor: 'bg-[#FEDC5A]',
    },
    {
      title: 'Motion Graphik',
      description: 'Create a platform with the best and coolest quality from us.',
      icon: <MotionGraphikSVG size={32} stroke="#FEDC5A" />,
      bgColor: 'bg-[#FEDC5A]',
    },
    {
      title: 'Photography',
      description: 'We provide Photography services, and of course with the best quality',
      icon: <PhotographySVG size={32} stroke="#5454D4" />,
      bgColor: 'bg-[#5454D4]',
    },
    {
      title: 'Videography',
      description: 'Create a platform with the best and coolest quality from us.',
      icon: <VideographySVG size={32} stroke="#F04037" />,
      bgColor: 'bg-[#F04037]',
    },
  ]

  return (
    <>
      {/* <section className="mb-16 lg:mb-8" /> */}
      <section className="px-3 lg:px-32">
        <div className="relative">
          <Vector2 size={70} className="absolute left-0 lg:-top-6 -top-16" />
          <Vector3 size={16} className="absolute right-0 bottom-0 rotate-[32deg]" />
          <h1 className="w-full lg:w-1/2 lg:mx-auto text-balance lg:text-pretty text-3xl lg:text-5xl font-bold lg:text-center">The Service We Provide For You</h1>
        </div>
        <section className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {
            items.map((item, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <div className="flex justify-center">
                  <div
                    className={`p-3 rounded-full ${item.bgColor} bg-opacity-30`}
                  >
                    {item.icon}
                  </div>
                </div>
                <h5 className="text-center font-medium text-2xl">{item.title}</h5>
                <p className="text-center text-balance font-extralight">{item.description}</p>
              </div>
            ))
          }
        </section>
      </section>
    </>
  )
}