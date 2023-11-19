import '@/styles/global.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import ThemeProvider from '@/app/components/ThemeProvider';
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
  title: '개발자 신원세',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={cn(GmarketSans.className)}>
        <ThemeProvider>
          <div
            className={cn(
              'mx-auto flex max-w-3xl flex-col justify-center p-6 pb-0'
            )}
          >
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
