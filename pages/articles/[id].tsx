import { useRouter } from 'next/router'
import React from 'react'
import { gql } from 'graphql-request'
import { GetStaticPaths, GetStaticProps } from 'next'

import Head from 'next/head'
import { fetchFromCMS } from '../../src/functions/fetch'
import MarginContainerTwoPage from '../../src/containers/MarginContainerTwoPage'
import {
	MotionBox,
	Text,
	MotionStack,
	Markdown,
	Flex,
	Box,
	MotionFlex,
	TextLink,
} from '../../src/atoms'
import { Article } from '../../src/types'

const truncateString = (str) => {
	if (str.length <= 18) {
		return str
	}
	return `${str.slice(0, 18)}...`
}

const PostSeo: React.FC<{ article: Partial<Article> }> = ({ article }) => {
	const router = useRouter()

	return (
		<Head>
			<title>{article.title} — Rishi Kothari</title>
			<meta name="title" content={`${article.title} — Rishi Kothari`} />
			<meta name="description" content={article.description} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={`${article.title} — Rishi Kothari`} />
			<meta property="og:title" content={`${article.title} — Rishi Kothari`} />
			<meta property="og:description" content={article.description} />
			<meta property="og:image" content={article.bg} />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={router.asPath} />
			<meta
				property="twitter:title"
				content={`${article.title} — Rishi Kothari`}
			/>
			<meta property="twitter:description" content={article.description} />
			<meta property="twitter:image" content={article.bg} />
		</Head>
	)
}

interface PostProps {
	article: Partial<Article>
	previousArticle?: Partial<Article>
	nextArticle?: Partial<Article>
}

const Post: React.FC<PostProps> = ({
	article,
	nextArticle,
	previousArticle,
}) => (
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
					{article.projects && (
						<MotionStack direction="row" spacing="0.25rem">
							<Text fontSize="0.75rem">
								Associated projects:{' '}
								{article.projects.map((project) => (
									<TextLink
										href={`/projects/${project.id}`}
										text={project.title}
									/>
								))}
							</Text>
						</MotionStack>
					)}
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

					<Flex
						width="100%"
						as={Flex}
						justifyContent="space-between"
						direction="row"
						dir="row"
						flexDir="row"
						justify="center">
						{previousArticle && (
							<MotionStack direction="row" spacing="0.5rem" alignItems="center">
								<Text>←</Text>
								<TextLink
									text={truncateString(previousArticle.title)}
									href={`/articles/${previousArticle.id}`}
								/>
							</MotionStack>
						)}

						{nextArticle && (
							<MotionStack direction="row" spacing="0.5rem" alignItems="center">
								<Box>
									<TextLink
										text={truncateString(nextArticle.title)}
										href={`/articles/${nextArticle.id}`}
									/>
								</Box>
								<Text>→</Text>
							</MotionStack>
						)}
					</Flex>
				</MotionStack>
			</MotionBox>
		</MarginContainerTwoPage>
		<PostSeo article={article} />
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

					projects {
						id
						title
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
