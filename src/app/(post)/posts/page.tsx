import Link from 'next/link';

import Card from '@/components/card';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { getPaginatedPosts } from '@/services/post';
import { cn } from '@/utils/cn';

type SearchParams = Promise<{ page?: string }>;

const Posts = async ({ searchParams }: { searchParams: SearchParams }) => {
	const params = await searchParams;
	const currentPage = Number(params.page) || 1;
	const { posts, totalPages } = await getPaginatedPosts(currentPage);

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

			{totalPages > 1 && (
				<Pagination className={cn('mt-12')}>
					<PaginationContent>
						{currentPage > 1 && (
							<PaginationItem>
								<PaginationPrevious href={`/posts?page=${currentPage - 1}`} />
							</PaginationItem>
						)}

						{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
							const showPage =
								page === 1 ||
								page === totalPages ||
								(page >= currentPage - 1 && page <= currentPage + 1);

							if (!showPage && page === currentPage - 2) {
								return (
									<PaginationItem key={page}>
										<span
											className={cn('flex size-9 items-center justify-center')}
										>
											...
										</span>
									</PaginationItem>
								);
							}

							if (!showPage && page === currentPage + 2) {
								return (
									<PaginationItem key={page}>
										<span
											className={cn('flex size-9 items-center justify-center')}
										>
											...
										</span>
									</PaginationItem>
								);
							}

							if (!showPage) {
								return null;
							}

							return (
								<PaginationItem key={page}>
									<PaginationLink
										href={`/posts?page=${page}`}
										isActive={currentPage === page}
									>
										{page}
									</PaginationLink>
								</PaginationItem>
							);
						})}

						{currentPage < totalPages && (
							<PaginationItem>
								<PaginationNext href={`/posts?page=${currentPage + 1}`} />
							</PaginationItem>
						)}
					</PaginationContent>
				</Pagination>
			)}
		</main>
	);
};

export default Posts;
