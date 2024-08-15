import { FunctionComponent, useState } from "react";
import { SidebarButtonProps } from "../molecules/sidebar-button";
import { Home02Icon } from "hugeicons-react";

export type SidebarProps = { links?: SidebarButtonProps[] };

export const Sidebar: FunctionComponent<SidebarProps> = (props) => {
  const [link, setlink] = useState<SidebarButtonProps[]>(
    props.links || [
      {
        href: "/",
        icon: Home02Icon,
        label: "Dashboard",
        isActive: true,
      },
    ]
  );
  return <aside className={"w-72 bg-white border-r border-border"}></aside>;
};
