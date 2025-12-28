'use client';

import { useState } from 'react';

import {
	EXPERIENCE,
	Icons,
	PROFILE,
	PROJECTS,
	WRITING,
} from '@/constants/portfolio';
import { cn } from '@/utils/cn';

import BlogList from './blog-list';
import ExperienceCard from './experience-card';
import MouseFlashlight from './mouse-flashlight';
import ProjectCard from './project-card';
import Sidebar from './sidebar';

interface BlogPost {
	slug: string;
	title: string;
	description: string | null;
	category: { name: string; color: string }[];
	createdTime: string;
}

interface PortfolioPageProps {
	posts: BlogPost[];
}

const PortfolioPage = ({ posts }: PortfolioPageProps) => {
	const [currentView, setCurrentView] = useState<'home' | 'blog'>('home');

	return (
		<div
			className={cn(
				'portfolio-theme relative min-h-screen bg-stone-900 leading-relaxed text-stone-400 antialiased',
			)}
		>
			{/* Mouse Flashlight Effect */}
			<MouseFlashlight />

			{/* Noise Overlay */}
			<div className={cn('noise-overlay')} />

			<div
				className={cn(
					'mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0',
				)}
			>
				<div className={cn('lg:flex lg:justify-between lg:gap-4')}>
					{/* Left Column (Sticky Sidebar) */}
					<Sidebar currentView={currentView} onViewChange={setCurrentView} />

					{/* Right Column (Scrollable Content) */}
					<main className={cn('pt-24 lg:w-[55%] lg:py-24')}>
						{currentView === 'home' && (
							<>
								{/* About Section */}
								<section
									id="about"
									className={cn(
										'mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24',
									)}
									aria-label="About me"
								>
									<div
										className={cn(
											'sticky top-0 z-20 -mx-6 mb-4 w-screen bg-stone-900/75 px-6 py-5 backdrop-blur',
											'md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0',
										)}
									>
										<h2
											className={cn(
												'text-sm font-bold uppercase tracking-widest text-stone-200 lg:sr-only',
											)}
										>
											About
										</h2>
									</div>
									<div
										className={cn(
											'whitespace-pre-line text-base text-stone-400',
										)}
									>
										<p className={cn('mb-4')}>{PROFILE.about}</p>
										<p>{PROFILE.aboutExtra}</p>
									</div>
								</section>

								{/* Experience Section */}
								<section
									id="experience"
									className={cn(
										'mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24',
									)}
									aria-label="Work experience"
								>
									<div
										className={cn(
											'sticky top-0 z-20 -mx-6 mb-4 w-screen bg-stone-900/75 px-6 py-5 backdrop-blur',
											'md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0',
										)}
									>
										<h2
											className={cn(
												'text-sm font-bold uppercase tracking-widest text-stone-200 lg:sr-only',
											)}
										>
											Experience
										</h2>
									</div>
									<ol className={cn('group/list')}>
										{EXPERIENCE.map((exp) => (
											<li key={exp.company} className={cn('mb-12')}>
												<ExperienceCard data={exp} />
											</li>
										))}
									</ol>
									{/* <div className={cn('mt-12')}>
										<a
											className={cn(
												'group/link inline-flex items-baseline text-base font-medium leading-tight text-stone-200',
												'hover:text-accent-400 focus-visible:text-accent-400',
											)}
											href="/about"
											rel="noreferrer"
										>
											<span>
												View Full Résumé <Icons.ArrowUpRight />
											</span>
										</a>
									</div> */}
								</section>

								{/* Projects Section */}
								<section
									id="projects"
									className={cn(
										'mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24',
									)}
									aria-label="Selected projects"
								>
									<div
										className={cn(
											'sticky top-0 z-20 -mx-6 mb-4 w-screen bg-stone-900/75 px-6 py-5 backdrop-blur',
											'md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0',
										)}
									>
										<h2
											className={cn(
												'text-sm font-bold uppercase tracking-widest text-stone-200 lg:sr-only',
											)}
										>
											Projects
										</h2>
									</div>
									<ul className={cn('group/list')}>
										{PROJECTS.map((project) => (
											<li key={project.title} className={cn('mb-12')}>
												<ProjectCard data={project} />
											</li>
										))}
									</ul>
								</section>

								{/* Writing / Activities Section */}
								<section
									id="writing"
									className={cn(
										'mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24',
									)}
									aria-label="Writing and Activities"
								>
									<div
										className={cn(
											'sticky top-0 z-20 -mx-6 mb-4 w-screen bg-stone-900/75 px-6 py-5 backdrop-blur',
											'md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0',
										)}
									>
										<h2
											className={cn(
												'text-sm font-bold uppercase tracking-widest text-stone-200 lg:sr-only',
											)}
										>
											Activity
										</h2>
									</div>
									<ul className={cn('group/list')}>
										{WRITING.map((item) => (
											<li key={item.title} className={cn('mb-12')}>
												<div
													className={cn(
														'group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4',
														'lg:hover:opacity-100! lg:group-hover/list:opacity-50',
													)}
												>
													<div
														className={cn(
															'absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none',
															'lg:-inset-x-6 lg:block lg:group-hover:bg-stone-800/50',
															'lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg',
														)}
													/>
													<div
														className={cn(
															'z-10 col-span-2 text-xs font-semibold uppercase tracking-wide text-stone-500 sm:col-span-2',
														)}
													>
														{item.year}
													</div>
													<div className={cn('z-10 col-span-6 sm:col-span-6')}>
														<h3
															className={cn(
																'font-medium leading-snug text-stone-200',
															)}
														>
															<span
																className={cn(
																	'group/link inline-flex items-baseline text-base font-medium leading-tight text-stone-200',
																	'hover:text-accent-400 focus-visible:text-accent-400',
																)}
															>
																<span
																	className={cn(
																		'absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block',
																	)}
																/>
																{item.title}
															</span>
														</h3>
														<p className={cn('mt-2 text-sm leading-normal')}>
															{item.description}
														</p>
													</div>
												</div>
											</li>
										))}
									</ul>
								</section>
							</>
						)}

						{currentView === 'blog' && <BlogList posts={posts} />}

						<footer
							className={cn('max-w-md pb-16 text-sm text-stone-500 sm:pb-0')}
						/>
					</main>
				</div>
			</div>
		</div>
	);
};

export default PortfolioPage;
