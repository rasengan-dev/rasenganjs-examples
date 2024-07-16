import { PageComponent } from "rasengan";

const Organisms: PageComponent = () => {
	return <section className=''>Organisms page</section>;
};

Organisms.path = "/organisms";
Organisms.metadata = {
	title: "Organisms | Rasengan.js",
	description: "Organisms page",
};

export default Organisms;
