import '@/styles/global.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';

import { Footer, Header, ThemeProvider } from '@/components';
import { cn } from '@/utils/cn';

const GmarketSans = localFont({
	src: [
		{
			path: '../asset/fonts/GmarketSansTTFLight.ttf',
			style: 'normal',
			weight: '300',
		},
		{
			path: '../asset/fonts/GmarketSansTTFMedium.ttf',
			style: 'normal',
			weight: '500',
		},
		{
			path: '../asset/fonts/GmarketSansTTFBold.ttf',
			style: 'normal',
			weight: '700',
		},
	],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://wonse.dev'),
	title: {
		default: '개발자 신원세',
		template: '%s | 개발자 신원세',
	},
	description: '개발자 신원세의 기술 블로그입니다.',
	keywords: [
		'프론트엔드',
		'개발자',
		'기술 블로그',
		'React',
		'TypeScript',
		'Next.js',
		'Web Development',
	],
	authors: [{ name: '신원세', url: 'https://wonse.dev' }],
	creator: '신원세',
	publisher: '신원세',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'ko_KR',
		url: 'https://wonse.dev',
		title: '개발자 신원세',
		description: '개발자 신원세의 기술 블로그입니다.',
		siteName: '개발자 신원세',
	},
	twitter: {
		card: 'summary_large_image',
		title: '개발자 신원세',
		description: '개발자 신원세의 기술 블로그입니다.',
		creator: '@wonse',
	},
};

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="ko" suppressHydrationWarning>
			<body className={cn(GmarketSans.className)}>
				<SpeedInsights />
				<Analytics />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					disableTransitionOnChange
					enableSystem
				>
					<div className={cn('mx-auto flex max-w-3xl flex-col justify-center')}>
						<Header />
						{children}
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
