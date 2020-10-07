import Head from 'next/head'
import useSwr from 'swr'
import { GetServerSideProps } from 'next'
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

export const getServerSideProps: GetServerSideProps = async () => {
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

		const { item: song, is_playing: playing } = await response.json()

		if (playing) {
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
