import { About } from "@/components/molecules/about";
import { Contact } from "@/components/molecules/contact";
import { Footer } from "@/components/molecules/footer";
import { Header } from "@/components/molecules/header";
import { Portfolio } from "@/components/molecules/portofolio";
// import { Hero } from "@/components/molecules/hero";
import { Services } from "@/components/molecules/services";
import { PageComponent } from "rasengan";

const Home: PageComponent = () => {

  return (
    <>
      <Header />
      {/* <Hero /> */}
      <About />
      <div className="my-20" />
      <Services />
      <div className="my-20" />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

Home.path = "/";
Home.metadata = {
  title: "Home",
  description: "Home page",
};

export default Home;