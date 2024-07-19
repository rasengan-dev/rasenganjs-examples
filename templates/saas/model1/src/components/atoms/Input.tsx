import React, { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
    label?: string;
    icon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    containerClassName?: string;
}

/**
 * Renders an input component with the provided label, icon, and input properties.
 *
 * @param {InputProps} props - The props for the input component.
 * @param {string} [props.label] - The optional label for the input field.
 * @param {React.ReactNode} [props.icon] - The optional icon to display inside the input field.
 * @param {React.ReactNode} [props.rightIcon] - The optional icon to display on the right side inside the input field.
 * @param {string} [props.containerClassName] - The optional class name for the container.
 * @returns {JSX.Element} - The rendered input component.
 */
export default function Input({
    label,
    icon,
    rightIcon,
    containerClassName,
    className,
    ...props
}: InputProps): JSX.Element {
    return (
        <div className={`w-full px-3 mb-5 ${containerClassName}`}>
            {label && <label className="text-md font-semibold px-1">{label}</label>}
            <div className="relative flex items-center">
                {icon && (
                    <div className="absolute left-0 w-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        {icon}
                    </div>
                )}
                <input
                    {...props}
                    className={`w-full ${icon ? 'pl-10' : 'pl-3'} ${rightIcon ? 'pr-10' : 'pr-3'} py-2 rounded-lg border-[1px] border-rasengan-light-border outline-none focus:border-rasengan-primary ${className}`}
                />
                {rightIcon && (
                    <div className="absolute right-0 w-10 pr-1 flex items-center justify-center cursor-pointer">
                        {rightIcon}
                    </div>
                )}
            </div>
        </div>
    );
}
