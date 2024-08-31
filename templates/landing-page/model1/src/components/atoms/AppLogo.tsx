import Image from "@rasenganjs/image";

import logo from "@/assets/logo.svg";

interface AppLogoProps {
	size?: "large" | "medium" | "small";
}

export default function AppLogo({ size = "large" }: AppLogoProps) {
	return (
		<Image
			src={logo}
			alt='Rasengan Logo'
			width={size === "large" ? 200 : size === "medium" ? 160 : 120}
			height={"auto"}
		/>
	);
}
