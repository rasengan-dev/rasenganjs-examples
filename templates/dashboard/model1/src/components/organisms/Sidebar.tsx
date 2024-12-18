import React, { FunctionComponent, useCallback, useState } from "react";
import { SidebarButton, SidebarButtonProps } from "../molecules/sidebar-button";
import {
  ChartBarLineIcon,
  Home02Icon,
  Menu10Icon,
  Atom01Icon,
  MoleculesIcon,
  CircleIcon,
} from "hugeicons-react";
import Image from "@rasenganjs/image";
import logo from "@/assets/logo.svg";
import { Avatar, AvatarImage } from "@/components/atoms/avatar";
import { useLocation } from "rasengan";

type SidebarCategory = { name: string; links: SidebarButtonProps[] };
export type SidebarProps = { links?: SidebarCategory[] };

export const Sidebar: FunctionComponent<SidebarProps> = (props) => {
  const [links] = useState<SidebarCategory[]>(
    props.links || [
      {
        name: "Data managing",
        links: [
          {
            href: "/",
            icon: Home02Icon,
            label: "Dashboard",
            isActive: false,
          },
          {
            href: "/charts",
            icon: ChartBarLineIcon,
            label: "Data visualisation",
            isActive: false,
          },
        ],
      },
      {
        name: "UI elements",
        links: [
          {
            href: "/ui/atoms",
            icon: Atom01Icon,
            label: "Atoms",
            isActive: false,
          },
          {
            href: "/ui/molecules",
            icon: MoleculesIcon,
            label: "Molecules",
            isActive: false,
          },
        ],
      },
      {
        name: "Organisms",
        links: [
          {
            href: "/organisms",
            icon: CircleIcon,
            label: "Forms",
            isActive: false,
          },
        ],
      },
    ]
  );

  const { pathname } = useLocation();

  const isActive = useCallback(
    (path: string) => {
      // To handle the case where path = /
      if (pathname === path) {
        return true;
      }

      return pathname.startsWith(path) && path !== "/";
    },
    [pathname]
  );

  return (
    <aside
      className={
        "w-[300px] p-6 pt-2 bg-white border-r border-border flex flex-col gap-4 overflow-y-auto justify-between"
      }
    >
      <div className="flex flex-col gap-4">
        <div className="py-6 border-b border-border flex items-center justify-between">
          <Image src={logo} alt="logo" width={174} height={"auto"} />
          <Menu10Icon className="text-muted" />
        </div>
        <div className="pt-4 flex flex-col gap-4">
          {links.map((category, key) => {
            return (
              <React.Fragment key={key}>
                <span className="text-foreground text-sm" key={key}>
                  {category.name}
                </span>
                {category.links.map((link, key_) => (
                  <SidebarButton
                    {...link}
                    key={key_}
                    isActive={isActive(link.href)}
                  />
                ))}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="bg-background flex items-center gap-4 p-4 rounded-md">
        <Avatar className="w-12 h-12 p-0.5 border-2 border-primary">
          <AvatarImage className="w-10 h-10 rounded-full" />
        </Avatar>
        <div className="flex flex-col">
          <h4 className="font-semibold text-title">John Doe</h4>
          <span className="text-muted text-[10px]">@johnathan - Admin</span>
        </div>
      </div>
    </aside>
  );
};
