import { Icons } from '@/constants/portfolio';
import type { Project } from '@/types/portfolio';
import { cn } from '@/utils/cn';

interface ProjectCardProps {
	data: Project;
}

const ProjectCard = ({ data }: ProjectCardProps) => {
	return (
		<div
			className={cn(
				'group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4',
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
			<div className={cn('z-10 sm:order-2 sm:col-span-6')}>
				<h3>
					<a
						className={cn(
							'group/link inline-flex items-baseline text-base font-medium leading-tight text-stone-200',
							'hover:text-accent-400 focus-visible:text-accent-400',
						)}
						href={data.link || '#'}
						target="_blank"
						rel="noreferrer"
						aria-label={data.title}
					>
						<span
							className={cn(
								'absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block',
							)}
						/>
						<span>
							{data.title} <Icons.ArrowUpRight />
						</span>
					</a>
				</h3>
				<div className={cn('mt-2 text-sm leading-normal text-stone-400')}>
					<ul className={cn('list-disc space-y-1 pl-4')}>
						{data.description.map((point, idx) => (
							<li key={idx}>{point}</li>
						))}
					</ul>
				</div>
				<ul
					className={cn('mt-2 flex flex-wrap')}
					aria-label="Technologies used"
				>
					{data.technologies.map((tech) => (
						<li key={tech} className={cn('mr-1.5 mt-2')}>
							<div
								className={cn(
									'flex items-center rounded-full bg-accent-400/10 px-3 py-1 text-xs font-medium leading-5 text-accent-400',
								)}
							>
								{tech}
							</div>
						</li>
					))}
				</ul>
			</div>
		<div
			className={cn(
				'z-10 mt-1 text-xs font-semibold uppercase tracking-wide text-stone-500 sm:order-1 sm:col-span-2',
			)}
		>
			<p className="whitespace-nowrap">{data.period}</p>
				<p className={cn('mt-1 font-normal text-stone-400')}>
					{data.organization}
				</p>
			</div>
		</div>
	);
};

export default ProjectCard;

