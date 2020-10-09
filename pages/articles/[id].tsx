import { useRouter } from 'next/router'
import React from 'react'
import { request, gql } from 'graphql-request'
import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next'

import { fetchFromCMS } from '../../src/functions/fetch'
import MarginContainerTwoPage from '../../src/containers/MarginContainerTwoPage'
import {
	MotionBox,
	Text,
	MotionImage,
	MotionStack,
	Markdown,
	Flex,
	Box,
	MotionTag,
} from '../../src/atoms'
import { Tag, MotionFlex, Link, TextLink } from '../../src/atoms/index'

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
					<Text overflowWrap="break-word">{article.Description}</Text>
					<Flex>
						{article.categories?.map(({ Name, id }) => (
							<TextLink href={`/categories/${id}`} text={Name} />
						))}
					</Flex>
				</MotionStack>
			</MotionFlex>
			<MotionBox marginLeft={['0', '0', '0', '3rem']}>
				<MotionStack
					marginBottom="1rem"
					width={['100%', '100%', '100%', '75%']}
					spacing="5">
					<Box>
						<TextLink href="/" text="Home" />
					</Box>
					<Text fontSize="1.25rem">
						<Markdown>{article.content}</Markdown>
					</Text>
					<hr />
					<Text>Article</Text>
				</MotionStack>
			</MotionBox>
		</MarginContainerTwoPage>
	</>
)

export default Post

export const getServerSideProps: GetServerSideProps = async (context) => {
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
				}
			}
		`,
		{ id: context.params.id }
	)

	console.log(article)

	return {
		props: {
			article,
		},
	}
}

// export const getStaticPaths: GetStaticPaths = async () => {
// 	const {
// 		articles,
// 	}: {
// 		articles: { id: string }[]
// 	} = await fetchFromCMS(gql`
// 		{
// 			articles {
// 				id
// 			}
// 		}
// 	`)

// 	const paths = articles.map(({ id }) => ({ params: { id } }))

// 	return { paths, fallback: false }
// }
