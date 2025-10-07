import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

type SectionProps = {
	children: ReactNode;
	className?: string;
	layout?: 'flex' | 'grid';
	title?: string;
};

function Section({ children, className, layout, title }: SectionProps) {
	return (
		<section className={cn(className)}>
			{title && (
				<h2
					className={cn('mb-6 text-2xl font-bold tracking-tight sm:text-3xl')}
				>
					{title}
				</h2>
			)}
			<div
				className={cn(
					layout === 'grid' &&
						'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3',
					layout === 'flex' &&
						'flex flex-col items-center justify-between gap-8 sm:flex-row',
				)}
			>
				{children}
			</div>
		</section>
	);
}

export default Section;
