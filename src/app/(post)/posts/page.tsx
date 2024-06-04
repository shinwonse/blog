import Link from 'next/link';

import Card from '@/app/components/Card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
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
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" size="icon">
              Previous
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" size="icon">
              Next
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
};

export default Posts;
