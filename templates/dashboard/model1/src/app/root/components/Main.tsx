import Navbar from "./Navbar";

interface MainProps {
	children: React.ReactNode;
}

/**
 * Renders the main layout of the application, including the navigation bar and a content section.
 *
 * @param {MainProps} props - The props for the Main component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the main section.
 * @returns {JSX.Element} The main layout of the application.
 */
export default function Main({ children }: MainProps) {
	return (
		<main className='w-full h-screen bg-[#FAFCFF]'>
			<Navbar />

			<section className='max-w-[1200px] h-main-page mx-auto overflow-auto p-4'>
				{children}
			</section>
		</main>
	);
}
