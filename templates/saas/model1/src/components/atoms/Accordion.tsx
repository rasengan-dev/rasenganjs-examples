import {useState} from 'react'
import { ArrowRight04Icon } from "hugeicons-react";
import Typography from "./Typography";

interface AccordionProps {
	children?: React.ReactNode;
	title: string;
	className?: ComponentProps<"accordion">["className"];
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
    children
}: AccordionProps): JSX.Element {
	const [open, setOpen] = useState(false);

	return (
        
			<div className={`w-full relative ${className}`}>
                <div className="flex items-center py-2 px-4 w-full bg-gray-100 cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
                    <ArrowRight04Icon size={18} color={"#000000"} className={`${open && 'rotate-90'}`}/>
                    <Typography text={title} className="ms-4"/>
                </div>
                    <div className={`${
                !open ? "hidden" : "bg-gray-200 px-5 mb-5 w-full py"
                // !open ? "hidden" : "animate-slide-in absolute bottom-5/5 left-1/2 -translate-x-1/2 bg-gray-300 px-5 mb-10 w-full"
            }`}>
                        {children}
                    </div>
            </div>
	);
}
