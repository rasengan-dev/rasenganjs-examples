import { Search, Package, Layers, CircleUserRound } from "lucide-react";
import { Progress } from "@/components/atom/progress";
import skill from "@/assets/skills.png";
import { Title } from "../molecules/Titles";
import tool1 from "@/assets/Tools/tool1.png";
import tool2 from "@/assets/Tools/tool2.png";
import tool3 from "@/assets/Tools/tool3.png";
import tool4 from "@/assets/Tools/tool4.png";
import tool5 from "@/assets/Tools/tool5.png";

export default function Skills() {
  const skills = [
    {
      name: "User Research",
      value: 95,
      icon: <Search className="w-5 h-5 text-purple-500" />,
      class: "text-purple-500",
      bg: "bg-purple-500/40",
      color: "bg-purple-500",
    },
    {
      name: "User Experience Design",
      value: 87,
      icon: <CircleUserRound className="w-5 h-5 text-blue-500" />,
      class: "text-blue-500",
      bg: "bg-blue-500/50",
      color: "bg-blue-500",
    },
    {
      name: "Usability Testing",
      value: 91,
      icon: <Package className="w-5 h-5 text-green-500" />,
      class: "text-green-500",
      bg: "bg-green-500/50",
      color: "bg-green-500",
    },
    {
      name: "Interaction Design",
      value: 73,
      icon: <Layers className="w-5 h-5 text-red-500" />,
      class: "text-orange-600",
      bg: "bg-orange-600/50",
      color: "bg-orange-600",
    },
  ];

  const tools = [
    { name: "Notion", icon: tool4 },
    { name: "Figma", icon: tool5 },
    { name: "GitHub", icon: tool3 },
    { name: "Slack", icon: tool1 },
    { name: "Ps", icon: tool2 },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-100/20 to-white h-auto border-t-2 border-orange-100/50">
      <div className="lg:max-w-7xl max-w-5xl max-w-md mx-auto px-4">
        <div className="flex md:flex-nowrap flex-wrap-reverse gap-y-12 lg:gap-x-52 items-center">
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <Title
              children="My skill is my power."
              subtitle="Maecenas nec sapien ac nulla eleifend ultrices. Maecenas non sagittis dui. Donec eleifend nisi id felis."
              alignment={"left"}
              size={"lg"}
              className="md:inline lg:inline hidden space-y-4 font-light"
            />
            <div className="space-y-6 w-full mt-9">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className="font-medium text-lg text-slate-900">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`${skill.class} text-md font-semibold`}>
                      {skill.value}%
                    </span>
                  </div>
                  <Progress
                    value={skill.value}
                    color={skill.color}
                    className={`h-1 ${skill.bg}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-5 lg:-left-28 rounded-xl shadow-lg z-20 pt-6 border-[3px] border-white w-auto p-8 rounded-xl bg-white/80 backdrop-blur-2xl">
              <p className="text-md font-medium mb-4">🚀 Tools I Use</p>
              <div className="flex gap-3">
                {tools.map((tool, index) => (
                  <img
                    key={index}
                    src={tool.icon}
                    alt={tool.icon}
                    className="w-12 h-12"
                  />
                ))}
              </div>
            </div>
            <div className="absolute -z-10 top-0 right-0 w-4/5 h-4/5 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 rounded-full blur-2xl" />
            <img
              src={skill}
              alt="Professional portrait"
              className="relative z-10 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
