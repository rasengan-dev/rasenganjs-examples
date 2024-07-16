import Navbar from "./Navbar";

interface MainProps {
	children: React.ReactNode;
}

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
