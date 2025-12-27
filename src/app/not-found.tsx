import Link from 'next/link';

import { cn } from '@/utils/cn';

function NotFound() {
	return (
		<div
			className={cn(
				'flex min-h-screen flex-col items-center justify-center bg-stone-900',
			)}
		>
			<main className={cn('flex flex-col items-center gap-8 text-center')}>
				<h1 className={cn('text-8xl font-bold text-stone-200')}>404</h1>
				<p className={cn('text-xl text-stone-400')}>
					페이지를 찾을 수 없습니다
				</p>
				<Link
					className={cn(
						'rounded-full bg-accent-400/10 px-6 py-3 text-sm font-medium text-accent-400 transition-colors hover:bg-accent-400/20',
					)}
					href="/"
				>
					홈으로 돌아가기
				</Link>
			</main>
		</div>
	);
}

export default NotFound;
