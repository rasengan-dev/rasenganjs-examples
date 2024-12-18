import { Button } from "../atoms/button";
import { Vector1 } from "../atoms/svg/vector-1";
import { Vector3 } from "../atoms/svg/vector-3";

export function Contact() {
  return (
    <section className="bg-[#1E1E2080] relative px-3 lg:px-32 h-80 flex gap-y-10 flex-col lg:flex-row justify-center lg:justify-between lg:items-center">
      <h2 className="text-3xl lg:text-5xl font-bold text-balance">
        Contact us for the service you want to use
      </h2>
      <Button icon={null}>Contact Us</Button>
      {/* for big screens  */}
      <div className="hidden lg:block">
        <Vector1 size={40} className="absolute bottom-4 left-32" />
        <Vector3 size={20} className="absolute top-8 right-32" />
      </div>
      {/* for small screens  */}
      <div className="block lg:hidden">
        <Vector1 size={40} className="absolute bottom-5 left-5" />
        <Vector3 size={20} className="absolute top-8 right-5" />
      </div>
    </section>
  )
}