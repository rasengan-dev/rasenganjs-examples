import { Button } from "@/components/atom/Button";

export function IconButton({
  Icon,
  Variant,
  Content,
  size,
  type = "normal",
  className
}: {
  Icon: React.ReactNode;
  Variant:
    | "default"
    | "large"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  Content: string;
  size: "default" | "sm" | "lg" | "icon" | null | undefined;
  type?: "normal" | "inverse";
  className?: string;
}) {
  return (
    <Button variant={Variant} size={size} className={className}>
      {type === "normal" ? (
        <>
          {Content}
          {Icon}
        </>
      ) : (
        <>
          {Icon}
          {Content}
        </>
      )}
    </Button>
  );
}
