import React from "react";
import { Outlet, LayoutComponent } from "rasengan";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";

const AppLayout: LayoutComponent = () => {
  return (
    <section className="bg-background">
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </section>
  );
};

AppLayout.path = "/";

export default AppLayout;