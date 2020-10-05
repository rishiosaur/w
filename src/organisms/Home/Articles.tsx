import Link from 'next/link'
import { Variants } from 'framer-motion'
import { Text, Stack, MotionBox, TextLink } from '../../atoms'
import { MotionStack } from '../../atoms/index'

export const containerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
		},
	},
}

export const childVariants: Variants = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
}

export const Articles: React.FC<any> = ({ articles }) => (
	<MotionStack
		variants={containerVariants}
		initial="hidden"
		animate="show"
		spacing={3}>
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
							<Text />
							<TextLink href={`/articles/${article.id}`} text={article.Title} />
							<Text />
							<Text display={['none', 'none', 'none', 'initial']}>
								{article.Description}
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
