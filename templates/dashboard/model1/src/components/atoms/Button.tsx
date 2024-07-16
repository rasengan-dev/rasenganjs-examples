import { FC, ReactNode } from "react";
import { Button as ShadcnButton } from "@shadcn/ui";
import { ButtonState, ButtonVariant } from "@/lib/enums";


interface ButtonProps {
  style?: string;
  children?: ReactNode;
  state?: ButtonState;
  variant?: ButtonVariant;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, style = "", state = ButtonState.DEFAULT, variant = ButtonVariant.PRIMARY, onClick }) => {
  let baseStyle = "py-2 px-4 rounded ";
  
  switch (variant) {
    case ButtonVariant.WHITE:
      baseStyle += "bg-white text-black ";
      break;
    case ButtonVariant.WHITE_BORDER:
      baseStyle += "bg-white border border-black text-black ";
      break;
    case ButtonVariant.WHITE_MUTED:
      baseStyle += "bg-gray-200 text-gray-400 ";
      break;
    case ButtonVariant.WHITE_BORDER_MUTED:
      baseStyle += "bg-gray-200 border border-gray-400 text-gray-400 ";
      break;
    case ButtonVariant.PRIMARY:
      baseStyle += "bg-blue-500 text-white ";
      break;
    case ButtonVariant.PRIMARY_SECONDARY:
      baseStyle += "bg-blue-100 text-blue-500 ";
      break;
    case ButtonVariant.GREEN:
      baseStyle += "bg-green-500 text-white ";
      break;
    case ButtonVariant.GREEN_SECONDARY:
      baseStyle += "bg-green-100 text-green-500 ";
      break;
    case ButtonVariant.YELLOW:
      baseStyle += "bg-yellow-500 text-white ";
      break;
    case ButtonVariant.YELLOW_SECONDARY:
      baseStyle += "bg-yellow-100 text-yellow-500 ";
      break;
    case ButtonVariant.RED:
      baseStyle += "bg-red-500 text-white ";
      break;
    case ButtonVariant.RED_SECONDARY:
      baseStyle += "bg-red-100 text-red-500 ";
      break;
    default:
      baseStyle += "bg-gray-500 text-white ";
  }

  if (state === ButtonState.LOADING) {
    baseStyle += "opacity-50 cursor-not-allowed ";
  }

  return (
    <ShadcnButton className={`${baseStyle} ${style}`} onClick={onClick} disabled={state === ButtonState.LOADING}>
      {state === ButtonState.LOADING ? "Loading..." : children}
    </ShadcnButton>
  );
};

export default Button;
