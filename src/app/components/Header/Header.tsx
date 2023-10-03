import Link from 'next/link';

import ThemeChanger from '@/app/components/ThemeChanger';

function Header() {
  return (
    <header className="flex flex-row items-center justify-between font-bold">
      <Link href="/">처음으로</Link>
      <div className="flex flex-row items-center gap-8">
        <Link href="/about">소개</Link>
        <ThemeChanger />
      </div>
    </header>
  );
}

export default Header;
