import { PageComponent } from "rasengan";
import { Button } from "../atoms/button";
import { ButtonState } from "@/lib/enums";


const ComponentsShowcase: PageComponent = () => {
  return (
    <div className="p-8">
      <h1 className="text-6xl font-bold mb-8 text-center">Components Showcase</h1>
      
      <section className="mb-8">
        <h2 className="text-4xl font-semibold mb-4">Atoms</h2>


        <h3 className="text-xl font-semibold mb-2" >Buttons</h3>
        <div className="flex space-x-4" >
        <Button variant={'primary'} >primary</Button>
        <Button variant={'primarySecondary'} >primarySecondary</Button>
        <Button variant={'red'} >red</Button>
        <Button variant={'redSecondary'} >redSecondary</Button>
        <Button variant={'green'} state={ButtonState.LOADING}>green</Button>
        <Button variant={'greenSecondary'} >greenSecondary</Button>
        <Button variant={'warning'} >warning</Button>
        <Button variant={'warningSecondary'} >warningSecondary</Button>
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
