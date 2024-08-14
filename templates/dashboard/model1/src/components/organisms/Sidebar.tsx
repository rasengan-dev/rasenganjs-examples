import { FunctionComponent, useState } from "react";
import { SidebarButtonProps } from "../molecules/sidebar-button";

export type SidebarProps = { links?: SidebarButtonProps[] };

export const Sidebar: FunctionComponent<SidebarProps> = (props) => {
  const [link, setlink] = useState<SidebarButtonProps[]>(props.links || []);
  return <div className={""}>Sidebar</div>;
};
