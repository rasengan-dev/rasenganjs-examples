import React, { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  label?: string;
  isTextArea?: boolean;
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
  isTextArea,
  icon,
  rightIcon,
  containerClassName,
  className,
  ...props
}: InputProps): JSX.Element {


  return (
    <div className={`w-full mb-5 space-y-4 ${containerClassName}`}>
      {label && (
        <label
          className={`text-md font-semibold px-1 ${
           'text-rasengan-light-text'
          }`}
        >
          {label}
        </label>
      )}
      <div className="flex items-center">
        {isTextArea ? (
          <textarea
            id="w3review"
            name="w3review"
            rows={4}
            cols={50}
            className={`w-full ${icon ? 'pl-10' : 'pl-3'} ${
              rightIcon ? 'pr-10' : 'pr-3'
            } py-2 rounded-lg border-[1px] ${
               'bg-rasengan-light-background text-rasengan-light-text border-rasengan-light-border outline-none focus:border-rasengan-light-primary'
            } ${className}`}
            placeholder={props.placeholder}
          ></textarea>
        ) : (
          <input
            {...props}
            className={`w-full ${icon ? 'pl-10' : 'pl-3'} ${
              rightIcon ? 'pr-10' : 'pr-3'
            } py-2 rounded-lg border-[1px] outline-none focus:border-rasengan-primary ${
               'bg-rasengan-light-background text-rasengan-light-text border-rasengan-light-border outline-none focus:border-rasengan-light-primary'
            } ${className}`}
          />
        )}
      </div>
    </div>
  );
}
