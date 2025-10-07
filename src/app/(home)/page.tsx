import { cn } from '@/utils/cn';

import { IntroductionSection, RecentPostSection } from './components';

export default function Home() {
	return (
		<main className={cn('flex w-full flex-col items-center')}>
			<IntroductionSection />
			<RecentPostSection />
		</main>
	);
}
