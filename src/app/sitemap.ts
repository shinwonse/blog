import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// 기본 URL
	const baseUrl = 'https://wonse.dev';

	// 정적 라우트
	const staticRoutes = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	] as const;

	// TODO: 블로그 포스트 URL들을 동적으로 가져와서 추가
	// const posts = await getPosts();
	// const postRoutes = posts.map((post) => ({
	//   url: `${baseUrl}/post/${post.slug}`,
	//   lastModified: new Date(post.date),
	//   changeFrequency: 'weekly',
	//   priority: 0.6,
	// }));

	return [...staticRoutes];
}
