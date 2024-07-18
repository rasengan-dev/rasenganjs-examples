import { PageComponent } from "rasengan";

const Dashboard: PageComponent = () => {
  return (
    <section className="">
      Dashboard page
    </section>
  );
};

Dashboard.path = "/";
Dashboard.metadata = {
  title: "Dashboard | Rasengan.js",
  description: "Dashboard page",
};

export default Dashboard;
