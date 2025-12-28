import { Icons } from '@/constants/portfolio';
import type { Experience } from '@/types/portfolio';
import { cn } from '@/utils/cn';

interface ExperienceCardProps {
	data: Experience;
}

const ExperienceCard = ({ data }: ExperienceCardProps) => {
	return (
		<div
			className={cn(
				'group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4',
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
<header
			className={cn(
				'z-10 mb-2 mt-1 whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-stone-500 sm:col-span-2',
			)}
			aria-label={data.period}
		>
			{data.period}
		</header>
			<div className={cn('z-10 sm:col-span-6')}>
				<h3 className={cn('font-medium leading-snug text-stone-200')}>
					<div>
						<a
							className={cn(
								'group/link inline-flex items-baseline text-base font-medium leading-tight text-stone-200',
								'hover:text-accent-400 focus-visible:text-accent-400',
							)}
							href={data.links?.[0]?.url || '#'}
							target={data.links ? '_blank' : '_self'}
							rel="noreferrer"
							aria-label={`${data.role} at ${data.company}`}
						>
							<span
								className={cn(
									'absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block',
								)}
							/>
							<span>
								{data.role} ·{' '}
								<span className={cn('inline-block')}>
									{data.company} <Icons.ArrowUpRight />
								</span>
							</span>
						</a>
					</div>
				</h3>
				<p className={cn('mt-2 text-sm leading-normal')}>{data.description}</p>
				<ul
					className={cn('mt-2 flex flex-wrap')}
					aria-label="Technologies used"
				>
					{data.skills.map((skill) => (
						<li key={skill} className={cn('mr-1.5 mt-2')}>
							<div
								className={cn(
									'flex items-center rounded-full bg-accent-400/10 px-3 py-1 text-xs font-medium leading-5 text-accent-400',
								)}
							>
								{skill}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ExperienceCard;

