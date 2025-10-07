import Link from 'next/link';

import Card from '@/components/card';
import { getPaginatedPosts } from '@/services/post';
import { cn } from '@/utils/cn';

const Posts = async () => {
	const { posts } = await getPaginatedPosts();

	return (
		<main className={cn('flex w-full flex-col items-center py-12')}>
			<div
				className={cn('mb-12 flex w-full max-w-3xl flex-col gap-3 text-center')}
			>
				<h1
					className={cn(
						'text-4xl font-bold tracking-tight sm:text-5xl',
						'bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent',
					)}
				>
					Posts
				</h1>
				<p className={cn('text-lg text-muted-foreground')}>
					개발하며 배우고 느낀 것들을 기록합니다
				</p>
			</div>
			<ul
				className={cn(
					'grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3',
				)}
			>
				{posts.map((post) => (
					<li key={post.title}>
						<Link href={`posts${post.slug}`}>
							<Card description={post.description} title={post.title} />
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
};

export default Posts;
