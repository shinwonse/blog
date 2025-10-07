import { cn } from '@/utils/cn';

export interface BlockContent {
	dateRange: string;
	department: string;
	description?: string;
	englishName: string;
	koreanName: string;
}

type BlockProps = {
	blockContent: BlockContent;
	className?: string;
};

const Block = ({ blockContent, className }: BlockProps) => {
	const { dateRange, department, englishName, koreanName } = blockContent;

	return (
		<div
			className={cn(
				'group flex w-full flex-col gap-3 rounded-xl border border-border/50 bg-card p-5 transition-all duration-300',
				'hover:border-border hover:shadow-md hover:shadow-black/5 sm:flex-row sm:items-center sm:gap-6',
				'dark:hover:shadow-white/5',
				className,
			)}
		>
			<div
				className={cn(
					'min-w-fit text-sm font-medium text-muted-foreground sm:w-40 sm:text-base',
				)}
			>
				{dateRange}
			</div>
			<div className={cn('flex flex-1 flex-col gap-1')}>
				<span
					className={cn(
						'text-base font-semibold transition-colors group-hover:text-foreground sm:text-lg',
					)}
				>
					{englishName}
				</span>
				<span className={cn('text-sm text-muted-foreground')}>
					{koreanName}
				</span>
				<p className={cn('text-sm text-muted-foreground/80')}>{department}</p>
			</div>
		</div>
	);
};

export default Block;
