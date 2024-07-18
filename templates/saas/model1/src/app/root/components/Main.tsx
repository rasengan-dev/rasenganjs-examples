import { useTheme } from "@rasenganjs/theme";

interface MainProps {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
	const { theme, isDark } = useTheme();
  return (
		<main className={`${isDark ? 'bg-rasengan-dark-background text-rasengan-dark-text':'bg-rasengan-light-background text-rasengan-light-text'} w-full max-w-[1500px] mx-auto px-10 lg:px-40 py-2 min-h-[800px]`}>
			{children}
		</main>
	);
}