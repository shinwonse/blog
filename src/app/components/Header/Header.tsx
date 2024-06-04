import Link from 'next/link';

import { cn } from '@/utils/cn';

import { ModeToggle } from '../ModeToggle/ModeToggle';

function Header() {
  return (
    <header
      className={cn('flex flex-row items-center justify-between p-6 font-bold')}
    >
      <Link href="/">Home</Link>
      <div className={cn('flex flex-row items-center gap-8')}>
        <Link href="/posts">Posts</Link>
        <Link href="/about">About</Link>
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
