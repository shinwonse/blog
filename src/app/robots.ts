import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/private/', '/admin/'],
		},
		sitemap: 'https://wonse.dev/sitemap.xml',
	};
}
