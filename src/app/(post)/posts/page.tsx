import { getPaginatedPosts } from '@/services/post';

import PostsClient from './components/posts-client';

type SearchParams = Promise<{ page?: string }>;

const Posts = async ({ searchParams }: { searchParams: SearchParams }) => {
	const params = await searchParams;
	const currentPage = Number(params.page) || 1;
	const { posts, totalPages } = await getPaginatedPosts(currentPage);

	const formattedPosts = posts.map((post) => ({
		slug: post.slug,
		title: post.title,
		description: post.description,
		category: post.category,
		createdTime: post.createdTime.format('YYYY-MM-DD'),
	}));

	return (
		<PostsClient
			posts={formattedPosts}
			currentPage={currentPage}
			totalPages={totalPages}
		/>
	);
};

export default Posts;
