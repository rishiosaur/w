import Head from 'next/head'
import React from 'react'
import useSwr from 'swr'
import { GetServerSideProps, GetStaticProps } from 'next'
import { gql } from 'graphql-request'
import { Variants, motion } from 'framer-motion'
import fetch from 'node-fetch'
import { Box, Text, Grid, Flex, Image, MotionGrid } from '../src/atoms'

import { fetchFromCMS, getNowPlaying } from '../src/functions/fetch'
import TwoScreenLayout from '../src/containers/MarginContainerTwoPage'
import Widget from '../src/molecules/widget/index'
import { MotionFlex, MotionStack } from '../src/atoms/index'
import { Profile } from '../src/organisms/Home/Profile'
import { Articles } from '../src/organisms/Home/Articles'
import { containerVariants, childVariants } from '../src/molecules/motion/index'
import { Article, Project } from '../src/types'

type HomeProps = {
	projects: Partial<Project>[]
	articles: Partial<Article>[]
}

const fetcher = (url) => fetch(url).then((res) => res.json())

const Home: React.FC<HomeProps> = ({ projects, articles }) => {
	const { data } = useSwr('/api/spotify', fetcher)

	return (
		<>
			<HomeSeo />
			<TwoScreenLayout
				variants={
					{
						hidden: { opacity: 0 },

						show: {
							opacity: 1,
							transition: {
								staggerChildren: 0.5,
								delayChildren: 0.5,
							},
						},
					} as Variants
				}>
				<MotionFlex
					variants={{
						hidden: { opacity: 0 },
						show: {
							opacity: 1,
							// rotateX: 0,
							transition: {
								damping: 100,
							},
						},
					}}
					width={['100%', '100%', '100%', '75%']}
					justifyContent="space-between">
					<Profile spotify={data} />
				</MotionFlex>
				<MotionStack
					spacing="2rem"
					variants={{
						hidden: { opacity: 0 },
						show: {
							opacity: 1,
							// rotateX: 0,
							transition: {
								damping: 100,
							},
						},
					}}>
					<Text>Selected Works</Text>

					<MotionGrid
						templateColumns="repeat(auto-fit, 7rem)"
						templateRows="repeat(auto-fit, 7rem)"
						gap={3}
						variants={{
							hidden: { opacity: 0 },
							show: {
								opacity: 1,
								transition: {
									staggerChildren: 0.1,
									delayChildren: 1,
								},
							},
						}}
						initial="hidden"
						animate="show">
						{projects?.map((project, index) => (
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
}

export default Home

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const { projects, articles } = await fetchFromCMS(gql`
		{
			projects {
				id
				title
				preview
			}

			articles(sort: "created_at:desc", limit: 10) {
				id
				description
				title
				created_at
			}
		}
	`)

	console.log(articles)

	// const response = await getNowPlaying()

	// console.log(response)
	// let spotify = {}

	// if (!(response.status === 204 || response.status > 400)) {
	// 	// console.log(await response.json())

	// 	const { item: song, is_playing: playing, ...other } = await response.json()

	// 	console.log({
	// 		song,
	// 		playing,
	// 		other,
	// 	})

	// 	console.log(other)

	// 	if (playing && !(other.currently_playing_type === 'ad')) {
	// 		const { album, artists: sptfyArtists, external_urls, name } = song

	// 		const artists = sptfyArtists.map((artist) => artist.name).join(' + ')

	// 		spotify = {
	// 			artists,
	// 			album,
	// 			name,
	// 			url: external_urls.spotify,
	// 			playing: true,
	// 		}
	// 	}
	// }

	const ar = articles.map((article) => ({
		...article,
		created_at: new Date(article.created_at).toLocaleDateString('en-US', {
			weekday: 'short',
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		}),
	}))
	console.log(ar)

	return {
		props: {
			projects,
			articles: ar,
			// spotify,
		},
	}
}

const HomeSeo: React.FC = () => (
	<Head>
		<title>Rishi Kothari | Software Engineer</title>
		<meta name="title" content="Rishi Kothari | Software Engineer" />
		<meta
			name="description"
			content="Hi there! I'm Rishi Kothari, and I make cool things using cutting-edge technologies. I'm a 15-year-old high schooler living in Ontario, Canada."
		/>

		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://rki.now.sh" />
		<meta property="og:title" content="Rishi Kothari | Software Engineer" />
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
		<meta
			property="twitter:title"
			content="Rishi Kothari | Software Engineer"
		/>
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
