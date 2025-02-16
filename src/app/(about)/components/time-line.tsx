import { cn } from '@/utils/cn';

import type { BlockContent } from './block';
import Block from './block';

type TimeLineProps = {
  className?: string;
  data: BlockContent[];
  title: string;
};

const TimeLine = ({ className, data, title }: TimeLineProps) => {
  return (
    <section className={cn('flex w-full flex-col items-center', className)}>
      <h2 className={cn('text-xl sm:text-3xl')}>{title}</h2>
      <div className={cn('flex w-full flex-col gap-4 py-8')}>
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
};

export default TimeLine;
