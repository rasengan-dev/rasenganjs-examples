import { PageComponent } from "rasengan";
import { Button } from "../atoms/button";


const ComponentsShowcase: PageComponent = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Components Showcase</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Atoms</h2>
        <div className="flex space-x-4" >

        <Button variant={'green'} >Rasengan</Button>
        <Button variant={'greenSecondary'} >Rasengan</Button>
        <Button variant={'green'} >Rasengan</Button>
        <Button variant={'green'} >Rasengan</Button>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Molecules</h2>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Organisms</h2>
      
      </section>
    </div>
  );
};

ComponentsShowcase.path = "/components-showcase";
ComponentsShowcase.metadata = {
  title: "Components Showcase",
  description: "A showcase of all components used in the project"
};

export default ComponentsShowcase;
