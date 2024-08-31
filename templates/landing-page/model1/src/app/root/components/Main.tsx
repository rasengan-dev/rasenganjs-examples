interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  return (
		<main className='w-full h-full max-w-[1500px] mx-auto px-7 lg:px-32'>
			{children}
		</main>
	);
}