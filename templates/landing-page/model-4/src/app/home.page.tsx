import { About } from "@/components/molecules/about";
import { Header } from "@/components/molecules/header";
import { Hero } from "@/components/molecules/hero";
import { PageComponent } from "rasengan";

const Home: PageComponent = () => {

  return (
    <>
      <Header />
      {/* <Hero /> */}
      <About />
    </>
  );
}

Home.path = "/";
Home.metadata = {
  title: "Home",
  description: "Home page",
};

export default Home;