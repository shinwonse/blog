import type { Metadata } from 'next';
import Link from 'next/link';

import { getAllPosts, getPost } from '@/services/post';
import { cn } from '@/utils/cn';
import { extractCoverImageInfo } from '@/utils/extractCoverImageInfo';

import { Giscus, TableOfContents } from '../components';
import PortfolioWrapper from '../components/portfolio-wrapper';

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
		<PortfolioWrapper>
			<main className={cn('flex w-full flex-col items-center')}>
				<article className={cn('w-full max-w-3xl')}>
					<Link
						className={cn(
							'group/link mb-8 inline-flex items-baseline text-sm font-medium text-stone-400 hover:text-accent-400',
						)}
						href="/posts"
					>
						← Back to Posts
					</Link>
					<header
						className={cn(
							'mb-12 flex flex-col gap-6 border-b border-stone-700/40 pb-8',
						)}
					>
						<div className={cn('flex flex-row flex-wrap gap-2')}>
							{category.map((item: Category) => (
								<span
									key={item.id}
									className={cn(
										'rounded-full bg-accent-500/20 px-3 py-1 text-xs font-semibold text-accent-300',
									)}
								>
									{item.name}
								</span>
							))}
						</div>
						<h1
							className={cn(
								'text-3xl font-bold leading-tight tracking-tight text-balance text-stone-100 sm:text-4xl lg:text-5xl',
							)}
						>
							{title}
						</h1>
						<p className={cn('text-lg leading-relaxed text-stone-400')}>
							{description}
						</p>
						<time className={cn('text-sm text-stone-500')}>
							{lastEditedTime.format('YYYY년 MM월 DD일')}
						</time>
					</header>
					<TableOfContents toc={toc} />
					{/* biome-ignore lint/security/noDangerouslySetInnerHtml: Notion content requires HTML rendering */}
					{/* biome-ignore lint/a11y/useValidAriaValues: Static ID used for post styling */}
					<div
						className={cn(
							'prose prose-lg prose-invert max-w-none',
							'prose-headings:text-stone-200 prose-p:text-stone-400 prose-a:text-accent-400 prose-strong:text-stone-200',
							'prose-code:text-accent-300 prose-pre:bg-stone-800/50 prose-pre:border prose-pre:border-stone-700/50',
						)}
						dangerouslySetInnerHTML={{ __html: content }}
						id="post"
					/>
					<Giscus />
				</article>
			</main>
		</PortfolioWrapper>
	);
}

export default Post;
