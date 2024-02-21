import { cn } from '@/utils/cn';

interface CardProps {
  className?: string;
  description: string;
  title: string;
}

function Card({ className, description, title }: CardProps) {
  return (
    <div
      className={cn(
        'flex aspect-square flex-col justify-between gap-2 rounded-xl bg-neutral-50 p-6 shadow-xl hover:scale-[1.01] dark:bg-neutral-800',
        className
      )}
    >
      <h3 className={cn('line-clamp-4 text-lg font-bold')}>{title}</h3>
      <p className={cn('text-sm opacity-75')}>{description}</p>
    </div>
  );
}

export default Card;
