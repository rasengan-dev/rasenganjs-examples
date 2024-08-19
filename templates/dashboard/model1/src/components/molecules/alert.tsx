import { cn } from "@/lib/utils";
import { Alert02Icon, AlertCircleIcon, HugeiconsProps } from "hugeicons-react";
import { FunctionComponent, ReactNode } from "react";

export type AlertProps = {
  type?: "success" | "danger" | "warning";
  title: ReactNode;
  icon?: FunctionComponent<HugeiconsProps>;
  state?: "valid" | "success" | "danger" | "warning";
} & React.HTMLAttributes<HTMLDivElement>;

export const Alert: FunctionComponent<AlertProps> = ({
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
        "p-6 bg-white rounded-md border border-border flex flex-col gap-4",
        state === "valid"
          ? "border-primary"
          : state === "success"
          ? "border-green"
          : state === "danger"
          ? "border-red"
          : "border-yellow",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex items-center gap-4 text-primary",
          state === "valid"
            ? "text-primary"
            : state === "success"
            ? "text-green"
            : state === "danger"
            ? "text-red"
            : "text-yellow"
        )}
      >
        {Icon ? (
          <Icon />
        ) : state === "valid" ? (
          <AlertCircleIcon />
        ) : state === "success" ? (
          <AlertCircleIcon />
        ) : state === "danger" ? (
          <Alert02Icon />
        ) : state === "warning" ? (
          <AlertCircleIcon />
        ) : null}
        <span className="font-semibold text-2xl text-title">{title}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};
