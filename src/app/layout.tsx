import '@/styles/global.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';

import { ThemeProvider } from '@/components';
import { cn } from '@/utils/cn';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

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
	variable: '--font-gmarket',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://wonse.dev'),
	title: {
		default: 'Wonse Shin',
		template: '%s | Wonse Shin',
	},
	description: 'Wonse Shin\'s blog',
	keywords: [
		'프론트엔드',
		'Frontend Developer',
		'Blog',
		'React',
		'TypeScript',
		'Next.js',
	],
	authors: [{ name: 'Wonse Shin', url: 'https://wonse.dev' }],
	creator: 'Wonse Shin',
	publisher: 'Wonse Shin',
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
		title: 'Wonse Shin',
		description: 'Wonse Shin\'s blog',
		siteName: 'Wonse Shin',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Wonse Shin',
		description: 'Wonse Shin\'s blog',
		creator: '@wonse',
	},
};

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="ko" className={cn('scroll-smooth')} suppressHydrationWarning>
			<body className={cn(inter.variable, GmarketSans.variable, 'font-sans')}>
				<SpeedInsights />
				<Analytics />
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
					enableSystem
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
