import { HugeiconsProps } from "hugeicons-react";
import { FunctionComponent, ReactNode } from "react";
import { Card, CardContent, CardHeader } from "./card";
import { cn } from "@/lib/utils";

export type DataCardProps = {
  icon: FunctionComponent<HugeiconsProps>;
  label: ReactNode;
  value: ReactNode;
  state?: "valid" | "success" | "danger" | "warning";
  description?: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const DataCard: FunctionComponent<DataCardProps> = ({
  icon: Icon,
  label,
  value,
  state = "valid",
  description,
  ...props
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div
            className={cn(
              "h-10 w-10 text-white flex items-center justify-center rounded-full",
              state === "valid"
                ? "bg-primary"
                : state === "success"
                ? "bg-green"
                : state === "danger"
                ? "bg-red"
                : "bg-yellow"
            )}
          >
            <Icon />
          </div>
          <div>
            <div
              className={cn(
                "font-medium",
                state === "valid"
                  ? "text-primary"
                  : state === "success"
                  ? "text-green"
                  : state === "danger"
                  ? "text-red"
                  : "text-yellow"
              )}
            >
              {label}
            </div>
            <div className="text-2xl font-semibold text-title">{value}</div>
          </div>
        </div>
      </CardHeader>
      {description ? (
        <CardContent className="text-muted text-sm">{description}</CardContent>
      ) : (
        <div className="pt-2"></div>
      )}
    </Card>
  );
};
