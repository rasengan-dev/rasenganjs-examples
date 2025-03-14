import { RouterComponent, defineRouter } from "rasengan";
import Home from "@/app/root/pages/home.page";
import AppLayout from "@/app/root/app.layout";

class AppRouter extends RouterComponent {}

export default defineRouter({
	imports: [],
	layout: AppLayout,
	pages: [Home],
})(AppRouter);
