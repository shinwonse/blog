import IntroductionSection from '@/app/components/IntroductionSection';
import ProjectSection from '@/app/components/ProjectSection';
import RecentPostSection from '@/app/components/RecentPostSection';

export default function Home() {
  return (
    <main className="mt-4 flex min-h-screen flex-col items-center gap-12">
      <IntroductionSection />
      <RecentPostSection />
      <ProjectSection />
    </main>
  );
}
