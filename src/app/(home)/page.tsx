import { PortfolioPage } from '@/components/portfolio';
import { getAllPosts } from '@/services/post';

export default async function Home() {
	const posts = await getAllPosts();

	const formattedPosts = posts.slice(0, 5).map((post) => ({
		slug: post.slug,
		title: post.title,
		description: post.description,
		category: post.category,
		createdTime: post.createdTime.format('YYYY-MM-DD'),
	}));

	return <PortfolioPage posts={formattedPosts} />;
}
