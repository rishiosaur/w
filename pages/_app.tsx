import { request, gql } from 'graphql-request'
import {
	Box,
	ColorModeProvider,
	CSSReset,
	DarkMode,
	Flex,
	ITheme,
	ThemeProvider,
	theme as ChakraTheme,
} from '@chakra-ui/core'

import {
	AnimatePresence,
	motion,
	useMotionValue,
	useSpring,
} from 'framer-motion'
import { useEffect } from 'react'
import App from 'next/app'
import { MotionFlex, MotionBox } from '../src/atoms/index'
import { pageVariants } from '../src/molecules/motion/index'

import { getTheme } from '../src/functions/fetch'

const config = (theme: ITheme) => ({
	light: {
		color: theme.colors.white,
		bg: theme.colors.black,
		borderColor: theme.colors.white,
		placeholderColor: theme.colors.whiteAlpha[400],
	},
	dark: {
		color: theme.colors.white,
		bg: theme.colors.black,
		borderColor: theme.colors.white,
		placeholderColor: theme.colors.whiteAlpha[400],
	},
})

function WApp({ Component, pageProps, router, props }) {
	const cursorX = useMotionValue(-100)
	const cursorY = useMotionValue(-100)

	const { theme } = props

	const springConfig = { stiffness: 30, duration: 0 }
	const cursorXSpring = useSpring(cursorX, springConfig)
	const cursorYSpring = useSpring(cursorY, springConfig)

	useEffect(() => {
		const moveCursor = (e) => {
			cursorX.set(e.clientX - 16)
			cursorY.set(e.clientY - 16)
		}

		window.addEventListener('mousemove', moveCursor)

		return () => {
			window.removeEventListener('mousemove', moveCursor)
		}
	}, [cursorX, cursorY])

	return (
		<>
			<AnimatePresence exitBeforeEnter>
				<ThemeProvider
					theme={{
						...ChakraTheme,
						colors: {
							...ChakraTheme.colors,
							black: theme.bg,
							white: theme.fg,
						},
					}}>
					<ColorModeProvider>
						<CSSReset config={config} />
						<DarkMode>
							<MotionFlex
								key={router.route}
								initial="initial"
								animate="animate"
								exit="out"
								variants={pageVariants}
								flexDir="column"
								marginX="auto">
								<Component {...pageProps} />
							</MotionFlex>
						</DarkMode>
					</ColorModeProvider>
				</ThemeProvider>
			</AnimatePresence>
			<MotionBox
				display={['none', 'none', 'none', 'initial']}
				className="cursor"
				style={{
					translateX: cursorXSpring,
					translateY: cursorYSpring,
				}}
			/>
			<style global jsx>
				{`
					html,
					body {
						height: 100%;
					}
					.cursor {
						position: fixed;
						left: 0;
						top: 0;
						width: 10px;
						height: 10px;
						border: 2px solid white;
						border-radius: 100rem;
						mix-blend-mode: difference;
						z-index: 999;
						pointer-events: none;
						transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
					}
					* {
						cursor: none;
					}

					html {
						height: 100%;
					}
					body {
						min-height: 100%;
					}
				`}
			</style>
		</>
	)
}

WApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext)

	const theme = await getTheme()

	return { ...appProps, props: { theme } }
}

export default WApp
