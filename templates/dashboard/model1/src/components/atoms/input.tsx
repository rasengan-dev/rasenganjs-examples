import { cn } from "@/lib/utils";
import { HugeiconsProps } from "hugeicons-react";
import { FunctionComponent, InputHTMLAttributes } from "react";

export type InputProps = {
  lefticon?: FunctionComponent<HugeiconsProps>;
  righticon?: FunctionComponent<HugeiconsProps>;
  state?: "valid" | "success" | "danger" | "warning";
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FunctionComponent<InputProps> = ({
  lefticon: LeftIcon,
  righticon: RightIcon,
  state,
  ...props
}) => {
  if (LeftIcon || RightIcon) {
    return (
      <div className={"flex items-center h-12 border border-border"}>
        {LeftIcon && (
          <div className="h-full px-4">
            <LeftIcon size={20} />
          </div>
        )}
      </div>
    );
  }

  return (
    <input
      className={cn(
        "h-12 border border-border rounded-md px-6 py-3 outline-none focus:outline-none focus:border-primary transition-colors placeholder:text-muted text-foreground font-medium",
        state === "valid"
          ? "border-primary placeholder:text-primary text-primary focus:border-primary"
          : state === "success"
          ? "border-green placeholder:text-green text-green focus:border-green"
          : state === "warning"
          ? "border-yellow placeholder:text-yellow text-yellow focus:border-yellow"
          : state === "danger"
          ? "border-red placeholder:text-red text-red focus:border-red"
          : "border-border"
      )}
      {...props}
    />
  );
};
