import '../styles/globals.css';

import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Header from '@/app/components/Header';
import ThemeProvider from '@/app/components/ThemeProvider';

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
      <body className={clsx(GmarketSans.className)}>
        <ThemeProvider>
          <div
            className={clsx(
              'mx-auto flex flex-col justify-center',
              'max-w-3xl',
              'p-6'
            )}
          >
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
