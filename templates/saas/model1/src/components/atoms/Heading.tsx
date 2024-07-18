import Typography from "./Typography";

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
	return (
        <div className='flex flex-col items-center mt-10 min-w-[300px] w-full mx-auto text-center mb-4'>
            <Typography text={title} className='text-[40px]' weight='bold' />
            <Typography
                text={description}
                className='text-lg'
                weight='normal'
            />
        </div>
	);
}
