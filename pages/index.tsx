import Head from 'next/head'
import useSwr from 'swr'
import { GetStaticProps } from 'next'
import { gql } from 'graphql-request'
import { Variants, motion } from 'framer-motion'
import { Box, Text, Grid, Flex, Image, MotionGrid } from '../src/atoms'

import BaseContainer from '../src/containers/BaseContainer'
import Centroid from '../src/containers/Centroid'
import MarginContainer from '../src/containers/MarginContainer'
import { fetchFromCMS } from '../src/functions/fetch'
import MarginContainerTwoPage from '../src/containers/MarginContainerTwoPage'
import Widget from '../src/molecules/widget/index'
import { MotionFlex, MotionStack } from '../src/atoms/index'
import { Profile } from '../src/organisms/Home/Profile'
import { Articles } from '../src/organisms/Home/Articles'

export const containerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

export const childVariants: Variants = {
	hidden: { opacity: 0, rotateX: -100 },
	show: { opacity: 1, rotateX: 0 },
}

const Home: React.FC<any> = ({ projects, articles }) => {
	console.log(projects)
	return (
		// console.log(projects)
		<>
			<MarginContainerTwoPage variants={containerVariants}>
				<MotionFlex
					variants={childVariants}
					width={['100%', '100%', '100%', '50%']}
					justifyContent="space-between">
					<Profile />
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
								bgImage={project.bg}
								title={project.title}
								before="Project"
							/>
						))}
					</MotionGrid>
					{/* <hr /> */}
					{/* <MotionGrid
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
					</MotionGrid> */}

					<Text>Latest Writings</Text>
					{Articles(articles)}
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

			articles(sort: "created_at:desc", limit: 10) {
				id
				Description
				Title
				created_at
			}
		}
	`)

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
		},
	}
}
