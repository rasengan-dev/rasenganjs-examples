/**
 * Renders a switch component with various styles and states.
 *
 * @param variant - Optional style variant of the switch, can be "primary", "secondary", "red".
 * @param state - Optional state of the switch, can be "DEFAULT", "DISABLED", "LOADING", "ERROR", "SUCCESS", based on the ComponentState enum.
 * @param className - Additional class names to apply to the switch.
 * @param rest - Remaining props to be passed to the underlying `SwitchPrimitives.Root` element.
 * @returns A React component that renders a styled switch with optional states and variant styles.
 */


import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ComponentState } from "@/lib/enums/ComponentState"

const switchVariants = cva(
  "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        secondary: "data-[state=checked]:bg-secondary data-[state=unchecked]:bg-input",
        red: "data-[state=checked]:bg-red-500 data-[state=unchecked]:bg-input",
      },
      state: {
        default: "",
        disabled: "opacity-50 cursor-not-allowed",
        loading:'',
        success:'',
        error:'',
      },
    },
    defaultVariants: {
      variant: "primary",
      state: "default",
    },
  }
);

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, variant, state = ComponentState.DEFAULT, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(switchVariants({ variant, state }), className)}
    {...props}
    ref={ref}
    disabled={state === ComponentState.DISABLED || props.disabled}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
