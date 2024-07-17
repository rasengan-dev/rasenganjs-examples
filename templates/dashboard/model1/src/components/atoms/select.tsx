import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentState } from '@/lib/enums/ComponentState';
import { cn } from '@/lib/utils';

const selectVariants = cva(
  'min-w-64 h-12 px-6 py-3 bg-white   rounded-md border inline-flex items-center justify-between  text-sm font-medium  disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-primary text-primary-foreground hover:bg-primary/90 focus-visible:border-primary',
        primary: 'border-blue-500 text-primary focus-visible:border-blue-500',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:border-accent',
        green: 'border-success text-success focus-visible:border-success',
        yellow: 'border-warning text-warning focus-visible:border-warning',
        red: 'border-red-500 text-destructive focus-visible:border-red-500',
      },
      state: {
        default: '',
        disabled: 'opacity-50 cursor-not-allowed',
        loading: 'opacity-50 cursor-not-allowed',
        error: 'border-red-500 text-red-500',
        success: 'border-green-500 text-green-500',
      },
    },
    defaultVariants: {
      variant: 'default',
      state: 'default',
    },
  }
);

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {
  asChild?: boolean;
  state?: ComponentState;
  label?: React.ReactNode;
  icon?: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, state = ComponentState.DEFAULT, label, icon, children, ...props }, ref) => {
    return (
      <div className="flex flex-col ">
        {label && <label className="mb-2 text-base font-medium font-['Poppins']">{label}</label>}
        <div className="relative inline-flex items-center w-full">
          {icon && <span className="absolute left-3 flex items-center pointer-events-none">{icon}</span>}
          <select
            className={cn(
              selectVariants({ variant, state, className }),
              icon ? 'pl-10' : ''  ,
              
            )}
            ref={ref}
            {...props}
            disabled={state === ComponentState.DISABLED || props.disabled}
          >
            {children}
          </select>
        </div>
      </div>
    );
  }
);
Select.displayName = 'Select';

export { Select, selectVariants };
