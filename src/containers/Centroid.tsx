import { Flex, Box } from '@chakra-ui/core'

const Centroid: React.FC = ({ children }) => (
		<>
			<Flex
				height="100vh"
				flexDirection="column"
				// alignItems="center"
				justifyContent="center"
				alignSelf="center">
				{/* <Flex> */}
				{/* <Flex flex="0 1 auto" height="10rem"> */}
				<Box>
					{/* </Flex>/ */}
					{children}
				</Box>
			</Flex>
			{/* </Flex> */}
		</>
	)

export default Centroid
