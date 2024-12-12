import { PortofolioSm } from "./portofolio-sm";
import { PortofolioLg } from "./portofolio-lg";
import { Vector1 } from "../atoms/svg/vector-1";
import { Vector4 } from "../atoms/svg/vector-4";

export function Portfolio() {

  return (
    <section className="relative">
      <section className="px-3 lg:px-32">
        <h1 className="text-3xl lg:text-5xl font-bold">Our Awesome Portofolio</h1>
      </section>
      <div className="lg:hidden">
        <PortofolioSm />
        <Vector1 size={30} className=" absolute right-5 top-4" />
        <Vector4 size={15} className=" absolute left-5 -bottom-0" />
      </div>
      <div className=" hidden lg:block">
        <PortofolioLg />
        <Vector1 size={50} className="absolute right-32 top-10" />
        <Vector4 size={30} className="absolute left-20 bottom-10" />
      </div>
    </section>
  )
}