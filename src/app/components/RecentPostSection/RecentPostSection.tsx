import clsx from 'clsx';
import Link from 'next/link';

import Card from '@/app/components/Card';
import Section from '@/app/components/Section';
import { getPosts } from '@/services/notion';

async function RecentPostSection() {
  const posts = await Promise.resolve(getPosts());

  return (
    <Section className={clsx('w-full')} layout="grid" title="최근 포스트">
      {posts.map(({ description, slug, title }) => (
        <Link key={title} href={`posts${slug}`}>
          <Card description={description} title={title} />
        </Link>
      ))}
    </Section>
  );
}

export default RecentPostSection;
