import { PageComponent } from "rasengan";

const Signin: PageComponent = () => {
	return <section>Signin page</section>;
};

Signin.path = "/signin";
Signin.metadata = {
	title: "Signin | Rasengan.js",
	description: "Signin page",
};

export default Signin;
