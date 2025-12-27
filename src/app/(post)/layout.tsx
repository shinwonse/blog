import type { ReactNode } from 'react';

import { Footer, Header } from '@/components';
import { cn } from '@/utils/cn';

const PostLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={cn('relative flex min-h-screen flex-col')}>
			<Header />
			<div
				className={cn('mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8')}
			>
				{children}
			</div>
			<Footer />
		</div>
	);
};

export default PostLayout;

