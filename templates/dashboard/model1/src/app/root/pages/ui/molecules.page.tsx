import { Alert } from "@/components/molecules/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/molecules/card";
import { Notification } from "@/components/molecules/notification";
import { PageComponent } from "rasengan";
import { DataCard } from "@/components/molecules/data-card";
import { Dollar01Icon, Home01Icon } from "hugeicons-react";
import { SidebarButton } from "@/components/molecules/sidebar-button";
import { Tabs, TabsList, TabsTrigger } from "@/components/molecules/tabs";

const Molecules: PageComponent = () => {
  return (
    <section className="space-y-6">
      <div className="flex gap-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert title={"Alert title"}>
              Crypto ipsum bitcoin ethereum dogecoin litecoin. Monero
              decentraland polygon revain dash BitTorrent IOTA secret shiba-inu
              holo.
            </Alert>
            <Alert title={"Alert title"} state="danger">
              Crypto ipsum bitcoin ethereum dogecoin litecoin. Monero
              decentraland polygon revain dash BitTorrent IOTA secret shiba-inu
              holo.
            </Alert>
            <Alert title={"Alert title"} state="warning">
              Crypto ipsum bitcoin ethereum dogecoin litecoin. Monero
              decentraland polygon revain dash BitTorrent IOTA secret shiba-inu
              holo.
            </Alert>
            <Alert title={"Alert title"} state="success">
              Crypto ipsum bitcoin ethereum dogecoin litecoin. Monero
              decentraland polygon revain dash BitTorrent IOTA secret shiba-inu
              holo.
            </Alert>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Notification title={"Notification title"}>
              Crypto ipsum bitcoin ethereum dogecoin litecoin. Monero
              decentraland polygon revain dash BitTorrent IOTA secret shiba-inu
              holo.
            </Notification>
            <Notification title={"Notification title"} state="danger">
              Crypto ipsum bitcoin ethereum dogecoin litecoin. Monero
              decentraland polygon revain dash BitTorrent IOTA secret shiba-inu
              holo.
            </Notification>
            <Notification title={"Notification title"} state="warning">
              Crypto ipsum bitcoin ethereum dogecoin litecoin. Monero
              decentraland polygon revain dash BitTorrent IOTA secret shiba-inu
              holo.
            </Notification>
            <Notification title={"Notification title"} state="success">
              Crypto ipsum bitcoin ethereum dogecoin litecoin. Monero
              decentraland polygon revain dash BitTorrent IOTA secret shiba-inu
              holo.
            </Notification>
          </CardContent>
        </Card>
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Data cards</CardTitle>
        </CardHeader>
        <CardContent className="flex space-x-4">
          <DataCard
            icon={Dollar01Icon}
            label={"Data Card"}
            value={"000 000 000"}
            description={"Description"}
          />
          <DataCard
            icon={Dollar01Icon}
            label={"Data Card"}
            state="danger"
            value={"000 000 000"}
            description={"Description"}
          />
          <DataCard
            icon={Dollar01Icon}
            label={"Data Card"}
            state="warning"
            value={"000 000 000"}
            description={"Description"}
          />
          <DataCard
            icon={Dollar01Icon}
            label={"Data Card"}
            state="success"
            value={"000 000 000"}
            description={"Description"}
          />
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Sidebar buttons</CardTitle>
        </CardHeader>
        <CardContent className="space-x-4">
          <SidebarButton href="#" label="Sidebar button" icon={Home01Icon} />
          <SidebarButton
            href="#"
            label="Sidebar button"
            icon={Home01Icon}
            isActive
          />
          <SidebarButton
            href="#"
            label="Sidebar button"
            icon={Home01Icon}
            type="alert"
          />
          <SidebarButton
            href="#"
            label="Sidebar button"
            icon={Home01Icon}
            type="notification"
          />
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Tabs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs defaultValue="account">
            <TabsList variant="white-muted">
              <TabsTrigger variant="white-muted" value="account">
                Account
              </TabsTrigger>
              <TabsTrigger variant="white-muted" value="password">
                Password
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card</CardTitle>
        </CardHeader>
        <CardContent>
          <Card>
            <CardHeader>
              <CardTitle>Card title</CardTitle>
              <CardDescription>Card description</CardDescription>
            </CardHeader>
            <CardContent>Content</CardContent>
          </Card>
        </CardContent>
      </Card>
    </section>
  );
};

Molecules.path = "/ui/molecules";
Molecules.metadata = {
  title: "Molecules | Rasengan.js",
  description: "Molecules page",
};

export default Molecules;
