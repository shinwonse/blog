import Link from 'next/link';

import { cn } from '@/utils/cn';

import ModeToggle from '../mode-toggle';

const Header = () => {
	return (
		<header
			className={cn(
				'sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-glass',
				'supports-[backdrop-filter]:bg-background/60',
			)}
		>
			<div
				className={cn(
					'mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8',
				)}
			>
				<Link
					href="/"
					className={cn(
						'text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60',
					)}
					aria-label="홈으로 이동"
				>
					HOME
				</Link>
				<nav className={cn('flex flex-row items-center gap-6')}>
					<Link
						href="/posts"
						className={cn(
							'text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60',
						)}
					>
						Posts
					</Link>
					<Link
						href="/about"
						className={cn(
							'text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60',
						)}
					>
						About
					</Link>
					<ModeToggle />
				</nav>
			</div>
		</header>
	);
};

export default Header;
