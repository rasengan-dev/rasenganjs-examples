
import { ComponentProps } from "react";

interface ToggleSwitchProps {
    options: string[];
    selected: string;
    onToggle: (option: string) => void;
    className?: ComponentProps<"button">["className"];
}

/**
 * Renders a toggle switch component with customizable styles and toggle functionality.
 *
 * @param {ToggleSwitchProps} props - The props for the toggle switch component.
 * @param {() => void} props.onToggle - Callback function to handle toggle state change.
 * @param {string} [props.className] - Optional custom class names for the button wrapper.
 * @param {string} [props.className] - Additional class names for the button.
 * @returns {JSX.Element} - The rendered toggle switch component.
 */
export default function ToggleSwitch({
    options,
    selected,
    className,
    onToggle,
  }: ToggleSwitchProps): JSX.Element {
    return (
      <div className="flex rounded-lg bg-white p-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onToggle(option)}
            className={`${className} flex-1 rounded-lg px-4 py-2 w-[120px] text-center text-sm font-medium transition-colors ${
              selected === option
                ? "bg-primary text-white"
                : "bg-transparent text-gray-800"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
