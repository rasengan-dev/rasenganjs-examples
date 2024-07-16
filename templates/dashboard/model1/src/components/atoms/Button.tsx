import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"


import { cn } from "@/lib/utils"
import { ButtonState } from "@/lib/enums"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primary: "bg-blue-500 text-white",
        primarySecondary: "bg-blue-100 text-blue-500",
        green: "bg-green-500 text-white",
        greenSecondary: "bg-green-100 text-green-500",
        yellow: "bg-yellow-500 text-white",
        yellowSecondary: "bg-yellow-100 text-yellow-500",
        red: "bg-red-500 text-white",
        redSecondary: "bg-red-100 text-red-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  state?: ButtonState
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, state = ButtonState.DEFAULT, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    // Handle different states
    let stateStyles = "";
    if (state === ButtonState.LOADING) {
      stateStyles = "opacity-50 cursor-not-allowed";
    } else if (state === ButtonState.SUCCESS) {
      stateStyles = "bg-green-500 text-white";
    } else if (state === ButtonState.ERROR) {
      stateStyles = "bg-red-500 text-white";
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), stateStyles)}
        ref={ref}
        {...props}
        disabled={state === ButtonState.LOADING || props.disabled}
      >
        {state === ButtonState.LOADING ? "Loading..." : props.children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
