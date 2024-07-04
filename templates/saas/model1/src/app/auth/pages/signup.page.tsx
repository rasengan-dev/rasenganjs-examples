import { PageComponent } from "rasengan";

const SignUp: PageComponent = () => {
	return (
		<section>
			<h1>Sign Up</h1>
		</section>
	);
};

SignUp.path = "/sign-up";
SignUp.metadata = {
	title: "Sign Up",
	description: "Sign Up Page",
};

export default SignUp;
