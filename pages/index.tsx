import Head from 'next/head'
import useSwr from 'swr'
import { GetStaticProps } from 'next'
import { gql } from 'graphql-request'
import { Variants } from 'framer-motion'
import {
	Box,
	Text,
	Grid,
	Flex,
	Stack,
	Tag,
	Image,
	MotionBox,
	MotionGrid,
} from '../src/atoms'
import BaseContainer from '../src/containers/BaseContainer'
import Centroid from '../src/containers/Centroid'
import MarginContainer from '../src/containers/MarginContainer'
import { fetchFromCMS } from '../src/functions/fetch'
import MarginContainerTwoPage from '../src/containers/MarginContainerTwoPage'
import Widget from '../src/molecules/widget/index'
import { MotionImage, MotionFlex, MotionStack } from '../src/atoms/index'

interface HomeProps {
	projects: { bg: string; id: string; title: string }[]
}

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const childVariants: Variants = {
	hidden: { opacity: 0, rotateX: -100 },
	show: { opacity: 1, rotateX: 0 },
}

const Home: React.FC<HomeProps> = ({ projects, articles }) => {
	console.log(projects)
	return (
		// console.log(projects)
		<>
			<MarginContainerTwoPage variants={containerVariants}>
				<MotionFlex
					variants={childVariants}
					width={['100%', '100%', '100%', '50%']}
					justifyContent="space-between">
					<Stack spacing="1rem">
						<MotionImage
							initial="initial"
							animate="animate"
							variants={{
								initial: { opacity: 0, rotateX: -50, rotateY: 10 },
								animate: { opacity: 1, rotateX: 0, rotateY: 0 },
							}}
							transition={{ duration: 0.5, damping: 10 }}
							src="https://i.ibb.co/Q8FHs8N/photo-grid-20-09-2020-09-21-20-2.jpg"
							rounded="md"
							size="15rem"
						/>
						<Text>Hi there! 👋</Text>
						<Stack direction="row" alignItems="center">
							<Text fontSize="2rem">I'm Rishi Kothari.</Text>
							<Tag size="sm" variant="subtle" height="1rem">
								he/him
							</Tag>
						</Stack>
						<Text>
							<b>TL;DR</b> I'm a 15 year old developer that really likes to make
							things using <em>awesome</em> technologies.
						</Text>

						<Text>
							I've been programming for about 7 years now (I started all the way
							back when I was 8), and I've been able to get my hands onto a lot
							of different technologies and work positions.
						</Text>

						<Text>
							While I'm not currently looking for internships, my next opening
							is in <b>Spring 2021</b>. If you have a cool idea, feel free to
							write me an email at [hey@rishi.cx].
						</Text>

						<br />
					</Stack>
				</MotionFlex>
				<MotionStack spacing="1rem" variants={childVariants}>
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
								bgImage={project.bg}
								title={project.title}
								before="Project"
							/>
						))}
					</MotionGrid>
					{/* <hr /> */}
					<MotionGrid
						templateColumns="repeat(auto-fit, 7rem)"
						templateRows="repeat(auto-fit, 7rem)"
						gap={3}
						variants={containerVariants}
						initial="hidden"
						animate="show">
						{articles.map((article, index) => (
							<Widget
								key={index}
								variants={childVariants}
								link={`/articles/${article.id}`}
								bgImage={article.bg}
								title={article.Title}
								before="Article"
							/>
						))}
					</MotionGrid>
				</MotionStack>
			</MarginContainerTwoPage>
			{/* <div id="home"> */}
			{/* <MarginContainerTwoPage variants={containerVariants}>
				<Flex
					width={['100%', '100%', '100%', '50%']}
					justifyContent="space-between">
					<Stack>
						<Image
							src="https://i.ibb.co/Q8FHs8N/photo-grid-20-09-2020-09-21-20-2.jpg"
							rounded="md"
							size="15rem"
						/>
						<Text>Hi there! 👋</Text>
						<Stack direction="row" alignItems="center">
							<Text fontSize="2rem">I'm Rishi Kothari.</Text>
							<Tag size="sm" variant="subtle" height="1rem">
								he/him
							</Tag>
						</Stack>
						<Text>
							<b>TL;DR</b> I'm a 15 year old developer that really likes to make
							things using <em>awesome</em> technologies.
						</Text>

						<Text>
							I've been programming for about 7 years now (I started all the way
							back when I was 8), and I've been able to get my hands onto a lot
							of different technologies and work positions.
						</Text>

						<Text>
							While I'm not currently looking for internships, my next opening
							is in <b>Spring 2021</b>. If you have a cool idea, feel free to
							write me an email at [hey@rishi.cx].
						</Text>

						<br />
					</Stack>
				</Flex>
				<Box variants={childVariants}>
					<Grid
						templateColumns="repeat(auto-fit, 7rem)"
						templateRows="repeat(auto-fit, 7rem)"
						gap={3}
						variants={containerVariants}
						initial="hidden"
						animate="show">
						{/* {projects.map((project, index) => {
							return (
								<Widget
									key={index}
									variants={childVariants}
									link={`/projects/${project.id}`}
									bgImage={project.bg}
									title={project.title}
								/>
							)
						})} */}
			{/* </Grid>
				</Box>
			</MarginContainerTwoPage> */}
		</>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	const { projects, articles } = await fetchFromCMS(gql`
		{
			projects {
				bg
				id
				title
			}

			articles {
				bg
				id
				Title
			}
		}
	`)

	console.log(articles)

	return {
		props: {
			projects,
			articles,
		},
	}
}

// export const getStaticProps: GetStaticProps = async () => {
// 	// `getStaticProps` is invoked on the server-side,
// 	// so this `fetcher` function will be executed on the server-side.
// 	const spotify = await fetchFromSpotify(
// 		'https://api.spotify.com/v1/me/player/currently-playing?market=NA&additional_types=track'
// 	)

// 	console.log(await spotifyAPI.getMe())

// 	return {
// 		props: {
// 			spotify,
// 		},
// 	}
// 	// return { props: { posts } }
// }
