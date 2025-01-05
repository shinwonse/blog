import type { Metadata } from 'next';

import { getAllPosts, getPost } from '@/services/post';
import { cn } from '@/utils/cn';
import { extractCoverImageInfo } from '@/utils/extractCoverImageInfo';

import { TableOfContents, TagChip } from '../components';

type Category = {
  color: string;
  id: string;
  name: string;
};

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;

  const { content, description, lastEditedTime, title } = await Promise.resolve(getPost(slug));
  const { alt = '', src = '' } = extractCoverImageInfo(content);

  return {
    authors: {
      name: 'Wonse Shin',
      url: 'https://github.com/shinwonse',
    },
    description,
    openGraph: {
      authors: 'Wonse Shin',
      description,
      images: [{ alt, url: src }],
      publishedTime: lastEditedTime.format('YYYY-MM-DD'),
      title,
    },
    title,
  };
}

export async function generateStaticParams() {
  return (await getAllPosts()).map(({ slug }) => ({ slug }));
}

async function Post({ params }: { params: Params }) {
  const { slug } = await params;

  const { category, content, description, lastEditedTime, title, toc } = await Promise.resolve(
    getPost(slug),
  );

  return (
    <main className={cn('mb-4 flex w-full flex-col gap-4 px-6 py-2')}>
      <div className={cn('border-b')}>
        <div className={cn('mb-4 flex flex-row gap-1')}>
          {category.map((item: Category) => (
            <TagChip key={item.id} color={item.color} label={item.name} />
          ))}
        </div>
        <h1 className={cn('mb-1 text-2xl')}>{title}</h1>
        <p className={cn('mb-4 text-neutral-400')}>{description}</p>
        <p className={cn('text-neutral-400')}>{lastEditedTime.format('YYYY-MM-DD')}</p>
      </div>
      <TableOfContents toc={toc} />
      <div dangerouslySetInnerHTML={{ __html: content }} id="post" />
    </main>
  );
}

export default Post;
