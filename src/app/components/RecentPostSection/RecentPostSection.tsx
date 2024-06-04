import Link from 'next/link';

import Card from '@/app/components/Card';
import { getAllPosts } from '@/services/post';
import { cn } from '@/utils/cn';

async function RecentPostSection() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <section className={cn('flex w-full flex-col gap-4 px-6')}>
      <h2 className={cn('w-full font-bold')}>최근 포스트</h2>
      {posts.map(({ description, slug, title }) => (
        <Link key={title} href={`posts${slug}`}>
          <Card description={description} title={title} />
        </Link>
      ))}
    </section>
  );
}

export default RecentPostSection;
