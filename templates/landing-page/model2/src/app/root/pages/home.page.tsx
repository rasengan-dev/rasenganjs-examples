import { PageComponent } from "rasengan";

const Home: PageComponent = () => {
  return (
    <section className="w-full h-full py-8">
      Home page
    </section>
  );
}

Home.path = "/";
Home.metadata = {
  title: "Home",
  description: "Home page",
};

export default Home;