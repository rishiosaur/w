import Link from 'next/link'
import { Variants } from 'framer-motion'
import { Text, Stack, MotionBox, TextLink } from '../../atoms'
import { MotionStack } from '../../atoms/index'
import { Article } from '../../types'

export const containerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			delayChildren: 1,
		},
	},
}

export const childVariants: Variants = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
}

type ArticleProps = {
	articles: Partial<Article>[]
}

export const Articles: React.FC<ArticleProps> = ({ articles }) => (
	<MotionStack
		variants={containerVariants}
		initial="hidden"
		animate="show"
		spacing={3}>
		{articles.map(({ created_at, title, description, id }) => (
			<MotionStack
				variants={childVariants}
				fontSize="0.75rem"
				height="2rem"
				direction="row">
				<Link href={`/articles/${id}`}>
					<>
						<Stack alignItems="center" fontSize="0.75rem" direction="row">
							<Text>{created_at}</Text>
							<Text />
							<TextLink href={`/articles/${id}`} text={title} />
							<Text />
							<Text display={['none', 'none', 'none', 'initial']}>
								{description}
							</Text>
						</Stack>
					</>
				</Link>
			</MotionStack>
		))}
		<MotionBox variants={childVariants} fontSize="0.75rem">
			<TextLink href="/articles" text="See More" />
		</MotionBox>
	</MotionStack>
)
