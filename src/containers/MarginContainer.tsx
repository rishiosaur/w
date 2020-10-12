import { MotionFlex } from '../atoms/index'
import { pageVariants } from '../molecules/motion/index'

const BaseLayout: React.FC = ({ children, ...props }) => (
	<>
		<MotionFlex
			{...props}
			initial="pageInitial"
			animate="pageAnimate"
			exit="exit"
			variants={pageVariants}
			overflow="visible"
			p={['5%', '5%', '5%', '8%']}
			margin={['0', '0', '0', '2rem']}
			overflowWrap="break-word"
			maxWidth="100%"
			alignItems="center"
			alignContent="center"
			rounded="md">
			{/* </Flex>/ */}
			{children}
		</MotionFlex>
		{/* </Flex> */}
	</>
)

export default BaseLayout
