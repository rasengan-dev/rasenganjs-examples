import { RouterComponent, defineRouter } from "rasengan";
import Home from "@/app/root/pages/home.page";
import AppLayout from "@/app/root/app.layout";
import Products from "./root/pages/products";
import Faq from "./root/pages/faq";
import Blog from "./root/pages/blog";
import AboutUs from "./root/pages/about-us";

class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [],
  layout: AppLayout,
  pages: [Home,Products,Faq,Blog,AboutUs],
})(AppRouter);
