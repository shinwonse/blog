import clsx from 'clsx';

export type BlockContent = {
  dateRange: string;
  department: string;
  description?: string;
  englishName: string;
  koreanName: string;
};

interface BlockProps {
  blockContent: BlockContent;
  className?: string;
}

function Block({ blockContent, className }: BlockProps) {
  const { dateRange, department, englishName, koreanName } = blockContent;

  return (
    <div className={clsx(className, 'w-full', 'flex flex-row', 'items-center')}>
      <div className={clsx('w-32 sm:w-48', 'text-xs sm:text-base')}>
        {dateRange}
      </div>
      <div className={clsx('flex flex-col')}>
        <p className={clsx('flex flex-row items-center')}>
          <span className={clsx('mr-1', 'text-sm font-medium sm:text-base')}>
            {englishName}
          </span>
          <span className={clsx('text-xs text-neutral-400 sm:text-sm')}>
            {koreanName}
          </span>
        </p>
        <p className={clsx('flex flex-row', 'text-sm text-neutral-400')}>
          <span>{department}</span>
        </p>
      </div>
    </div>
  );
}

export default Block;
