import { cn } from '@/utils/cn';

type Props = {
	color?: string;
	label: string;
};

const TagChip = ({ color, label }: Props) => {
	return (
		<span
			className={cn(
				'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
				'border transition-all hover:scale-105',
			)}
			style={{
				backgroundColor: `${color}15`,
				borderColor: `${color}40`,
				color: color,
			}}
		>
			{label}
		</span>
	);
};

export default TagChip;
