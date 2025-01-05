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
  description: '안녕하세요. 프론트엔드 개발자 신원세입니다.',
  openGraph: {
    description: '안녕하세요. 프론트엔드 개발자 신원세입니다.',
    title: '개발자 신원세',
    type: 'website',
    url: 'https://wonse.dev',
  },
  title: '개발자 신원세',
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
