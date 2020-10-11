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
	Divider,
	MotionGrid,
} from '../../src/atoms/index'
import { Project } from '../../src/types'
import Widget from '../../src/molecules/widget/index'
import { childVariants, Articles } from '../../src/organisms/Home/Articles'

type ProjectPageProps = {
	project: Partial<Project>
	projects: Partial<Project>[]
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project, projects }) => (
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
					{project.categories.map(({ name, id }) => (
						<TextLink href={`/categories/${id}`} text={name} />
					))}
				</Flex>
				<Text>
					<Markdown>{project.content}</Markdown>
				</Text>

				{project.articles && (
					<Articles seeMore={false} articles={project.articles} />
				)}

				<Text fontSize="1.25rem">More Projects</Text>
				<MotionGrid
					templateColumns="repeat(auto-fit, 7rem)"
					gap={3}
					marginTop={1}
					variants={{
						hidden: { opacity: 0 },
						show: {
							opacity: 1,
							transition: {
								staggerChildren: 0.1,
								delayChildren: 1,
							},
						},
					}}
					initial="hidden"
					animate="show">
					{projects
						.filter((_project) => _project.id !== project.id)
						.map((project, index) => (
							<Widget
								key={index}
								variants={childVariants}
								link={`/projects/${project.id}`}
								bgImage={project.preview}
								title={project.title}
								before="Project"
								size="7rem"
							/>
						))}
				</MotionGrid>
			</Stack>
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
	const props = await fetchFromCMS(
		gql`
			query Query($id: ID!) {
				project(id: $id) {
					bg
					id
					title
					categories {
						name
						id
					}
					articles {
						id
						title
						description
					}
					created_at
					content
					likes
				}

				projects(sort: "id:asc") {
					id
					title
					preview
				}
			}
		`,
		{ id: context.params.id }
	)

	return {
		props,
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
