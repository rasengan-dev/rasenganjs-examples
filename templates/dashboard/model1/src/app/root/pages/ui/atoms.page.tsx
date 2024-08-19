import { Avatar, AvatarImage } from "@/components/atoms/avatar";
import { Button } from "@/components/atoms/button";
import { Checkbox } from "@/components/atoms/checkbox";
import { Input } from "@/components/atoms/input";
import { Logo } from "@/components/atoms/logo";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import { Switch } from "@/components/atoms/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/molecules/card";
import { ComponentVariant } from "@/lib/enums";
import { Home01Icon } from "hugeicons-react";
import { PageComponent } from "rasengan";
import getPalette from "tailwindcss-palette-generator";
import { useEffect, useState } from "react";
import theme from "../../../../../theme.json";

const Atoms: PageComponent = () => {
  const [palette, setpalette] = useState<
    Record<string, Record<string, string>>
  >({});
  useEffect(() => {
    // const theme = JSON.parse(themeJSON);
    const palette = getPalette([
      {
        color: theme.primary || "#264653",
        name: "primary",
      },
      {
        color: theme.secondary || "#264653",
        name: "secondary",
      },
      {
        color: theme.green,
        name: "green",
      },
      {
        color: theme.yellow,
        name: "yellow",
      },
      {
        color: theme.red || "#FF2424",
        name: "red",
      },
    ]);
    setpalette(palette);
  }, []);

  return (
    <section className=" flex flex-col gap-6 w-full">
      <Card>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
          <CardDescription>Defalault and small</CardDescription>
        </CardHeader>
        <CardContent className="space-x-4 space-y-4">
          {Object.entries(ComponentVariant).map(([key, value]) => {
            const val = value as any;
            return (
              <Button variant={val} key={key}>
                Label
              </Button>
            );
          })}
          {Object.entries(ComponentVariant).map(([key, value]) => {
            const val = value as any;
            return (
              <Button variant={val} size={"small"} key={key}>
                Label
              </Button>
            );
          })}
        </CardContent>
      </Card>
      <div className="flex gap-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Inputs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input lefticon={Home01Icon} placeholder="Enter a text" />
            <Input
              lefticon={Home01Icon}
              placeholder="Enter a text"
              state="valid"
            />
            <Input
              lefticon={Home01Icon}
              placeholder="Enter a text"
              state="danger"
            />
            <Input
              lefticon={Home01Icon}
              placeholder="Enter a text"
              state="warning"
            />
            <Input
              lefticon={Home01Icon}
              placeholder="Enter a text"
              state="success"
            />
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Select</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select>
              <SelectTrigger className="w-full" icon={Home01Icon}>
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger state="valid" className="w-full" icon={Home01Icon}>
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger
                state="danger"
                className="w-full"
                icon={Home01Icon}
              >
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger
                state="warning"
                className="w-full"
                icon={Home01Icon}
              >
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger
                state="success"
                className="w-full"
                icon={Home01Icon}
              >
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Checkbox and switchs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-x-4">
            <Checkbox checked />
            <Checkbox />
          </div>
          <div className="space-x-4">
            <Switch checked />
            <Switch />
          </div>
        </CardContent>
      </Card>
      <div className="flex gap-6">
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>Logo</CardTitle>
          </CardHeader>
          <CardContent>
            <Logo className="max-w-[600px]" width={"100%"} height={"auto"} />
          </CardContent>
        </Card>
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>Avatar</CardTitle>
            <CardDescription>Here is the default avatar</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Avatar className="w-40 h-40">
              <AvatarImage />
            </Avatar>
          </CardContent>
        </Card>
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Colors</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {Object.entries(palette).map(([key, value]) => {
            return (
              <div key={key} className="w-full flex justify-between">
                {Object.entries(value).map(([key_, value]) => {
                  return (
                    <div className="flex flex-col items-start gap-1 text-[10px] text-center">
                      <div
                        className={`w-10 h-10 rounded-sm`}
                        style={{ backgroundColor: value }}
                        key={key_}
                      ></div>
                      <div className="text-title font-semibold">{key}</div>
                      <div className="text-foreground font-medium">{key_}</div>
                      <div className="text-muted">{value}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Icons</CardTitle>
        </CardHeader>
        <CardContent>
          We use{" "}
          <a href="https://hugeicons.com" className="underline text-primary">
            Hugeicons
          </a>{" "}
          icons
        </CardContent>
      </Card>
    </section>
  );
};

Atoms.path = "/ui/atoms";
Atoms.metadata = {
  title: "Atoms | Rasengan.js",
  description: "Atoms page",
};

export default Atoms;
