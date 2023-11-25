import { getPost, getPosts } from '@/services/post';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return (await getPosts()).map(({ slug }) => ({ slug }));
}

async function Post({ params: { slug } }: Props) {
  const { content } = await Promise.resolve(getPost(slug));

  return <div dangerouslySetInnerHTML={{ __html: content }} id="post" />;
}

export default Post;
