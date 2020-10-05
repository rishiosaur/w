import { Variants } from 'framer-motion'
export const pageVariants: Variants = {
	initial: {
		opacity: 0,
		y: -20,
	},
	in: {
		opacity: 1,
		y: 0,
	},
	out: {
		opacity: 0,
		y: -20,
	},
}

export const containerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

export const childVariants: Variants = {
	hidden: { opacity: 0, rotateX: -100 },
	show: { opacity: 1, rotateX: 0 },
}
