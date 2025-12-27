'use client';

import Link from 'next/link';

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { Icons } from '@/constants/portfolio';
import { cn } from '@/utils/cn';

import PortfolioWrapper from './portfolio-wrapper';

interface Category {
	id: string;
	name: string;
	color: string;
}

interface Post {
	slug: string;
	title: string;
	description: string | null;
	category: Category[];
	createdTime: string;
}

interface PostsClientProps {
	posts: Post[];
	currentPage: number;
	totalPages: number;
}

const PostsClient = ({ posts, currentPage, totalPages }: PostsClientProps) => {
	return (
		<PortfolioWrapper>
			<header className={cn('mb-16')}>
				<Link
					className={cn(
						'group/link inline-flex items-baseline text-sm font-medium text-stone-400 hover:text-accent-400',
					)}
					href="/"
				>
					← Back to Home
				</Link>
				<h1
					className={cn(
						'mt-8 text-4xl font-bold tracking-tight text-stone-100 sm:text-5xl',
					)}
				>
					Blog
				</h1>
				<p className={cn('mt-4 max-w-xl text-base text-stone-400')}>
					개발하며 배우고 느낀 것들을 기록합니다
				</p>
			</header>

			<main>
				<div className={cn('grid grid-cols-1 gap-6 md:grid-cols-2')}>
					{posts.map((post, index) => {
						const isWide = index === 0 && currentPage === 1;

						return (
							<article
								key={post.slug}
								className={cn(
									'group relative flex flex-col justify-end overflow-hidden rounded-2xl',
									'border border-stone-800/50 bg-stone-900 transition-all',
									'hover:scale-[1.01] hover:shadow-2xl hover:shadow-accent-500/20',
									isWide ? 'min-h-[300px] md:col-span-2' : 'min-h-[280px]',
								)}
							>
								<div className={cn('absolute inset-0 z-0 h-full w-full')}>
									<div
										className={cn(
											'h-full w-full bg-linear-to-br from-stone-800 via-stone-900 to-stone-950',
											'opacity-60 transition-transform duration-700 group-hover:scale-105',
										)}
									/>
									<div
										className={cn(
											'absolute inset-0 bg-linear-to-t from-stone-950 via-stone-900/80 to-transparent',
										)}
									/>
								</div>

								<div
									className={cn(
										'z-10 flex flex-col justify-between p-6 sm:p-8',
									)}
								>
									<header className={cn('mb-2')}>
										<div className={cn('mb-3 flex flex-wrap gap-2')}>
											{post.category.slice(0, 3).map((tag) => (
												<span
													key={tag.id}
													className={cn(
														'rounded-full bg-accent-500/20 px-2.5 py-0.5 text-xs font-semibold text-accent-300 backdrop-blur-sm',
													)}
												>
													{tag.name}
												</span>
											))}
										</div>
										<span
											className={cn(
												'mb-1 block text-xs font-semibold uppercase tracking-wide text-stone-400',
											)}
										>
											{post.createdTime}
										</span>
									</header>

									<div>
										<h3
											className={cn(
												'mb-3 text-xl font-bold leading-tight text-stone-100 sm:text-2xl',
											)}
										>
											<Link
												className={cn('focus:outline-none')}
												href={`/posts${post.slug}`}
											>
												<span
													aria-hidden="true"
													className={cn('absolute inset-0')}
												/>
												<span
													className={cn(
														'bg-linear-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent',
														'transition-all duration-300 group-hover:from-accent-200 group-hover:to-accent-500',
													)}
												>
													{post.title}
												</span>
											</Link>
										</h3>
										<p
											className={cn(
												'line-clamp-2 text-sm leading-relaxed text-stone-300/80',
											)}
										>
											{post.description}
										</p>
									</div>

									<div
										className={cn(
											'mt-4 flex translate-y-2 transform items-center text-sm font-medium text-accent-400 opacity-0',
											'transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
										)}
									>
										Read Article{' '}
										<span className={cn('ml-1')}>
											<Icons.ArrowUpRight />
										</span>
									</div>
								</div>
							</article>
						);
					})}
				</div>

				{totalPages > 1 && (
					<Pagination className={cn('mt-16')}>
						<PaginationContent>
							{currentPage > 1 && (
								<PaginationItem>
									<PaginationPrevious
										className={cn(
											'border-stone-700 bg-stone-800/50 text-stone-300 hover:bg-stone-700 hover:text-stone-100',
										)}
										href={`/posts?page=${currentPage - 1}`}
									/>
								</PaginationItem>
							)}

							{Array.from({ length: totalPages }, (_, i) => i + 1).map(
								(page) => {
									const showPage =
										page === 1 ||
										page === totalPages ||
										(page >= currentPage - 1 && page <= currentPage + 1);

									if (!showPage && page === currentPage - 2) {
										return (
											<PaginationItem key={page}>
												<span
													className={cn(
														'flex size-9 items-center justify-center text-stone-500',
													)}
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
													className={cn(
														'flex size-9 items-center justify-center text-stone-500',
													)}
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
												className={cn(
													'border-stone-700 bg-stone-800/50 text-stone-300 hover:bg-stone-700 hover:text-stone-100',
													currentPage === page &&
														'bg-accent-500/20 text-accent-400',
												)}
												href={`/posts?page=${page}`}
												isActive={currentPage === page}
											>
												{page}
											</PaginationLink>
										</PaginationItem>
									);
								},
							)}

							{currentPage < totalPages && (
								<PaginationItem>
									<PaginationNext
										className={cn(
											'border-stone-700 bg-stone-800/50 text-stone-300 hover:bg-stone-700 hover:text-stone-100',
										)}
										href={`/posts?page=${currentPage + 1}`}
									/>
								</PaginationItem>
							)}
						</PaginationContent>
					</Pagination>
				)}
			</main>
		</PortfolioWrapper>
	);
};

export default PostsClient;
