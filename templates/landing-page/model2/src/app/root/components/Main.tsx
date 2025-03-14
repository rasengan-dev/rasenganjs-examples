interface MainProps {
	children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
	return (
		<main className='w-screen min-h-screen mx-auto'>
			{children}
		</main>
	);
}
