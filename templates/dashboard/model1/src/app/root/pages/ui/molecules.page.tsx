import CardContainer from "@/components/molecules/CardContainer";
import { DataCard } from "@/components/molecules/DataCard";
import { ComponentVariant } from "@/lib/enums";
import { UserSharingIcon } from "hugeicons-react";
import { PageComponent } from "rasengan";

const Molecules: PageComponent = () => {
  return <section className="">Molecules page
  
  
  <CardContainer title="Data Card">
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         <DataCard variant={ComponentVariant.RED}  icon={<UserSharingIcon size={20} />} title={"My Data"} value={"300"} description={"Number of admitted"}></DataCard>
         <DataCard variant={ComponentVariant.PRIMARY}  icon={<UserSharingIcon size={20} />} title={"My Data"} value={"300"} description={"Number of admitted"}></DataCard>
         <DataCard variant={ComponentVariant.GREEN}  icon={<UserSharingIcon size={20} />} title={"My Data"} value={"300"} description={"Number of admitted"}></DataCard>
         <DataCard variant={ComponentVariant.YELLOW}  icon={<UserSharingIcon size={20} />} title={"My Data"} value={"300"} description={"Number of admitted"}></DataCard>
        </section>
      </CardContainer>
  </section>;
};

Molecules.path = "/ui/molecules";
Molecules.metadata = {
  title: "Molecules | Rasengan.js",
  description: "Molecules page",
};

export default Molecules;
