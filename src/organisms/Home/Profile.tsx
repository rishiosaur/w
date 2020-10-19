import React from 'react'
import { isSafari } from 'react-device-detect'
import {
	Text,
	Stack,
	Tag,
	LightMode,
	TextLink,
	useTheme,
	Box,
} from '../../atoms'
import Widget from '../../molecules/widget/index'
import { MotionImage, MotionStack } from '../../atoms/index'
import { containerVariants, childVariants } from '../../molecules/motion/index'

export function Profile({ spotify }) {
	return (
		<Stack spacing="1rem" overflowWrap="break-word" overflow="hidden">
			<MotionImage
				initial="initial"
				animate="animate"
				variants={{
					initial: { opacity: 0, rotateX: -50, rotateY: 10 },
					animate: {
						opacity: 1,
						rotateX: 0,
						rotateY: 0,
						transition: { duration: 0.5, damping: 10 },
					},
				}}
				src={
					!isSafari
						? 'https://i.ibb.co/JrN91Vt/photo-grid-20-09-2020-09-21-20-2-2-1.webp'
						: 'https://scrapbook.hackclub.com/attachments/02cbaad88de654cd9508069400e7f4a7/7e8503ea/'
				}
				rounded="md"
				size="15rem"
			/>
			<Text>Hi there! 👋</Text>
			<Stack direction="row" alignItems="center">
				<Text fontSize="2rem">I'm Rishi Kothari.</Text>

				<TextLink text="he/him" href="https://pronoun.is/he/him" />
			</Stack>
			{spotify?.playing && (
				<Text>
					Listening to: <TextLink href={spotify.url} text={spotify.name} /> by{' '}
					{spotify.artists}
				</Text>
			)}
			<Text>
				<b>TL;DR</b> I'm a 15 year old open-source software engineer, SaaS
				startup CEO, and coffee lover that really likes to make things using{' '}
				<em>awesome</em> technologies.
			</Text>

			<Text>
				I've been programming for about 7 years now (I started all the way back
				when I was 8), and I've been able to get my hands onto a lot of
				different technologies and work positions.
			</Text>

			<Text>
				While I'm not currently looking for internships, my next opening is in{' '}
				<b>Spring 2021</b>. If you have a cool idea, feel free to write me an
				email at [hey@rishi.cx].
			</Text>
			<MotionStack direction="row" spacing={3} variants={containerVariants}>
				{[
					[
						'https://github.com/rishiosaur',
						'https://source.unsplash.com/pcZvxrAyYoQ/80x80',
						'gh',
					],
					[
						'https://github.com/rishiosaur',
						'https://source.unsplash.com/8xznAGy4HcY/80x80',
						'twtr',
					],
					[
						'https://github.com/rishiosaur',
						'https://source.unsplash.com/TrF3SYQ5skU/80x80',
						'ig',
					],
					[
						'https://linkedin.com/in/heyrishi',
						'https://source.unsplash.com/5gY9foYjQK8/80x80',
						'lkdn',
					],
					[
						'mailto:hey@rishi.cx',
						'https://source.unsplash.com/IgWNxx7paz4/80x80',
						'mail',
					],
					[
						"https://ranalytics.now.sh/share/D3HbT7eA/Rishi's%20Portfolio",
						'https://source.unsplash.com/-1CPNSnsABc/80x80',
						'anlyt',
					],
					[
						"/resume.pdf",
						'https://source.unsplash.com/0tvsOwILTPs/80x80',
						'resum',
					],
				].map(([url, bg, title]) => (
					<Widget
						variants={childVariants}
						link={url}
						bgImage={bg}
						title={title}
						before="link"
						size="5rem"
					/>
				))}
			</MotionStack>
		</Stack>
	)
}
