/* eslint-disable prefer-destructuring */
/* eslint-disable no-bitwise */
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
	Variants,
} from 'framer-motion'
import { useEffect, useState } from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import App, { NextWebVitalsMetric } from 'next/app'

import Head from 'next/head'
import { MotionFlex } from '../src/atoms/index'
import { pageVariants } from '../src/molecules/motion/index'

import { getStaticPaths } from './articles/[id]'
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

	console.log(props)

	const { theme } = props

	console.log(theme)

	const springConfig = { stiffness: 30, duration: 0 }
	const [color, setColor] = useState('white')
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
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<AnimatePresence exitBeforeEnter>
				<ThemeProvider
					theme={{
						...ChakraTheme,
						fonts: {
							...ChakraTheme.fonts,
							body: 'Inter, sans-serif',
							heading: 'Inter, sans-serif',
						},
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
								height="100vh"
								marginX="auto">
								<Component {...pageProps} />
							</MotionFlex>
						</DarkMode>
					</ColorModeProvider>
				</ThemeProvider>
			</AnimatePresence>
			<motion.div
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

// export const reportWebVitals = (metric: NextWebVitalsMetric) => {
// 	console.log(metric)
// }
