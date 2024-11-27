import { Header } from "@/components/molecules/header";
import { PageComponent } from "rasengan";

const Home: PageComponent = () => {

  return (
    <>
      <Header />
    </>
  );
}

Home.path = "/";
Home.metadata = {
  title: "Home",
  description: "Home page",
};

export default Home;