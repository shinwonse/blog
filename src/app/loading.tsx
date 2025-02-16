'use client';

import { cn } from '@/utils/cn';
import { useTheme } from 'next-themes';
import { BeatLoader } from 'react-spinners';

function Loading() {
  const { theme } = useTheme();

  return (
    <div
      className={cn('flex min-h-screen flex-col items-center justify-center')}
    >
      <BeatLoader color={theme === 'dark' ? '#ffffff' : '#000000'} />
    </div>
  );
}

export default Loading;
