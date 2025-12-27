'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { NAV_ITEMS, PROFILE, SOCIALS } from '@/constants/portfolio';
import { cn } from '@/utils/cn';

interface SidebarProps {
	currentView: 'home' | 'blog';
	onViewChange: (view: 'home' | 'blog') => void;
}

const Sidebar = ({ currentView, onViewChange }: SidebarProps) => {
	const [activeSection, setActiveSection] = useState<string>('about');

	useEffect(() => {
		if (currentView === 'blog') {
			setActiveSection('blog');
			return;
		}

		const handleScroll = () => {
			const sections = NAV_ITEMS.filter((item) => !item.isPage)
				.map((item) => {
					const element = document.getElementById(item.id);
					return element
						? {
								id: item.id,
								offsetTop: element.offsetTop,
								offsetHeight: element.offsetHeight,
							}
						: null;
				})
				.filter(
					(
						section,
					): section is {
						id: string;
						offsetTop: number;
						offsetHeight: number;
					} => section !== null,
				);

			const SCROLL_OFFSET = 200;
			const scrollPosition = window.scrollY + SCROLL_OFFSET;

			for (const section of sections) {
				const top = section.offsetTop;
				const bottom = top + section.offsetHeight;

				if (scrollPosition >= top && scrollPosition < bottom) {
					setActiveSection(section.id);
					break;
				}
			}

			const BOTTOM_THRESHOLD = 50;
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - BOTTOM_THRESHOLD
			) {
				if (sections.length > 0) {
					setActiveSection(sections[sections.length - 1].id);
				}
			}
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [currentView]);

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		item: (typeof NAV_ITEMS)[0],
	) => {
		e.preventDefault();
		if (item.isPage) {
			if (item.id === 'blog') {
				onViewChange('blog');
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}
		} else {
			if (currentView !== 'home') {
				onViewChange('home');
				const RENDER_DELAY_MS = 100;
				setTimeout(() => {
					const element = document.getElementById(item.id);
					if (element) element.scrollIntoView({ behavior: 'smooth' });
				}, RENDER_DELAY_MS);
			} else {
				const element = document.getElementById(item.id);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				}
			}
		}
	};

	return (
		<header
			className={cn(
				'lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24',
			)}
		>
			<div>
				<div className={cn('mb-4 flex items-center gap-4')}>
					{PROFILE.avatar && (
						<div
							className={cn(
								'relative h-16 w-16 overflow-hidden rounded-full border-2 border-stone-700 shadow-xl shadow-accent-500/20',
							)}
						>
							<Image
								src={PROFILE.avatar}
								alt={PROFILE.name}
								fill
								className={cn(
									'object-cover opacity-90 transition-transform duration-500 hover:scale-110',
								)}
							/>
							<div
								className={cn(
									'absolute inset-0 bg-gradient-to-tr from-accent-500/20 to-transparent',
								)}
							/>
						</div>
					)}
				</div>

				<h1
					className={cn(
						'text-4xl font-bold tracking-tight text-stone-100 sm:text-5xl',
					)}
				>
					<Link
						href="/"
						onClick={(e) => {
							e.preventDefault();
							onViewChange('home');
						}}
					>
						{PROFILE.name}
					</Link>
				</h1>
				<h2
					className={cn(
						'mt-3 text-lg font-medium tracking-tight text-stone-100 sm:text-xl',
					)}
				>
					{PROFILE.title}
				</h2>
				<p className={cn('mt-4 max-w-xs leading-normal text-stone-400')}>
					{PROFILE.tagline}
				</p>

				<nav
					className={cn('nav hidden lg:block')}
					aria-label="In-page jump links"
				>
					<ul className={cn('mt-16 w-max')}>
						{NAV_ITEMS.map((item) => (
							<li key={item.id}>
								<a
									className={cn(
										'group flex items-center py-3',
										activeSection === item.id && 'active',
									)}
									href={item.isPage ? `/${item.id}` : `#${item.id}`}
									onClick={(e) => handleClick(e, item)}
								>
									<span
										className={cn(
											'nav-indicator mr-4 h-px w-8 bg-stone-600 transition-all group-hover:w-16 group-hover:bg-stone-200',
											activeSection === item.id && 'w-16 bg-stone-200',
										)}
									/>
									<span
										className={cn(
											'nav-text text-xs font-bold uppercase tracking-widest text-stone-500 group-hover:text-stone-200',
											activeSection === item.id && 'text-stone-200',
										)}
									>
										{item.label}
									</span>
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>

			<ul
				className={cn('ml-1 mt-8 flex items-center')}
				aria-label="Social media"
			>
				{SOCIALS.map((social) => (
					<li key={social.name} className={cn('mr-5 text-xs')}>
						<a
							className={cn('block hover:text-stone-100')}
							href={social.url}
							target="_blank"
							rel="noreferrer noopener"
							aria-label={`${social.name} (opens in a new tab)`}
							title={social.name}
						>
							<span className={cn('sr-only')}>{social.name}</span>
							{social.icon}
						</a>
					</li>
				))}
			</ul>
		</header>
	);
};

export default Sidebar;

