import { PageComponent } from "rasengan";

const SignIn: PageComponent = () => {
	return (
		<section>
			<h1>Sign In</h1>
		</section>
	);
};

SignIn.path = "/sign-in";
SignIn.metadata = {
	title: "Sign In",
	description: "Sign In Page",
};

export default SignIn;
