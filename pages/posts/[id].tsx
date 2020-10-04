import { useRouter } from 'next/router'
import React from 'react'
import { request, gql } from 'graphql-request'
import { fetchFromCMS } from '../../src/functions/fetch'
import { GetStaticPaths, GetStaticProps } from 'next'

const Post = () => {
	return (
		<>
			<h1>hawefll</h1>
		</>
	)
}

export default Post

// export const getStaticProps: GetStaticProps = async (context) => {
// 	const props = await fetchFromCMS(
// 		gql`
// 			query Query($id: ID!) {
// 				article(id: $id) {
// 					id
// 					created_at
// 					content
// 					likes
// 					bg
// 					Description
// 					Title
// 					authors {
// 						name
// 						description
// 						pfp
// 					}

// 					categories {
// 						Name
// 						Description
// 					}
// 				}
// 			}
// 		`,
// 		{ id: context.params.id }
// 	)

// 	console.log(props)

// 	return {
// 		props: props.article,
// 	}
// }

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

// 	const paths = articles.map(({ id }) => {
// 		return { params: { id } }
// 	})

// 	return { paths, fallback: false }
// }
