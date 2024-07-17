import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ComponentState } from "@/lib/enums";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        primary: "bg-blue-500 text-white",
        primarySecondary: "bg-primary-100 text-primary",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        green: "bg-success text-white",
        greenSecondary: "bg-apple-100 text-success",
        yellow: "bg-yellow-500 text-white",
        yellowSecondary: "bg-yellow-100 text-yellow-500",
        red: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        redSecondary: "bg-red-100 text-destructive",
        warning: "bg-warning text-white hover:bg-warning/90",
        warningSecondary: "bg-mysin text-warning",
      },
      size: {
        default: "px-[24px] py-[16px]",
        sm: "rounded-md px-[12px] py-[8px]",
        md: "rounded-md px-[18px] py-[10px]",
        lg: "rounded-md px-[24px] py-[12px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * Renders a button component with various styles and states.
 *
 * @param asChild - If true, will render the button as a child of a custom component provided via Slot from Radix UI.
 * @param state - Optional state of the button, can be "DEFAULT", "LOADING", etc., based on the ComponentState enum.
 * @param variant - Optional style variant of the button, can be "default", "primary", "outline", etc.
 * @param size - Optional size of the button, can be "default", "sm", "md", "lg", or "icon".
 * @param className - Additional class names to apply to the button.
 * @param rest - Remaining props to be passed to the underlying `button` element.
 * @returns A React component that renders a styled button with optional states and variant styles.
 */


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  state?: ComponentState;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, state = ComponentState.DEFAULT, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Handle different states
    let stateStyles = "";
    if (state === ComponentState.LOADING) {
      stateStyles = "opacity-50 cursor-not-allowed";
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), stateStyles)}
        ref={ref}
        {...props}
        disabled={state === ComponentState.LOADING || props.disabled}
      >
        {state === ComponentState.LOADING ? "Loading..." : props.children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
