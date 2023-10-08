import clsx from 'clsx';

import Block from '@/app/components/TimeLine/Block';
import { BlockContent } from '@/app/components/TimeLine/Block/Block';

interface TimeLineProps {
  className?: string;
  data: BlockContent[];
  title: string;
}

function TimeLine({ className, data, title }: TimeLineProps) {
  return (
    <section
      className={clsx(className, 'w-full', 'flex flex-col items-center')}
    >
      <h2 className={clsx('text-3xl')}>{title}</h2>
      <div className={clsx('w-full', 'py-8', 'flex flex-col gap-4')}>
        {data?.map((career) => {
          return (
            <Block
              key={career.koreanName}
              blockContent={career}
              className={clsx('w-full')}
            />
          );
        })}
      </div>
    </section>
  );
}

export default TimeLine;
