import React from "react";
import { Outlet, LayoutComponent } from "rasengan";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";

const AppLayout: LayoutComponent = () => {
  return (
    <React.Fragment>
      <Navbar />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </React.Fragment>
  );
};

AppLayout.path = "/";

export default AppLayout;