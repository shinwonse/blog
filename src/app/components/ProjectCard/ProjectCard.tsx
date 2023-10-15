import { ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/utils/cn';

const Thumbnails = {
  술로그: '/sullog.png',
} as const;

interface ProjectCardProps {
  className?: string;
  description: string;
  githubUrl: string;
  serviceUrl: string;
  title: string;
}

function ProjectCard({
  className,
  description,
  githubUrl,
  serviceUrl,
  title,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-xl bg-neutral-50 shadow-xl hover:scale-[1.01] dark:bg-neutral-800',
        className
      )}
    >
      <div className={cn('relative aspect-square')}>
        <Image
          alt={title}
          className={cn('rounded-t-xl')}
          fill
          src={Thumbnails.술로그}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={cn('flex flex-col gap-2 p-8')}>
        <div className={cn('flex flex-row items-center gap-2')}>
          <h3 className={cn('break-keep text-sm font-bold sm:text-xl')}>
            {title}
          </h3>
          <div className={cn('flex flex-row gap-1')}>
            <Link href={githubUrl} target="_blank">
              <GitHubLogoIcon />
            </Link>
            <Link href={serviceUrl} target="_blank">
              <ExternalLinkIcon />
            </Link>
          </div>
        </div>
        <p className={cn('text-xs opacity-75 sm:text-sm')}>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
