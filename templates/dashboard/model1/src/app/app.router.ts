import { RouterComponent, defineRouter } from "rasengan";

import AuthRouter from "@/app/auth/auth.router";
import AppLayout from "@/app/root/layout/app.layout";
import Dashboard from "@/app/root/pages/dashboard.page";
import Charts from "@/app/root/pages/charts.page";
import Atoms from "@/app/root/pages/ui/atoms.page";
import Molecules from "@/app/root/pages/ui/molecules.page";
import Forms from "@/app/root/pages/organisms/forms.page";

class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [AuthRouter],
  layout: AppLayout,
  pages: [Dashboard, Charts, Atoms, Molecules, Forms],
})(AppRouter);
