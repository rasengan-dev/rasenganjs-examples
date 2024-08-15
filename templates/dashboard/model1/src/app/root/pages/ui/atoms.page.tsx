import { Button } from "@/components/atoms/button";
import { Checkbox } from "@/components/atoms/checkbox";
import { Switch } from "@/components/atoms/switch";
import { SidebarButton } from "@/components/molecules/sidebar-button";
import { ComponentVariant } from "@/lib/enums";
import { Home01Icon } from "hugeicons-react";
import { PageComponent } from "rasengan";
const Atoms: PageComponent = () => {
  return (
    <section className="">
      {Object.entries(ComponentVariant).map(([key, value]) => {
        const val = value as any;
        return (
          <Button variant={val} key={key}>
            Label
          </Button>
        );
      })}
      {Object.entries(ComponentVariant).map(([key, value]) => {
        const val = value as any;
        return (
          <Button variant={val} size={"big"} key={key}>
            Label
          </Button>
        );
      })}
      <Checkbox />
      <Switch />
      <SidebarButton
        href="/"
        icon={Home01Icon}
        type="notification"
        label="Dashboard"
      />
    </section>
  );
};

Atoms.path = "/ui/atoms";
Atoms.metadata = {
  title: "Atoms | Rasengan.js",
  description: "Atoms page",
};

export default Atoms;
