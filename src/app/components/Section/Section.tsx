import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

interface SectionProps {
  children: ReactNode;
  className?: string;
  layout?: 'flex' | 'grid';
  title?: string;
}

function Section({ children, className, layout, title }: SectionProps) {
  return (
    <section className={cn(className)}>
      {title && <h2 className={cn('mb-4 w-full font-bold')}>{title}</h2>}
      <div
        className={cn(
          layout === 'grid' &&
            'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3',
          layout === 'flex' &&
            'flex flex-col items-center justify-between gap-4 sm:flex-row',
        )}
      >
        {children}
      </div>
    </section>
  );
}

export default Section;
