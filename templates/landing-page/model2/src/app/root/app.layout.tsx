import React from "react";
import { Outlet, LayoutComponent } from "rasengan";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const AppLayout: LayoutComponent = () => {
  return (
    <React.Fragment>
  
      <Main>
        <Navbar />
        <Outlet />
      </Main>

      <Footer />
    </React.Fragment>
  );
};

AppLayout.path = "/";

export default AppLayout;