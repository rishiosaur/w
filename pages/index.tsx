import Head from 'next/head'
import useSwr from 'swr'
import { GetServerSideProps, GetStaticProps } from 'next'
import { gql } from 'graphql-request'
import { Variants, motion } from 'framer-motion'
import { Box, Text, Grid, Flex, Image, MotionGrid } from '../src/atoms'

import { fetchFromCMS, getNowPlaying } from '../src/functions/fetch'
import TwoScreenLayout from '../src/containers/MarginContainerTwoPage'
import Widget from '../src/molecules/widget/index'
import { MotionFlex, MotionStack } from '../src/atoms/index'
import { Profile } from '../src/organisms/Home/Profile'
import { Articles } from '../src/organisms/Home/Articles'
import { containerVariants, childVariants } from '../src/molecules/motion/index'

const Home: React.FC<any> = ({ projects, articles, spotify }) => (
	<>
		<HomeSeo />
		<TwoScreenLayout variants={containerVariants}>
			<MotionFlex
				variants={childVariants}
				width={['100%', '100%', '100%', '75%']}
				justifyContent="space-between">
				<Profile spotify={spotify} />
			</MotionFlex>
			<MotionStack spacing="2rem" variants={childVariants}>
				<Text>Selected Works</Text>

				<MotionGrid
					templateColumns="repeat(auto-fit, 7rem)"
					templateRows="repeat(auto-fit, 7rem)"
					gap={3}
					variants={containerVariants}
					initial="hidden"
					animate="show">
					{projects.map((project, index) => (
						<Widget
							key={index}
							variants={childVariants}
							link={`/projects/${project.id}`}
							bgImage={project.preview}
							title={project.title}
							before="Project"
						/>
					))}
				</MotionGrid>

				<Text>Latest Writings</Text>
				<Articles articles={articles} />
			</MotionStack>
		</TwoScreenLayout>
	</>
)

export default Home

export const getStaticProps: GetStaticProps = async () => {
	const { projects, articles } = await fetchFromCMS(gql`
		{
			projects {
				id
				title
				preview
			}

			articles(sort: "created_at:desc", limit: 10) {
				id
				Description
				Title
				created_at
			}
		}
	`)

	const response = await getNowPlaying()

	let spotify = {}

	if (!(response.status === 204 || response.status > 400)) {
		// console.log(await response.json())

		const { item: song, is_playing: playing, ...other } = await response.json()

		console.log({
			song,
			playing,
			other,
		})

		console.log(other)

		if (playing && !(other.currently_playing_type === 'ad')) {
			const { album, artists: sptfyArtists, external_urls, name } = song

			const artists = sptfyArtists.map((artist) => artist.name).join(' + ')

			spotify = {
				artists,
				album,
				name,
				url: external_urls.spotify,
				playing: true,
			}
		}
	}

	const ar = articles.map((article) => ({
		...article,
		created_at: new Date(article.created_at).toLocaleDateString('en-US', {
			weekday: 'short',
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		}),
	}))

	return {
		props: {
			projects,
			articles: ar,
			spotify,
		},
	}
}

function HomeSeo() {
	return (
		<Head>
			<meta name="title" content="e" />
			<meta name="description" content="e" />
			<meta name="keywords" content="e" />
			<meta name="robots" content="index, follow" />
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
			<meta name="language" content="English" />
			<meta name="author" content="Rishi Kothari" />

			<title>Rishi Kothari | Developer</title>
			<meta name="title" content="Rishi Kothari | Developer" />
			<meta
				name="description"
				content="Hi there! I'm Rishi Kothari, and I make cool things using cutting-edge technologies. I'm a 15-year-old high schooler living in Ontario, Canada."
			/>

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://rki.now.sh" />
			<meta property="og:title" content="Rishi Kothari | Developer" />
			<meta
				property="og:description"
				content="Hi there! I'm Rishi Kothari, and I make cool things using cutting-edge technologies. I'm a 15-year-old high schooler living in Ontario, Canada."
			/>
			<meta
				property="og:image"
				content="https://i.ibb.co/G3xSVSr/photo-grid-20-09-2020-09-21-20-2-2.jpg"
			/>

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://rki.now.sh/" />
			<meta property="twitter:title" content="Rishi Kothari | Developer" />
			<meta
				property="twitter:description"
				content="Hi there! I'm Rishi Kothari, and I make cool things using cutting-edge technologies. I'm a 15-year-old high schooler living in Ontario, Canada."
			/>
			<meta
				property="twitter:image"
				content="https://i.ibb.co/G3xSVSr/photo-grid-20-09-2020-09-21-20-2-2.jpg"
			/>
		</Head>
	)
}
