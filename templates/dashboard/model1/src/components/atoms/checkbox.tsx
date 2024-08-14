"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Tick02Icon } from "hugeicons-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-5 w-5 rounded-xs border border-border ring-offset-background overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary",
      className
    )}
    {...props}
  >
    <div className="absolute z-10 top-0 left-0 w-full h-full bg-foreground flex items-center justify-center">
      <Tick02Icon size={8} color="#fff" strokeWidth={3} />
    </div>

    <CheckboxPrimitive.Indicator
      className={cn(
        "absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center bg-primary"
      )}
    >
      <Tick02Icon size={8} color="#fff" strokeWidth={3} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
