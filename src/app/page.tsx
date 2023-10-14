import BookSection from '@/app/components/BookSection';
import IntroductionSection from '@/app/components/IntroductionSection';
import ProjectSection from '@/app/components/ProjectSection';
import RecentPostSection from '@/app/components/RecentPostSection';
import { cn } from '@/utils/cn';

export default function Home() {
  return (
    <main className={cn('mt-4 flex w-full flex-col items-center gap-12')}>
      <IntroductionSection />
      <RecentPostSection />
      <BookSection />
      <ProjectSection />
    </main>
  );
}
