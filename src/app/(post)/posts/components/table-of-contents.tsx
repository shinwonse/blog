'use client';

import type { MouseEvent } from 'react';

import type { TOCItem } from '@/types/notion';
import { cn } from '@/utils/cn';

type Props = {
	toc: TOCItem[];
};

const TableOfContents = ({ toc }: Props) => {
	if (toc.length === 0) {
		return null;
	}

	const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
		e.preventDefault();
		document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<nav
			className={cn('my-8 rounded-xl border border-border/50 bg-muted/30 p-6')}
		>
			<h2
				className={cn(
					'mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground',
				)}
			>
				목차
			</h2>
			<ul className={cn('space-y-2')}>
				{toc.map(({ id, tagName, text }) => (
					<li
						key={text + id}
						className={cn(
							'w-full',
							tagName === 'h2' && 'pl-0',
							tagName === 'h3' && 'pl-4',
						)}
					>
						<a
							className={cn(
								'block truncate text-sm transition-colors hover:text-foreground',
								'text-muted-foreground',
							)}
							href={`#${id}`}
							onClick={(e) => handleClick(e, id)}
						>
							{text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default TableOfContents;
