import { PageComponent } from "rasengan";

const Atoms: PageComponent = () => {
	return <section className=''>Atoms page</section>;
};

Atoms.path = "/atoms";
Atoms.metadata = {
	title: "Atoms | Rasengan.js",
	description: "Atoms page",
};

export default Atoms;
