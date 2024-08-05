import { Button } from "@/components/atoms/button";
import { ComponentVariant } from "@/lib/enums";
import { PageComponent } from "rasengan";

const Dashboard: PageComponent = () => {
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
          <Button variant={val} size={"small"} key={key}>
            Label
          </Button>
        );
      })}
    </section>
  );
};

Dashboard.path = "/";
Dashboard.metadata = {
  title: "Dashboard | Rasengan.js",
  description: "Dashboard page",
};

export default Dashboard;
