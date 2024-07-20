import Typography from "./Typography";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface HeadingProps {
  title: string;
  description: string;
}

/**
 * Renders a heading component with the provided text and optional children.
 *
 * @param {HeadingProps} props - The props for the heading component.
 * @param {string} props.title - The title to display on the heading.
 * @param {string} props.description - The description to display on the heading.
 * @returns {JSX.Element} - The rendered heading component.
 */

export default function Heading({
  title,
  description,
}: HeadingProps): JSX.Element {
  useGSAP(() => {
    gsap.to("#sub-title", { opacity: 1, y: 0, duration: 0.5 });
    gsap.to("#title", { opacity: 1, duration: 1.5 });
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 max-w-[700px] w-full mx-auto text-center mb-4">
      <Typography
        text={title}
        className="text-3xl lg:text-[40px] mb-4 text-center"
        weight="bold"
      />
      <Typography text={description} className="text-lg" weight="normal" />
    </div>
  );
}
