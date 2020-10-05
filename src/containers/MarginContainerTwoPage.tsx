import { motion, MotionProps } from 'framer-motion'
import BaseLayout from './MarginContainer'
import { GridProps, MotionGrid } from '../atoms'
import { MotionBox } from '../atoms/index'

const TwoScreenLayout: React.FC<MotionProps & GridProps & any> = ({
	children,
	...props
}) => (
	<BaseLayout>
		<MotionGrid
			gap={3}
			templateColumns={[
				'repeat(auto-fill, 1fr)',
				'repeat(auto-fill, 1fr)',
				'repeat(auto-fill, 1fr)',
				'repeat(2, 1fr)',
			]}
			height={['100%']}
			{...props}>
			{children}
		</MotionGrid>
	</BaseLayout>
)

export default TwoScreenLayout
