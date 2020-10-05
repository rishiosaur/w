import { useRouter } from 'next/router'
import React from 'react'
import { request, gql } from 'graphql-request'
import { GetStaticPaths, GetStaticProps } from 'next'

import { fetchFromCMS } from '../../src/functions/fetch'
import MarginContainerTwoPage from '../../src/containers/MarginContainerTwoPage'
import {
	MotionBox,
	Text,
	MotionImage,
	MotionStack,
	Markdown,
	Flex,
	MotionTag,
} from '../../src/atoms'
import { Tag, MotionFlex, Link } from '../../src/atoms/index'

interface PostProps {
	article: Record<string, any>
}

const Post: React.FC<PostProps> = ({ article }) => (
	<>
		<MarginContainerTwoPage>
			<MotionFlex
				backgroundImage={`url('${article.bg}')`}
				height="100%"
				width="100%"
				maxH="100%"
				maxW="100%"
				size="100%"
				backgroundPosition="center"
				backgroundRepeat="no-repeat"
				backgroundAttachment="fill"
				backgroundSize="cover"
				border="1px"
				borderColor="color"
				rounded="sm"
				alignItems="center"
				justifyContent="center">
				<MotionStack
					p="5rem"
					border={['0', '0', '0', '1px']}
					borderColor="color"
					rounded="sm"
					maxWidth="30rem">
					<Text fontSize="0.5rem">Article</Text>
					<Text fontSize="2rem">{article.Title}</Text>
					<Text overflowWrap="break-word">
						{article.Description}
						awefoiawefhoiawehogfiahweogihawogihaweoigoaiwehgoiwegoiwogiawoegih
					</Text>
					<Flex>
						{article.categories.map(({ Name, id }) => (
							<Link href={`/categories/${id}`}>
								<MotionTag
									display="inline-flex"
									whileHover={{ opacity: 0.75 }}
									variant="outline"
									size="sm">
									{Name}
								</MotionTag>
							</Link>
						))}
					</Flex>
				</MotionStack>
			</MotionFlex>
			<MotionBox marginLeft={['0', '0', '0', '3rem']}>
				<MotionStack
					marginBottom="1rem"
					width={['100%', '100%', '100%', '75%']}
					spacing="5">
					<Markdown>{article.content}</Markdown>
					<hr />
				</MotionStack>
				<Text>Article</Text>
			</MotionBox>
		</MarginContainerTwoPage>
	</>
)

export default Post

export const getStaticProps: GetStaticProps = async (context) => {
	const { article } = await fetchFromCMS(
		gql`
			query Query($id: ID!) {
				article(id: $id) {
					id
					created_at
					content
					likes
					bg
					Description
					Title
					authors {
						name
						description
						pfp
					}

					categories {
						id
						Name
					}
				}
			}
		`,
		{ id: context.params.id }
	)

	return {
		props: {
			article,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const {
		articles,
	}: {
		articles: { id: string }[]
	} = await fetchFromCMS(gql`
		{
			articles {
				id
			}
		}
	`)

	const paths = articles.map(({ id }) => ({ params: { id } }))

	return { paths, fallback: false }
}
