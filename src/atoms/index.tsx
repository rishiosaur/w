import { useState } from 'react'

import { motion, MotionProps } from 'framer-motion'
import {
	Box as ChakraBox,
	Heading as ChakraHeading,
	Text as ChakraText,
	Code as ChakraCode,
	Stack as ChakraStack,
	Grid as ChakraGrid,
	Flex as ChakraFlex,
	Image as ChakraImage,
	Tag as ChakraTag,
	BoxProps,
	ImageProps,
} from '@chakra-ui/core'
import { default as MD } from 'markdown-to-jsx'
import { LinkProps, default as NextLink } from 'next/link'

export const MotionBox = motion.custom(ChakraBox)

export const MotionText = motion.custom(ChakraText)
export const MotionCode = motion.custom(ChakraCode)
export const MotionStack = motion.custom(ChakraStack)
export const MotionGrid = motion.custom(ChakraGrid)
export const MotionFlex = motion.custom(ChakraFlex)
const I = motion.custom(ChakraImage)
export const Tag = motion.custom(ChakraTag)

export const MotionImage: React.FC<ImageProps & MotionProps> = ({
	children,
	...props
}) => (
	<I
		{...props}
		border="1px"
		objectFit="cover"
		rounded="md"
		borderColor="color"
	/>
)

export const Link: React.FC<LinkProps> = ({ children, ...props }) => {
	const [isHovered, setIsHovered] = useState(false)

	const L = motion.custom(NextLink)

	return (
		<>
			<L
				{...props}
				onHoverStart={() => setIsHovered(true)}
				onHoverEnd={() => setIsHovered(false)}>
				{children}
			</L>
			{isHovered && (
				<style jsx global>
					{`
						.cursor {
							border-radius: 17px;
							width: 1.5rem;
							height: 1.5rem;
						}
					`}
				</style>
			)}
		</>
	)
}

export const H1: React.FC = ({ children, ...props }) => (
	<ChakraText {...props} fontSize="2rem">
		{children}
	</ChakraText>
)

const Te: React.FC = ({ children, ...props }) => (
	<>
		<ChakraText {...props}>{children}</ChakraText>
		<br />
	</>
)

export const Markdown: React.FC<{ children: string }> = ({ children }) => (
	<MD
		options={{
			overrides: {
				h1: {
					component: H1,
				},
				br: {
					component: (
						<>
							<br />
							<br />
						</>
					) as any,
				},
				p: {
					component: Te,
				},
			},
		}}>
		{children}
	</MD>
)

export * from '@chakra-ui/core'
