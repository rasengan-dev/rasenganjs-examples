import { Sidebar } from "@/components/organisms/Sidebar";
import { Topbar } from "@/components/organisms/Topbar";
import { Outlet, LayoutComponent } from "rasengan";
import { Toaster } from "@/components/molecules/toaster";
const AppLayout: LayoutComponent = () => {
  return (
    <section className="flex flex-row h-screen w-screen">
      <Sidebar />
      <main className="w-[calc(100%-300px)]">
        <Topbar />
        <div className="p-6 h-[calc(100vh-100px)] overflow-auto">
          <Outlet />

          <Toaster />
        </div>
      </main>
    </section>
  );
};

AppLayout.path = "/";

export default AppLayout;
