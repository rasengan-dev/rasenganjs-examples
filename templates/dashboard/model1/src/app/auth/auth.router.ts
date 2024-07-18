import { RouterComponent, defineRouter } from "rasengan";
import Signin from "@/app/auth/pages/signin.page";
import Signup from "@/app/auth/pages/signup.page";
import AuthLayout from "@/app/auth/layout/auth.layout";

class AuthRouter extends RouterComponent {}

export default defineRouter({
	imports: [],
	layout: AuthLayout,
	pages: [Signin, Signup],
})(AuthRouter);
