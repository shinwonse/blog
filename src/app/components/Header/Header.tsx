import Link from 'next/link';

import ThemeChanger from '@/app/components/ThemeChanger';

function Header() {
  return (
    <header className="flex flex-row items-center justify-between p-2">
      <Link href="/">처음으로</Link>
      <div className="flex flex-row items-center gap-8">
        <Link href="/blog">블로그</Link>
        <Link href="/about">소개</Link>
        <ThemeChanger />
      </div>
    </header>
  );
}

export default Header;
