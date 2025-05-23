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
		<div className={cn(className, 'flex w-full flex-row items-center')}>
			<div className={cn('w-32 text-xs sm:w-48 sm:text-base')}>{dateRange}</div>
			<div className={cn('flex flex-col')}>
				<span className={cn('mr-1 text-sm font-medium sm:text-base')}>
					{englishName}
				</span>
				<span className={cn('text-xs text-neutral-400 sm:text-sm')}>
					{koreanName}
				</span>
				<p className={cn('flex flex-row text-xs text-neutral-400 sm:text-sm')}>
					<span>{department}</span>
				</p>
			</div>
		</div>
	);
};

export default Block;
