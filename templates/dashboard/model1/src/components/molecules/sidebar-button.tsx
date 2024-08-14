import { buttonVariants } from "@/components/atoms/button";
import { cn } from "@/lib/utils";
import {
  Alert01Icon,
  HugeiconsIcon,
  Notification02Icon,
} from "hugeicons-react";
import { FunctionComponent } from "react";
export type SidebarButtonProps = {
  type?: "alert" | "notification";
  label: string;
  icon: HugeiconsIcon;
  href: string;
  isActive?: boolean;
};
export const SidebarButton: FunctionComponent<SidebarButtonProps> = ({
  type,
  label,
  icon: Icon,
  href,
  isActive,
}) => {
  return (
    <a
      href={href}
      className={cn(
        "min-w-64 hover:bg-primary-100 transition-colors group",
        buttonVariants({
          variant: isActive ? "primary-secondary" : "white-muted",
        }),
        !isActive && "hover:text-title",
        isActive && "hover:bg-primary-100",
        "justify-between"
      )}
    >
      <div className="flex items-center gap-4">
        <Icon className="group-hover:text-primary" />
        <span>{label}</span>
      </div>
      {(type === "alert" && <Alert01Icon className="text-red" />) ||
        (type === "notification" && (
          <Notification02Icon className="text-primary" />
        ))}
    </a>
  );
};
