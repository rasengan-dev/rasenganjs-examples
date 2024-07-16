import { PageComponent } from "rasengan";

const Molecules: PageComponent = () => {
	return <section className=''>Molecules page</section>;
};

Molecules.path = "/ui/molecules";
Molecules.metadata = {
	title: "Molecules | Rasengan.js",
	description: "Molecules page",
};

export default Molecules;
