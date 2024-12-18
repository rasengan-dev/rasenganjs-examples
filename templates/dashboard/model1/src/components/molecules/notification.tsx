import { cn } from "@/lib/utils";
import {
  Notification02Icon,
  HugeiconsProps,
  Alert02Icon,
  Tick02Icon,
} from "hugeicons-react";
import { FunctionComponent, ReactNode } from "react";

export type NotificationProps = {
  type?: "success" | "danger" | "warning";
  title: ReactNode;
  icon?: FunctionComponent<HugeiconsProps>;
  state?: "valid" | "success" | "danger" | "warning";
} & React.HTMLAttributes<HTMLDivElement>;

export const Notification: FunctionComponent<NotificationProps> = ({
  type,
  title,
  icon: Icon,
  children,
  className,
  state = "valid",
  ...props
}) => {
  return (
    <div
      className={cn(
        "p-4 text-white rounded-md border flex flex-col gap-2 relative",
        state === "valid"
          ? "bg-primary"
          : state === "success"
          ? "bg-green"
          : state === "danger"
          ? "bg-red"
          : "bg-yellow",
        className
      )}
      {...props}
    >
      <div className={cn("flex items-center gap-2")}>
        {Icon ? (
          <Icon />
        ) : state === "valid" ? (
          <Notification02Icon />
        ) : state === "success" ? (
          <Tick02Icon />
        ) : state === "danger" ? (
          <Alert02Icon />
        ) : state === "warning" ? (
          <Alert02Icon />
        ) : null}
        <span className="font-semibold">{title}</span>
      </div>
      <div className="text-[10px]">{children}</div>
    </div>
  );
};
