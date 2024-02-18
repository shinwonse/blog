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
        'flex flex-col gap-2 rounded-xl bg-neutral-50 p-6 shadow-xl hover:scale-[1.01] dark:bg-neutral-800',
        className
      )}
    >
      <h3 className={cn('text-xl font-bold')}>{title}</h3>
      <p className={cn('text-sm opacity-75')}>{description}</p>
    </div>
  );
}

export default Card;
