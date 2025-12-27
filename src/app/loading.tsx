'use client';

import { cn } from '@/utils/cn';
import { BeatLoader } from 'react-spinners';

function Loading() {
	return (
		<div
			className={cn(
				'flex min-h-screen flex-col items-center justify-center bg-stone-900',
			)}
		>
			<BeatLoader color="#ff7043" />
		</div>
	);
}

export default Loading;
