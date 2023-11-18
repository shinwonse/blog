import Image from 'next/image';

import { cn } from '@/utils/cn';

interface BookCardProps {
  author: string;
  className?: string;
  thumbnail: string;
  title: string;
}

function BookCard({ author, className, thumbnail, title }: BookCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-xl bg-neutral-50 shadow-xl hover:scale-[1.01] dark:bg-neutral-800',
        className,
      )}
    >
      <div className={cn('relative aspect-square')}>
        <Image
          alt={title}
          className={cn('rounded-t-xl bg-white')}
          fill
          src={thumbnail}
          style={{ objectFit: 'cover' }}
          unoptimized
        />
      </div>
      <div className={cn('flex flex-col gap-2 p-8')}>
        <div className={cn('flex flex-row items-center gap-2')}>
          <h3 className={cn('break-keep text-sm font-bold sm:text-xl')}>
            {title}
          </h3>
        </div>
        <p className={cn('text-sm opacity-75 sm:text-base')}>{author}</p>
      </div>
    </div>
  );
}

export default BookCard;
