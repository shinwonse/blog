import { cn } from '@/utils/cn';

function Footer() {
	return (
		<footer
			className={cn('mt-auto border-t border-border/40 bg-background/50')}
		>
			<div
				className={cn(
					'mx-auto flex w-full max-w-7xl flex-col items-center gap-2 px-4 py-8 sm:px-6 lg:px-8',
				)}
			>
				<span className={cn('text-sm text-muted-foreground')}>
					© {new Date().getFullYear()} Published by Wonse
				</span>
				<p className={cn('text-xs text-muted-foreground/70')}>
					평생 재미있게 개발하고 싶습니다
				</p>
			</div>
		</footer>
	);
}

export default Footer;
