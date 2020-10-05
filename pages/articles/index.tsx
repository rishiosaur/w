import { GetStaticProps } from 'next'
import { gql } from 'graphql-request'
import Link from 'next/link'
import { fetchFromCMS } from '../../src/functions/fetch'
import TwoScreenLayout from '../../src/containers/MarginContainerTwoPage'
import { Stack, Text, MotionStack, TextLink } from '../../src/atoms/index'
import {
	childVariants,
	containerVariants,
} from '../../src/molecules/motion/index'

const ArticlePage: React.FC<any> = ({ articles }) => (
	<TwoScreenLayout>
		<MotionStack variants={containerVariants}>
			<MotionStack width="50%">
				<Text fontSize="2rem">Latest Articles</Text>
				<Text fontSize="1rem">
					Occasionally, I'll post some musings about life on here. You can also
					implement your own clients for this following my API spec.
				</Text>
			</MotionStack>

			{articles.map((article) => (
				<MotionStack
					variants={childVariants}
					fontSize="0.75rem"
					height="2rem"
					direction="row">
					<Link href={`/articles/${article.id}`}>
						<>
							<Stack alignItems="center" fontSize="0.75rem" direction="row">
								<Text>{article.created_at}</Text>

								<TextLink
									href={`/articles/${article.id}`}
									text={article.Title}
								/>
								<Text />
								<Text>{article.Description}</Text>
							</Stack>
						</>
					</Link>
				</MotionStack>
			))}
		</MotionStack>
	</TwoScreenLayout>
)

export default ArticlePage

export const getStaticProps: GetStaticProps = async () => {
	const { articles } = await fetchFromCMS(gql`
		{
			articles(sort: "created_at:desc") {
				id
				bg
				Title
				Description
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

	return {
		props: {
			articles: ar,
		},
	}
}
