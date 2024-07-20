import { Link } from "rasengan";
import { ComponentProps } from "react";

interface NavItemProps {
  children?: React.ReactNode;
  text: string;
  href?: string;
  className?: ComponentProps<"button">["className"];
  isActive?: boolean;
}

export default function NavItem({
  children,
  text,
  href = "#",
  className,
  isActive,
}: NavItemProps) {
  return (
    <Link to={href} className="flex items-center gap-2">
      <div>{children}</div>
      <p
        className={`font-urbanist font-normal ${className} ${
          isActive && "text-rasengan-light-primary"
        }`}
      >
        {text}
      </p>
    </Link>
  );
}
