import { Atom01Icon } from "hugeicons-react";
import { FunctionComponent } from "react";
import { Input } from "../atoms/input";

export type TopbarProps = {};

export const Topbar: FunctionComponent<TopbarProps> = () => {
  return (
    <nav
      className={
        "h-24 flex bg-white border-b border-border px-6 items-center justify-between"
      }
    >
      <div className="flex items-center gap-4">
        <Atom01Icon className="text-primary" />
        <span className="font-semibold text-2xl text-title">Atoms</span>
      </div>
      <Input type="text" placeholder="Search some thing" />
    </nav>
  );
};
