import Image from 'next/image';

import Section from '@/components/section';
import { cn } from '@/utils/cn';

const IntroductionSection = () => {
	return (
		<Section className={cn('w-full py-16 sm:py-24')} layout="flex">
			<div className={cn('order-1 flex flex-col gap-4 sm:-order-1 sm:mt-0')}>
				<h1
					className={cn(
						'text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl',
						'bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent',
					)}
				>
					신원세입니다
				</h1>
				<p className={cn('text-lg text-muted-foreground sm:text-xl')}>
					평생 재미있게 개발하고 싶습니다
				</p>
			</div>
			<div className={cn('relative')}>
				<div
					className={cn(
						'absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl',
						'animate-pulse',
					)}
				/>
				<Image
					alt="profile"
					className={cn('relative rounded-full ring-2 ring-border/50')}
					height={192}
					src="/profile.png"
					unoptimized
					width={192}
				/>
			</div>
		</Section>
	);
};

export default IntroductionSection;
