import { Flex, Text } from '@chakra-ui/core'

const BaseContainer: React.FC = ({ children }) => (
	<>
		{/* <Flex> */}

		<Flex flex="1 1 auto">{children}</Flex>
		{/* </Flex> */}
	</>
)

export default BaseContainer
