import { MotionFlex } from '../atoms/index'

const BaseLayout: React.FC = ({ children, ...props }) => (
	<>
		<MotionFlex
			{...props}
			initial="pageInitial"
			animate="pageAnimate"
			exit="exit"
			variants={{
				pageInitial: {
					opacity: 0,
				},
				pageAnimate: {
					opacity: 1,
				},
				exit: {
					opacity: 0,
				},
			}}
			p={['2rem', '2rem', '2rem', '10rem']}
			margin={['0', '0', '0', '2rem']}
			overflowWrap="break-word"
			maxWidth="100%"
			alignItems="center"
			alignContent="center"
			borderColor="color"
			border={['0px', '0px', '0px', '1px']}
			height={['initial', 'initial', 'initial', '100%']}
			rounded="md">
			{/* </Flex>/ */}
			{children}
		</MotionFlex>
		{/* </Flex> */}
	</>
)

export default BaseLayout
