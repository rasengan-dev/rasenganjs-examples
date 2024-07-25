import { Button } from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import CardContainer from "@/components/molecules/CardContainer";
import { DataCard } from "@/components/molecules/DataCard";
import { ToastAction } from "@/components/molecules/toast/toast";
import { toast, useToast } from "@/hooks/use-toast";
import { ComponentVariant } from "@/lib/enums";
import { Alert01Icon, UserSharingIcon } from "hugeicons-react";
import { PageComponent } from "rasengan";

const Molecules: PageComponent = () => {
  const { toast } = useToast();

  return (
    <section className="">
      Molecules page
      <CardContainer title="Data Card">
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <DataCard
            variant={ComponentVariant.RED}
            icon={<UserSharingIcon size={20} />}
            title={"My Data"}
            value={"300"}
            description={"Number of admitted"}
          ></DataCard>
          <DataCard
            variant={ComponentVariant.PRIMARY}
            icon={<UserSharingIcon size={20} />}
            title={"My Data"}
            value={"300"}
            description={"Number of admitted"}
          ></DataCard>
          <DataCard
            variant={ComponentVariant.GREEN}
            icon={<UserSharingIcon size={20} />}
            title={"My Data"}
            value={"300"}
            description={"Number of admitted"}
          ></DataCard>
          <DataCard
            variant={ComponentVariant.YELLOW}
            icon={<UserSharingIcon size={20} />}
            title={"My Data"}
            value={"300"}
            description={"Number of admitted"}
          ></DataCard>
        </section>
      </CardContainer>
      <CardContainer title="Toast">
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="grid grid-cols-1 gap-3">

          <Typography text={"Toast with title"}></Typography>
          <Button
            variant="primary"
            onClick={() => {
              toast({
                title: "Calendar",
                description: "Friday, February 10, 2023 at 5:57 PM",

              });
            }}
          >
            Show calendar plan
          </Button>
          </div>

          <div className="grid grid-cols-1 gap-3">

          <Typography text={"Danger Toast"}></Typography>
          <Button
            variant="red"
            onClick={() => {
              toast({
                title: "Alert",
                variant: "danger",
                varient:'danger',
                description: "Friday, February 10, 2023 at 5:57 PM",
                icon:<Alert01Icon size={20} />
                
              });
            }}
          >
            Danger 
          </Button>
          </div>
          {/* <div className="grid grid-cols-1 gap-3">

          <Typography text={"Action Toast"}></Typography>
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Error",
                variant: "destructive",
                description: "Could not load your post",
                icon:<Alert01Icon size={20} />,
                action: <ToastAction altText="Try again">Try again</ToastAction>,
                
              });
            }}
          >
            Action Toast
          </Button>
          </div> */}
          
      
          
        </section>
      </CardContainer>
    </section>
  );
};

Molecules.path = "/ui/molecules";
Molecules.metadata = {
  title: "Molecules | Rasengan.js",
  description: "Molecules page",
};

export default Molecules;
