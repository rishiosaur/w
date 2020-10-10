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
import { Tag, MotionFlex, Link, TextLink, Divider } from '../../src/atoms/index'
import { Article } from '../../src/types'

interface PostProps {
	article: Partial<Article>
	previousArticle?: Partial<Article>
	nextArticle?: Partial<Article>
}

const Post: React.FC<PostProps> = ({ article, nextArticle }) => (
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
					<Text fontSize="2rem">{article.title}</Text>
					<Text overflowWrap="break-word">{article.description}</Text>
					<Flex>
						{article.categories?.map(({ name, id }) => (
							<TextLink href={`/categories/${id}`} text={name} />
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
					<Divider />
					{nextArticle && (
						<Text>
							Next Up:{' '}
							<TextLink
								text={nextArticle.title}
								href={`/articles/${nextArticle.id}`}
							/>
						</Text>
					)}
				</MotionStack>
			</MotionBox>
		</MarginContainerTwoPage>
	</>
)

export default Post

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
	const props: PostProps = {
		article: {},
	}

	const { article, articles } = await fetchFromCMS(
		gql`
			query Query($id: ID!) {
				article(id: $id) {
					id
					created_at
					content
					likes
					bg
					description
					title
					categories {
						name
						id
					}
				}
				articles(sort: "created_at:asc") {
					id
					title
					description
				}
			}
		`,
		{ id: context.params.id }
	)

	props.article = article
	const previousArticle = articles[article.id - 2]
	if (previousArticle) {
		props.previousArticle = previousArticle
	}
	const nextArticle = articles[article.id]
	if (nextArticle) {
		props.nextArticle = nextArticle
	}

	return {
		props,
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
