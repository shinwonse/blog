import Link from 'next/link';

import Card from '@/components/card';
import { getAllPosts } from '@/services/post';
import { cn } from '@/utils/cn';

const RecentPostSection = async () => {
	const posts = (await getAllPosts()).slice(0, 3);

	return (
		<section className={cn('flex w-full flex-col gap-6 py-12')}>
			<div className={cn('flex flex-col gap-2')}>
				<h2 className={cn('text-2xl font-bold tracking-tight sm:text-3xl')}>
					최근 포스트
				</h2>
				<p className={cn('text-sm text-muted-foreground')}>
					최신 글을 확인해보세요
				</p>
			</div>
			<div
				className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3')}
			>
				{posts.map(({ description, slug, title }) => (
					<Link key={slug} href={`posts${slug}`}>
						<Card description={description} title={title} />
					</Link>
				))}
			</div>
		</section>
	);
};

export default RecentPostSection;
