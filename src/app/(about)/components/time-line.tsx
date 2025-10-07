import { cn } from '@/utils/cn';

import type { BlockContent } from './block';
import Block from './block';

interface TimeLineProps {
	className?: string;
	data: BlockContent[];
	title: string;
}

function TimeLine({ className, data, title }: TimeLineProps) {
	return (
		<section className={cn('flex w-full flex-col', className)}>
			<h2 className={cn('mb-6 text-2xl font-bold tracking-tight sm:text-3xl')}>
				{title}
			</h2>
			<div className={cn('flex w-full flex-col gap-6')}>
				{data?.map((career) => {
					return (
						<Block
							key={career.koreanName}
							blockContent={career}
							className={cn('w-full')}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default TimeLine;
