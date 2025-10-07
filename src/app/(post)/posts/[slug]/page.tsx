import type { Metadata } from 'next';

import { getAllPosts, getPost } from '@/services/post';
import { cn } from '@/utils/cn';
import { extractCoverImageInfo } from '@/utils/extractCoverImageInfo';

import { Giscus, TableOfContents, TagChip } from '../components';

type Category = {
	color: string;
	id: string;
	name: string;
};

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
	params,
}: {
	params: Params;
}): Promise<Metadata> {
	const { slug } = await params;

	const { content, description, lastEditedTime, title } = await Promise.resolve(
		getPost(slug),
	);
	const { alt = '', src = '' } = extractCoverImageInfo(content);

	return {
		authors: {
			name: 'Wonse Shin',
			url: 'https://github.com/shinwonse',
		},
		description,
		openGraph: {
			authors: 'Wonse Shin',
			description,
			images: [{ alt, url: src }],
			publishedTime: lastEditedTime.format('YYYY-MM-DD'),
			title,
		},
		title,
	};
}

export async function generateStaticParams() {
	return (await getAllPosts()).map(({ slug }) => ({ slug }));
}

async function Post({ params }: { params: Params }) {
	const { slug } = await params;

	const { category, content, description, lastEditedTime, title, toc } =
		await Promise.resolve(getPost(slug));

	return (
		<main className={cn('flex w-full flex-col items-center py-12')}>
			<article className={cn('w-full max-w-3xl')}>
				<header
					className={cn(
						'mb-12 flex flex-col gap-6 border-b border-border/40 pb-8',
					)}
				>
					<div className={cn('flex flex-row flex-wrap gap-2')}>
						{category.map((item: Category) => (
							<TagChip key={item.id} color={item.color} label={item.name} />
						))}
					</div>
					<h1
						className={cn(
							'text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl',
							'bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text',
						)}
					>
						{title}
					</h1>
					<p className={cn('text-lg text-muted-foreground leading-relaxed')}>
						{description}
					</p>
					<time className={cn('text-sm text-muted-foreground/80')}>
						{lastEditedTime.format('YYYY년 MM월 DD일')}
					</time>
				</header>
				<TableOfContents toc={toc} />
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: Notion content requires HTML rendering */}
				{/* biome-ignore lint/a11y/useValidAriaValues: Static ID used for post styling */}
				<div
					className={cn('prose prose-lg dark:prose-invert max-w-none')}
					dangerouslySetInnerHTML={{ __html: content }}
					id="post"
				/>
				<Giscus />
			</article>
		</main>
	);
}

export default Post;
