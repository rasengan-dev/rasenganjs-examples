// import logoWhite from "@/assets/logo-white.svg";
import logo from "@/assets/logo.svg";
import Image from "@rasenganjs/image";

interface Props {
	size: "small" | "large" | number;
}

export default function AppLogo({ size = "small" }: Props) {
	const defaultSize = !isNaN(size as number)
		? size
		: size === "small"
		? 150
		: 200;

	return (
		<div className='relative'>
			<Image
				src={logo}
				alt='Logo of Rasengan'
				width={defaultSize}
				height={"auto"}
			/>
		</div>
	);
}
