import { GetStaticPaths, GetStaticProps } from 'next'
import { gql } from 'graphql-request'
import { fetchFromCMS } from '../../src/functions/fetch'
import MarginContainerTwoPage from '../../src/containers/MarginContainerTwoPage'
import {
	MotionImage,
	Text,
	Image,
	Box,
	Markdown,
	Tag,
	Stack,
	Flex,
} from '../../src/atoms/index'

const ProjectPage: React.FC<any> = ({ project }) => (
	<MarginContainerTwoPage>
		<Box>
			<Stack
				marginBottom="1rem"
				width={['100%', '100%', '100%', '50%']}
				spacing="5">
				<Text fontSize="2rem">{project.title}</Text>
				<Flex>
					{project.categories.map(({ Name }) => (
						<Tag display="inline-flex" variant="outline" size="sm">
							{Name}
						</Tag>
					))}
				</Flex>
				<Markdown>{project.content}</Markdown>
				<hr />
			</Stack>
			<Text>Article</Text>
		</Box>
		<MotionImage
			src={project.bg}
			height="100%"
			width="100%"
			maxH="100%"
			maxW="100%"
			size="100%"
		/>
	</MarginContainerTwoPage>
)

export default ProjectPage

export const getStaticProps: GetStaticProps = async (context) => {
	const { project } = await fetchFromCMS(
		gql`
			query Query($id: ID!) {
				project(id: $id) {
					bg
					id
					title
					categories {
						Name
					}
					created_at
					content
					likes
				}

				projects {
					id
					bg
					title
				}
			}
		`,
		{ id: context.params.id }
	)

	console.log(project)

	return {
		props: { project },
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const {
		projects,
	}: {
		projects: { id: string }[]
	} = await fetchFromCMS(gql`
		{
			projects {
				id
			}
		}
	`)

	const paths = projects.map(({ id }) => ({ params: { id } }))

	console.log(paths)

	return { paths, fallback: false }
}
