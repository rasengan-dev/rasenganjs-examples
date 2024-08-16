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
      <div
        tabIndex={1}
        className={cn(
          "group shadow-sm flex items-center h-12 border border-border rounded-md px-6 bg-white outline-none focus:outline-none focus-within:border-primary transition-colors",
          state === "valid"
            ? "border-primary placeholder:text-primary text-primary focus-within:border-primary"
            : state === "success"
            ? "border-green placeholder:text-green text-green focus-within:border-green"
            : state === "warning"
            ? "border-yellow placeholder:text-yellow text-yellow focus-within:border-yellow"
            : state === "danger"
            ? "border-red placeholder:text-red text-red focus-within:border-red"
            : "border-border"
        )}
      >
        {LeftIcon && (
          <div className="h-full flex items-center">
            <LeftIcon
              size={24}
              className={cn(
                "text-foreground group-focus-within:text-title",
                state === "valid"
                  ? "text-primary group-focus-within:text-primary"
                  : state === "success"
                  ? "text-green group-focus-within:text-green"
                  : state === "warning"
                  ? "text-yellow group-focus-within:text-yellow"
                  : state === "danger"
                  ? "text-red group-focus-within:text-red"
                  : ""
              )}
            />
          </div>
        )}
        <input
          className={cn(
            "h-full rounded-md px-4 pr-0 outline-none focus:outline-none transition-colors placeholder:text-muted text-title font-medium placeholder:transition-colors focus:placeholder:text-title",
            state === "valid"
              ? "placeholder:text-primary/65 text-primary focus:placeholder:text-primary"
              : state === "success"
              ? "placeholder:text-green/65 text-green focus:placeholder:text-green"
              : state === "warning"
              ? "placeholder:text-yellow/65 text-yellow focus:placeholder:text-yellow"
              : state === "danger"
              ? "placeholder:text-red/65 text-red focus:placeholder:text-red"
              : ""
          )}
          {...props}
        />
        {RightIcon && (
          <div className="h-full flex items-center pl-4">
            <RightIcon
              size={24}
              className={cn(
                "text-foreground group-focus-within:text-title",
                state === "valid"
                  ? "text-primary group-focus-within:text-primary"
                  : state === "success"
                  ? "text-green group-focus-within:text-green"
                  : state === "warning"
                  ? "text-yellow group-focus-within:text-yellow"
                  : state === "danger"
                  ? "text-red group-focus-within:text-red"
                  : ""
              )}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <input
      className={cn(
        "h-12 border shadow-sm border-border rounded-md px-6 py-3 outline-none focus:outline-none focus:border-primary transition-colors placeholder:text-muted text-title font-medium placeholder:transition-colors focus:placeholder:text-title",
        state === "valid"
          ? "border-primary placeholder:text-primary/65 focus:placeholder:text-primary text-primary focus:border-primary"
          : state === "success"
          ? "border-green placeholder:text-green/65 focus:placeholder:text-green text-green focus:border-green"
          : state === "warning"
          ? "border-yellow placeholder:text-yellow/65 focus:placeholder:text-yellow text-yellow focus:border-yellow"
          : state === "danger"
          ? "border-red placeholder:text-red/65 focus:placeholder:text-red text-red focus:border-red"
          : "border-border"
      )}
      {...props}
    />
  );
};
