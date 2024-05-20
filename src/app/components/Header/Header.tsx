import Link from 'next/link';

import { cn } from '@/utils/cn';

import { ModeToggle } from '../ModeToggle/ModeToggle';

function Header() {
  return (
    <header
      className={cn('flex flex-row items-center justify-between font-bold')}
    >
      <Link href="/">처음으로</Link>
      <div className={cn('flex flex-row items-center gap-8')}>
        <Link href="/about">소개</Link>
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
