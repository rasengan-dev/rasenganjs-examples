import { PageComponent } from "rasengan";

const Dashboard: PageComponent = () => {
  return (
    <section className="">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore
      debitis quo temporibus autem quia exercitationem distinctio repellendus,
      adipisci suscipit aliquid reiciendis eveniet culpa repellat fugiat
      accusamus veniam similique officiis?
    </section>
  );
};

Dashboard.path = "/";
Dashboard.metadata = {
  title: "Dashboard | Rasengan.js",
  description: "Dashboard page",
};

export default Dashboard;
