import { MotionBox } from '../atoms/index'

const MarginContainer: React.FC = ({ children, ...props }) => (
	<>
		<MotionBox
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
			p={['2rem', '2rem', '2rem', '5rem']}
			margin="2rem"
			borderColor="color"
			border={['0px', '0px', '0px', '1px']}
			height={['100%', '100%', '100%', '100vh']}
			rounded="md">
			{/* </Flex>/ */}
			{children}
		</MotionBox>
		{/* </Flex> */}
	</>
)

export default MarginContainer
