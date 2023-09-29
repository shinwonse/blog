import clsx from 'clsx';

interface CardProps {
  className?: string;
  description: string;
  title: string;
}

function Card({ className, description, title }: CardProps) {
  return (
    <div
      className={clsx(
        className,
        'flex flex-col',
        'gap-2 p-8',
        'rounded-xl',
        'shadow-xl',
        'hover:scale-[1.01]',
        'bg-neutral-50',
        'dark:bg-neutral-800'
      )}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm opacity-75">{description}</p>
    </div>
  );
}

export default Card;
