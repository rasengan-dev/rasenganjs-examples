import { RouterComponent, defineRouter } from "rasengan";
import Home from "@/app/home.page";
import AppLayout from "@/app/app.layout";
import ComponentsShowcase from "@/components/pages/ComponentsShowcase";

class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [],
  layout: AppLayout,
  pages: [Home,ComponentsShowcase],
})(AppRouter);
