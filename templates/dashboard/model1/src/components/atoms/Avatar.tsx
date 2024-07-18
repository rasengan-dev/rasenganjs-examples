import Image from "@rasenganjs/image";
import clsx from "clsx";
import { ComponentProps } from "react";

interface AvatarProps {
  src: string | { uri: string };
  alt?: string;
  size?: "small" | "medium" | "large";
  className?: ComponentProps<"div">["className"];
}

/**
 * Renders an avatar component with a given image source and size.
 *
 * @param src - The image source for the avatar, can be a string or an object with a `uri` property.
 * @param alt - The alternative text for the avatar image.
 * @param size - The size of the avatar, can be "small", "medium", or "large".
 * @param className - Additional CSS classes to apply to the avatar container.
 * @returns A React element representing the avatar.
 */
export default function Avatar({ src, alt = "", size = "small", className }: AvatarProps) {
  return (
		<Image
			src={src}
			alt={alt}
			width={size === "small" ? 40 : size === "medium" ? 80 : 140}
			height={size === "small" ? 40 : size === "medium" ? 80 : 140}
			className={clsx("rounded-full", className)}
		/>
	);
}