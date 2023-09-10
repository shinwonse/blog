'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <button onClick={() => setTheme('light')} type="button">
        Light Mode
      </button>
      <button onClick={() => setTheme('dark')} type="button">
        Dark Mode
      </button>
    </div>
  );
}

export default ThemeChanger;
