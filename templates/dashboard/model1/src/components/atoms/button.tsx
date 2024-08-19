import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "shadow-sm inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        white: "bg-white text-title",
        primary: "bg-primary text-white hover:bg-primary-600",
        "primary-secondary": "bg-primary-100 text-primary hover:bg-primary-50",
        green: "bg-green text-white hover:bg-green-600",
        "green-secondary": "bg-green-100 text-green hover:bg-green-50",
        yellow: "bg-yellow text-white hover:bg-yellow-600",
        "yellow-secondary": "bg-yellow-100 text-yellow hover:bg-yellow-50",
        red: "bg-red text-white hover:bg-red-600",
        "red-secondary": "bg-red-100 text-red hover:bg-red-50",
        "white-border": "bg-white text-title border border-border",
        "white-border-muted": "bg-white text-muted border border-border",
        "white-muted": "bg-white text-muted",
      },
      size: {
        default: "h-12 px-6 py-3",
        small: "text-xs h-9 px-3 py-2",
        icone: "w-12 h-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
