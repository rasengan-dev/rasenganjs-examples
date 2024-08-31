import { PageComponent, Link } from "rasengan";
import logo from "@/assets/logo.svg";
import Image from "@rasenganjs/image";

const Home: PageComponent = () => {
  return (
    <section className="w-full h-full min-h-screen text-foreground flex flex-col items-center py-8 px-[20px] md:px-[50px] xl:px-[200px] font-comfortaa">
      
    </section>
  );
}

Home.path = "/";
Home.metadata = {
  title: "Home",
  description: "Home page",
};

export default Home;