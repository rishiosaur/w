import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next'
import { gql } from 'graphql-request'
import { fetchFromCMS } from '../../src/functions/fetch'
import TwoScreenLayout from '../../src/containers/MarginContainerTwoPage'

import {
	MotionImage,
	Text,
	Box,
	Markdown,
	Tag,
	Stack,
	Flex,
	TextLink,
} from '../../src/atoms/index'
import { Project } from '../../src/types'

type ProjectPageProps = {
	project: Partial<Project>
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => (
	<TwoScreenLayout>
		<MotionImage
			src={project.bg}
			size="100%"
			display={['initial', 'initial', 'initial', 'none']}
		/>
		<Box>
			<Stack
				marginBottom="1rem"
				width={['100%', '100%', '100%', '50%']}
				spacing="5">
				<Text fontSize="2rem">{project.title}</Text>
				<Flex>
					{project.categories.map(({ Name, id }) => (
						<TextLink href={`/categories/${id}`} text={Name} />
					))}
				</Flex>
				<Text>
					<Markdown>{project.content}</Markdown>
				</Text>
				<hr />
			</Stack>
			<Text>Article</Text>
		</Box>
		<MotionImage
			src={project.bg}
			size="100%"
			display={['none', 'none', 'none', 'inline']}
		/>
	</TwoScreenLayout>
)

export default ProjectPage

export const getStaticProps: GetStaticProps<ProjectPageProps> = async (
	context
) => {
	const { project } = await fetchFromCMS(
		gql`
			query Query($id: ID!) {
				project(id: $id) {
					bg
					id
					title
					categories {
						Name
						id
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

	return {
		props: { project },
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { projects } = await fetchFromCMS(gql`
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
