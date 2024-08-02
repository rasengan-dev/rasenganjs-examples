import { Outlet, LayoutComponent } from "rasengan";

const AppLayout: LayoutComponent = () => {
  return (
    <section className="flex flex-row h-screen w-screen">
      <Outlet />
    </section>
  );
};

AppLayout.path = "/";

export default AppLayout;
