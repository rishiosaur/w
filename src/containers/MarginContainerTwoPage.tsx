import { motion, MotionProps } from 'framer-motion'
import MarginContainer from './MarginContainer'
import { MotionGrid } from '../atoms'
import { MotionBox } from '../atoms/index'

const MarginContainerTwoPage: React.FC<MotionProps & any> = ({
	children,
	...props
}) => (
	<MarginContainer>
		<MotionGrid
			gap={3}
			templateColumns={[
				'repeat(auto-fill, 1fr)',
				'repeat(auto-fill, 1fr)',
				'repeat(auto-fill, 1fr)',
				'repeat(2, 1fr)',
			]}
			height="100%"
			maxHeight="100%"
			{...props}>
			{children}
		</MotionGrid>
	</MarginContainer>
)

export default MarginContainerTwoPage
