import Link from 'next/link';

import Card from '@/app/components/Card';
import { getPaginatedPosts } from '@/services/post';
import { cn } from '@/utils/cn';

const Posts = async () => {
  const { posts } = await getPaginatedPosts();

  return (
    <main className={cn('flex w-full flex-col items-center px-6')}>
      <h1 className={cn('mb-8 text-3xl font-bold')}>Posts</h1>
      <ul className={cn('flex w-full flex-col gap-4')}>
        {posts.map((post) => (
          <li key={post.title}>
            <Link href={`posts${post.slug}`}>
              <Card description={post.description} title={post.title} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Posts;
