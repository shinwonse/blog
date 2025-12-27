import Link from 'next/link';

import { Icons } from '@/constants/portfolio';
import { cn } from '@/utils/cn';

interface BlogPost {
	slug: string;
	title: string;
	description: string | null;
	category: { name: string; color: string }[];
	createdTime: string;
}

interface BlogListProps {
	posts: BlogPost[];
}

const BlogList = ({ posts }: BlogListProps) => {
	return (
		<section
			id="blog"
			className={cn(
				'mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24',
			)}
			aria-label="Blog posts"
		>
			<div
				className={cn(
					'sticky top-0 z-20 -mx-6 mb-8 w-screen bg-stone-900/75 px-6 py-5 backdrop-blur',
					'md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0',
				)}
			>
				<h2
					className={cn(
						'text-sm font-bold uppercase tracking-widest text-stone-200 lg:sr-only',
					)}
				>
					Blog
				</h2>
			</div>

			<div className={cn('grid grid-cols-1 gap-6 md:grid-cols-2')}>
				{posts.map((post, index) => {
					const isWide = index === 0;

					return (
						<article
							key={post.slug}
							className={cn(
								'group relative flex flex-col justify-end overflow-hidden rounded-2xl',
								'border border-stone-800/50 bg-stone-900 transition-all',
								'hover:scale-[1.01] hover:shadow-2xl hover:shadow-accent-500/20',
								isWide ? 'min-h-[300px] md:col-span-2' : 'min-h-[320px]',
							)}
						>
							{/* Gradient Background */}
							<div className={cn('absolute inset-0 z-0 h-full w-full')}>
								<div
									className={cn(
										'h-full w-full bg-gradient-to-br from-stone-800 to-stone-900',
										'opacity-60 transition-transform duration-700 group-hover:scale-105',
									)}
								/>
								<div
									className={cn(
										'absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-transparent',
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
												key={tag.name}
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
											href={`/posts${post.slug}`}
											className={cn('focus:outline-none')}
										>
											<span
												className={cn('absolute inset-0')}
												aria-hidden="true"
											/>
											<span
												className={cn(
													'bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent',
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
		</section>
	);
};

export default BlogList;

