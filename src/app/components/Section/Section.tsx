import clsx from 'clsx';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  layout?: 'flex' | 'grid';
  title?: string;
}

function Section({ children, className, layout, title }: SectionProps) {
  return (
    <section className={clsx(className)}>
      {title && (
        <h2 className={clsx('w-full', 'mb-4', 'font-bold')}>{title}</h2>
      )}
      <div
        className={clsx(
          layout === 'grid' &&
            'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3',
          layout === 'flex' &&
            'flex flex-col items-center justify-between gap-4 sm:flex-row'
        )}
      >
        {children}
      </div>
    </section>
  );
}

export default Section;
