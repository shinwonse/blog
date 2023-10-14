'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { cn } from '@/utils/cn';

function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, systemTheme, theme } = useTheme();

  const handleClickLightTheme = () => {
    setTheme('light');
    localStorage.setItem('theme', 'light');
  };

  const handleClickDarkTheme = () => {
    setTheme('dark');
    localStorage.setItem('theme', 'dark');
  };

  const handleClickSystemTheme = () => {
    setTheme(systemTheme ?? 'light');
    localStorage.removeItem('theme');
  };

  useEffect(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className="aspect-square w-12">
        <button className="w-12" type="button">
          <SunIcon height={24} width={24} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className={cn(
            'mt-2 flex h-full flex-col gap-2 rounded-xl border border-transparent bg-white p-4 text-gray-400 shadow-md dark:bg-neutral-800 dark:text-white'
          )}
        >
          <DropdownMenu.Item className="hover:opacity-75">
            <button onClick={handleClickLightTheme} type="button">
              Light
            </button>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <button onClick={handleClickDarkTheme} type="button">
              Dark
            </button>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <button onClick={handleClickSystemTheme} type="button">
              System
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default ThemeChanger;
