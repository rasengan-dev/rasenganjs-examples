import useWorkProcess from "@/hooks/useWorkProcess";
import { Title } from "../molecules/Titles";

const WorkProcess = () => {
  const { process } = useWorkProcess();
  return (
    <div className="mx-auto px-4 pt-16 pb-9 bg-gradient-to-b from-blue-100/40 to-white h-auto">
      <Title
        children="My work process"
        subtitle="Nulla ex augue, rhoncus sit amet rutrum ut, vestibulum non nisl. Etiam imperdiet quam pretium rhoncus aliquam."
        alignment={"center"}
        size={"lg"}
        className="space-y-8 font-light md:mt-20 mt-4"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:max-w-7xl md:max-w-3xl max-w-md mx-auto lg:mb-32 lg:mb-24 mb-10">
        {process.map((p) => (
          <div key={process.indexOf(p)} className={`rounded-xl lg:ring-0 md:ring-0 ring ${process.indexOf(p) === 0 && 'ring-purple-500'} ${process.indexOf(p) === 1 && 'ring-blue-500'} ${process.indexOf(p) === 2 && 'ring-orange-500'} ${process.indexOf(p) === 3 && 'ring-green-500'} ${p.css}`}>
            <div className="space-y-4 p-7">
              <div
                className={`w-14 h-14 rounded-full ${p.css} flex items-center justify-start transition-transform group-hover:scale-110`}
              >
                <div className="overflow-hidden w-20 h-20 my-2 rounded-full flex justify-center mx-auto ">
                  <img
                    src={p.logo}
                    className={`w-auto p-3 rounded-full ${p.logoCss}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {process.indexOf(p) + 1}. {p.title}
                </h3>
                <p className="text-slate-600 text-[13.5px]">{p.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
