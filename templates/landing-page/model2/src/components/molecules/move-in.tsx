import { motion } from "framer-motion";
import { ComponentProps } from "react";

type Props = {
	children: React.ReactNode;
	id?: string;
	className?: ComponentProps<"div">["className"];
};

export const MoveIn = ({ children, className, id }: Props) => {
	const variants = {
		hidden: { opacity: 0, translateY: 20 },
		visible: { opacity: 1, translateY: 0 },
	};

	return (
		<motion.div
			id={id}
			className={className}
			variants={variants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.7, ease: "easeInOut" }}
		>
			{children}
		</motion.div>
	);
};
