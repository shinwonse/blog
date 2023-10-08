'use client';

import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { BeatLoader } from 'react-spinners';

function Loading() {
  const { theme } = useTheme();

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center',
        'min-h-screen'
      )}
    >
      <BeatLoader color={theme === 'dark' ? '#ffffff' : '#000000'} />
    </div>
  );
}

export default Loading;
