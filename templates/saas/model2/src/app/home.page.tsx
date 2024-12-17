import { PageComponent } from "rasengan";
// import logo from "@/assets/logo.svg";
// import Image from "@rasenganjs/image";
import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import * as React from "react";
import WorksSection from "@/components/organisms/WorksSection";
import CapabilitiesSection from "@/components/organisms/CapabilitiesSection";
import TestimonialSection from "@/components/organisms/TestimonialSection";
import PricingSection from "@/components/organisms/PricingSection";
import FAQsection from "@/components/organisms/FAQsection";
import FooterSection from "@/components/organisms/FooterSection";
import BlogSection from "@/components/organisms/BlogSection";
import MobileNavigation from "@/components/molecule/navigation/MobileNavigation";
import MenuProvider from "@/providers/MenuProvider";
import CustomCursor from "@/components/molecule/cursors/CustomCursor";

const Home: PageComponent = () => {
  return (
    <React.Fragment>
      <MenuProvider>
        <main className="relative">
          <CustomCursor />
          <MobileNavigation />
          <Navbar />
          <HeroSection />
          <WorksSection />
          <CapabilitiesSection />
          <TestimonialSection />
          <PricingSection />
          <BlogSection />
          <FAQsection />
          <FooterSection />
        </main>
      </MenuProvider>
    </React.Fragment>
  );
};

Home.path = "/";
Home.metadata = {
  title: "Kronix",
  description: "Kronix page",
};

export default Home;
