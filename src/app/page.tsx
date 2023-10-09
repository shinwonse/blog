import clsx from 'clsx';

import BookSection from '@/app/components/BookSection';
import IntroductionSection from '@/app/components/IntroductionSection';
import ProjectSection from '@/app/components/ProjectSection';
import RecentPostSection from '@/app/components/RecentPostSection';

export default function Home() {
  return (
    <main className={clsx('flex flex-col items-center', 'mt-4 w-full gap-12')}>
      <IntroductionSection />
      <RecentPostSection />
      <BookSection />
      <ProjectSection />
    </main>
  );
}
