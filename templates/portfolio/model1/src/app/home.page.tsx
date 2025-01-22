import { PageComponent } from "rasengan";
import Navbar from "@/components/organism/Navbar";
import MenuProvider from "@/providers/MenuProvider";
import HeroSection from "@/components/organism/HeroSection";
import RecentProject from "@/components/organism/Projects";
import Bio from "@/components/organism/Bio";
import HonorAwards from "@/components/organism/HonorAwards";
import Service from "@/components/organism/Service";
import WorkProcess from "@/components/organism/WorkProcess";
import Skills from "@/components/organism/Skills";
import Testimonial from "@/components/organism/Testimonial";
import CallToAction from "@/components/organism/CallToAction";
import Blog from "@/components/organism/Blog";
import Contact from "@/components/organism/Contact";
import Footer from "@/components/organism/Footer";



const Home: PageComponent = () => {
  return (
    <div className="scroll-smooth">
        <MenuProvider>
          <Navbar />
          <HeroSection />
          <RecentProject />
          <Bio />
          <HonorAwards />
          <Service />
          <WorkProcess />
          <Skills />
          <Testimonial />
          <CallToAction />
          <Blog />
          <Contact />
          <Footer />
        </MenuProvider>
    </div>
  );
};

Home.path = "/";
Home.metadata = {
  title: "Home",
  description: "Home page",
};

export default Home;
