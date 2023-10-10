import { ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

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
      className={clsx(
        className,
        'flex flex-col',
        'gap-2',
        'rounded-xl',
        'shadow-xl',
        'hover:scale-[1.01]',
        'bg-neutral-50',
        'dark:bg-neutral-800'
      )}
    >
      <div className={clsx('relative', 'aspect-square')}>
        <Image
          alt={title}
          className={clsx('rounded-t-xl')}
          fill
          src={Thumbnails.술로그}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={clsx('flex flex-col', 'gap-2 p-8')}>
        <div className={clsx('flex flex-row items-center', 'gap-2')}>
          <h3 className="text-xl font-bold">{title}</h3>
          <div className={clsx('flex flex-row', 'gap-1')}>
            <Link href={githubUrl} target="_blank">
              <GitHubLogoIcon />
            </Link>
            <Link href={serviceUrl} target="_blank">
              <ExternalLinkIcon />
            </Link>
          </div>
        </div>
        <p className="text-sm opacity-75">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
