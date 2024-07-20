import { ComponentProps, useState } from "react";
import { ArrowRight04Icon } from "hugeicons-react";
import Typography from "./Typography";
import { useTheme } from "@rasenganjs/theme";

interface AccordionProps {
  children?: React.ReactNode;
  title: string;
  className?: ComponentProps<"div">["className"];
}

/**
 * Renders a Accordion component with the provided text and optional children.
 *
 * @param {AccordionProps} props - The props for the Accordion component.
 * @param {React.ReactNode} [props.children] - The optional children to render inside the button.
 * @param {string} props.title - The title to display on the Accordion.
 * @returns {JSX.Element} - The rendered Accordion component.
 */

export default function Accordion({
  title,
  className,
  children,
}: AccordionProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className={`w-full relative ${className}`}>
      <div
        className="flex items-center py-2 w-full cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <ArrowRight04Icon
          size={18}
          color={
            isDark ? "var(--rasengan-dark-text)" : "var(--rasengan-light-text)"
          }
          className={`transition-all duration-300 ${open && "rotate-90"}`}
        />
        <Typography text={title} className="ms-4" weight="medium" />
      </div>
      <div
        className={`${
          isDark
            ? "border-rasengan-dark-border"
            : "bg-white border-rasengan-light-border"
        } overflow-hidden transition-all duration-300 border-[1px] rounded-md ${
          !open ? "h-0 border-b-0" : "h-auto w-full p-2 px-3 mb-5"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
