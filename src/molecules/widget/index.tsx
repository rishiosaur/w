import { useState } from 'react'
import Link from 'next/link'
import { MotionBox, Text } from '../../atoms/index'

export interface WidgetProps {
	title?: string
	link: string
	size?: string
	bgImage: string
	borderColor?: string
	variants: any
	before?: string
}

const Widget: React.FC<WidgetProps> = ({
	children,
	title = 'Hello',
	borderColor = 'color',
	size = '7rem',
	bgImage,
	link,
	variants,
	before = '',
}) => {
	const [isHovered, setHover] = useState(false)
	return (
		<>
			<Link href={link}>
				<MotionBox
					variants={variants}
					border="1px"
					whileHover={{ opacity: 0.5 }}
					rounded="sm"
					onHoverStart={() => setHover(true)}
					onHoverEnd={() => setHover(false)}
					p={5}
					backgroundImage={`url('${bgImage}')`}
					backgroundPosition="center"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					borderColor={borderColor}
					size={size}>
					<Text fontSize="0.5rem">{before}</Text>
					<Text display="inline">{title}</Text>
					{children}
				</MotionBox>
			</Link>
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
export default Widget
