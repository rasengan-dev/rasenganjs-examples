import { ComponentProps } from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  text: string;
  className?: ComponentProps<'button'>['className'];
}

/**
 * Renders a button component with the provided text and optional children.
 *
 * @param {ButtonProps} props - The props for the button component.
 * @param {React.ReactNode} [props.children] - The optional children to render inside the button.
 * @param {string} props.text - The text to display on the button.
 * @returns {JSX.Element} - The rendered button component.
 */
export default function Button({
  children,
  text,
  className,
}: ButtonProps): JSX.Element {
  return (
    <button className={`${className} rounded-lg px-4 py-2`}>
      <div>{children}</div>
      <p className="font-urbanist-medium">{text}</p>
    </button>
  );
}
