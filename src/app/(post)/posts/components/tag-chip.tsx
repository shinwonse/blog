import { cn } from '@/utils/cn';

type Props = {
  color?: string;
  label: string;
};

const TagChip = ({ color, label }: Props) => {
  return (
    <div
      className={cn('rounded p-1.5 text-xs text-neutral-50')}
      style={{ backgroundColor: color }}
    >
      {label}
    </div>
  );
};

export default TagChip;
