import { cn } from '@/utils/cn';

interface CardProps {
	className?: string;
	description: string;
	title: string;
}

function Card({ className, description, title }: CardProps) {
	return (
		<div
			className={cn(
				'group relative flex h-[180px] w-full flex-col justify-between gap-3 overflow-hidden rounded-2xl',
				'border border-border/50 bg-card p-6 transition-all duration-300',
				'hover:border-border hover:shadow-lg hover:shadow-black/5',
				'dark:hover:shadow-white/5',
				className,
			)}
		>
			<div className={cn('flex flex-col gap-3')}>
				<h3
					className={cn(
						'line-clamp-2 text-lg font-semibold leading-snug text-balance',
						'transition-colors group-hover:text-foreground',
					)}
				>
					{title}
				</h3>
				<p
					className={cn(
						'line-clamp-2 text-sm leading-relaxed text-muted-foreground',
					)}
				>
					{description}
				</p>
			</div>
			<div
				className={cn(
					'absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0',
					'transition-opacity duration-300 group-hover:opacity-100',
				)}
			/>
		</div>
	);
}

export default Card;
