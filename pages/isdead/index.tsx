import React from 'react'
import { Text, TextLink, Flex } from '../../src/atoms'
import TwoScreenLayout from '../../src/containers/MarginContainerTwoPage'

const isDeadPage = () => (
	<TwoScreenLayout>
		<Flex alignItems="center">
			<Text marginRight="1rem">no, rishi is not dead.</Text>
			<TextLink href="/" text="go home please" />
		</Flex>
	</TwoScreenLayout>
)

export default isDeadPage
