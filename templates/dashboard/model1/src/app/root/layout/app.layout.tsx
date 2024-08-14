import { Sidebar } from "@/components/organisms/Sidebar";
import { Outlet, LayoutComponent } from "rasengan";

const AppLayout: LayoutComponent = () => {
  return (
    <section className="flex flex-row h-screen w-screen">
      <Sidebar />
      <Outlet />
    </section>
  );
};

AppLayout.path = "/";

export default AppLayout;
