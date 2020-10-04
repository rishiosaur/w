import { theme } from '@chakra-ui/core'

export default {
	...theme,
	colors: {
		...theme.colors,
		// bg: '#000',
		gray: {
			...theme.colors.gray,
			// 800: '#000',
		},
		// blackAlpha: '#000',
	},
	fontSizes: {
		...theme.fontSizes,
	},
}
