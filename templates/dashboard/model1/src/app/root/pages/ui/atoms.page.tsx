import Input from "@/components/atoms/Input";
import NavItem from "@/components/atoms/NavItem";
import CardContainer from "@/components/molecules/CardContainer";
import { PageComponent } from "rasengan";
import {
  Home02Icon,
  Atom01Icon,
  CallIcon,
  UserSharingIcon,
} from "hugeicons-react";
import { Button } from "@/components/atoms/Button";
import { Select } from "@/components/atoms/Select";
import { ComponentState, ComponentVariant } from "@/lib/enums";
import { Checkbox } from "@/components/atoms/Checkbox";
import { Switch } from "@/components/atoms/Switch";

const Atoms: PageComponent = () => {
  return (
    <section className="pb-24">
      {/* Inputs */}
      <CardContainer title="Simple Inputs">
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input placeholder="Input without label and icon" fullWidth />
          <Input placeholder="Input with icon" fullWidth>
            <UserSharingIcon size={20} />
          </Input>
          <Input
            placeholder="Input with icon"
            className="border-warning-400"
            fullWidth
          >
            <CallIcon size={20} />
          </Input>
          <Input
            placeholder="Input with icon"
            className="border-success-400"
            fullWidth
          >
            <CallIcon size={20} />
          </Input>
        </section>
      </CardContainer>

      <CardContainer title="Sidebar buttons">
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <NavItem title="Dashboard">
            <Home02Icon size={20} />
          </NavItem>
          <NavItem title="Atoms">
            <Atom01Icon size={20} />
          </NavItem>
          <NavItem title="Dashboard" active>
            <Home02Icon size={20} />
          </NavItem>
          <NavItem title="Atoms" active>
            <Atom01Icon size={20} />
          </NavItem>
        </section>
      </CardContainer>

      <CardContainer title="Buttons">
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Button size={"lg"}>Large Button</Button>
          <Button size={"lg"} variant={"red"}>
            Danger #Button
          </Button>
          <Button size={"lg"} variant={"outline"}>
            outline Button
          </Button>
          <Button size={"lg"} variant={"link"}>
            Link
          </Button>
        </section>
      </CardContainer>

      <CardContainer title="Select">
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Select
            variant={ComponentVariant.PRIMARY}
            label="Default Select"
            icon={<UserSharingIcon size={20} color="#2A7FFF" />}
          >
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>
          <Select
            variant={ComponentVariant.RED}
            label="Default Select"
            icon={<UserSharingIcon size={20} color="#FF2424" />}
          >
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>
        </section>
      </CardContainer>

      <CardContainer title="Checkbox">
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>

          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" variant={ComponentVariant.RED} />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-sm text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </section>
      </CardContainer>

      <CardContainer title="Switch">
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="airplane-mode"
              variant={ComponentVariant.PRIMARY}
            
            />
            <label htmlFor="airplane-mode">Primary Enable</label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="airplane-mode"
              variant={ComponentVariant.RED}
            
            />
            <label htmlFor="airplane-mode">RED Enable</label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="airplane-mode"
              variant={ComponentVariant.PRIMARY}
              state={ComponentState.DISABLED}
            />
            <label htmlFor="airplane-mode">Disable</label>
          </div>
        </section>
      </CardContainer>
    </section>
  );
};

Atoms.path = "/ui/atoms";
Atoms.metadata = {
  title: "Atoms | Rasengan.js",
  description: "Atoms page",
};

export default Atoms;
