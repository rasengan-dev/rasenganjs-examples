import { RouterComponent, defineRouter } from "rasengan";
import Dashboard from "@/app/root/pages/dashboard.page";
import AppLayout from "@/app/root/layout/app.layout";
import Chart from "@/app/root/pages/charts.page";
import Atoms from "@/app/root/pages/atoms.page";
import Molecules from "@/app/root/pages/molecules.page";
import Organisms from "@/app/root/pages/organisms.page";
import AuthRouter from "@/app/auth/auth.router";

class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [AuthRouter],
  layout: AppLayout,
  pages: [Dashboard, Chart, Atoms, Molecules, Organisms],
})(AppRouter);
