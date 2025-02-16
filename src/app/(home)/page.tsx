import { cn } from '@/utils/cn';

import {
  BookSection,
  IntroductionSection,
  ProjectSection,
  RecentPostSection,
} from './components';

export default function Home() {
  return (
    <main className={cn('mt-4 flex w-full flex-col items-center gap-12')}>
      <IntroductionSection />
      <RecentPostSection />
      <ProjectSection />
      <BookSection />
    </main>
  );
}
