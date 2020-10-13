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
	useTheme,
	useColorMode,
	Divider,
} from '@chakra-ui/core'
import { default as MD } from 'markdown-to-jsx'
import Link from 'next/link'

export const MotionBox = motion.custom(ChakraBox)

export const MotionText = motion.custom(ChakraText)
export const MotionCode = motion.custom(ChakraCode)
export const MotionStack = motion.custom(ChakraStack)
export const MotionGrid = motion.custom(ChakraGrid)
export const MotionFlex = motion.custom(ChakraFlex)
export const MotionTag = motion.custom(ChakraTag)
const I = motion.custom(ChakraImage)
export const Tag = motion.custom(ChakraTag)

export const MotionImage: React.FC<ImageProps & MotionProps> = ({
	children,
	alt = 'Image',
	...props
}) => (
	<I
		{...props}
		border="1px"
		objectFit="cover"
		alt={alt}
		rounded="md"
		borderColor="color"
	/>
)

export const H1: React.FC = ({ children, ...props }) => (
	<ChakraText {...props} fontSize="2rem">
		{children}
	</ChakraText>
)

const Headr = ({ children, ...props }) => (
	<>
		<Divider />
		<ChakraText {...props}>{children}</ChakraText>
	</>
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
				hr: {
					component: Divider,
				},
				code: {
					component: ChakraCode,
					props: {
						variantColor: 'color',
					},
				},
				h1: {
					component: Headr,
					props: {
						fontSize: '2rem',
						marginY: '2rem',
					},
				},
				h2: {
					component: ChakraText,
					props: {
						fontSize: '1.5rem',
						fontWeight: 'bold',
					},
				},
				Divider: {
					component: Divider,
				},
				MotionGrid: {
					component: MotionGrid,
				},
				img: {
					component: MotionImage,
				},
				// h2: {
				// 	tex,
				// },
				// h3: {
				// 	tex,
				// },
				// h4: {
				// 	tex,
				// },
				// h5: {
				// 	tex,
				// },
				// h6: {},
				a: {
					component: TextLink,
				},
			},
		}}>
		{children}
	</MD>
)

export * from '@chakra-ui/core'

interface TextLinkProps {
	href: string
	text: string
	title?: string
}

export const TextLink: React.FC<MotionProps & TextLinkProps & any> = ({
	href,
	text,
	title,
	children,
	...props
}) => {
	const [hovered, setHovered] = useState(false)
	const { colorMode } = useColorMode()
	const theme = useTheme()

	return (
		<>
			<Link href={href}>
				<motion.span
					onHoverStart={() => {
						setHovered(true)
					}}
					onHoverEnd={() => setHovered(false)}
					style={{
						backgroundColor:
							colorMode === 'dark' ? theme.colors.white : theme.colors.black,
						color:
							colorMode === 'dark' ? theme.colors.black : theme.colors.white,
						padding: text ? '0.25rem' : '0.1rem',
						borderRadius: text ? '0.1rem' : '0.2rem',
					}}>
					<motion.a
						// transition={{ ease: 'ease-in-out' }}
						{...props}>
						{text ? `[${text}]` : children}
					</motion.a>
				</motion.span>
			</Link>
			{hovered && (
				<style jsx global>
					{`
						.cursor {
							border-radius: 0;
							background-color: white;
							width: 1.5rem;
							height: 1.5rem;
						}
					`}
				</style>
			)}
		</>
	)
}
