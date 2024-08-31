import { RouterComponent, defineRouter } from "rasengan";
import Home from "@/app/root/pages/home.page";
import AppLayout from "@/app/root/layout/app.layout";

class AppRouter extends RouterComponent {
  constructor() {
    super();
  }

  
}

export default defineRouter({
  imports: [],
  layout: AppLayout,
  pages: [Home],
})(AppRouter);
