import { Vector2 } from "../atoms/svg/vector-2";
import { Vector3 } from "../atoms/svg/vector-3";

export function Services() {
  return (
    <>
      <section className="mb-16 lg:mb-8" />
      <section className="px-3 lg:px-32">
        <div className="relative">
          <Vector2 size={70} className="absolute left-0 lg:-top-6 -top-16" />
          <Vector3 size={16} className="absolute right-0 bottom-0 rotate-[28deg]" />
          <h1 className="text-3xl w-full lg:w-1/2 lg:mx-auto text-balance lg:text-pretty lg:text-5xl font-bold lg:text-center">The Service We Provide For You</h1>
        </div>
      </section>
    </>
  )
}