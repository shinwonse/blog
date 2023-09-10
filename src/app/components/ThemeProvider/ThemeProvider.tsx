'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <NextThemesProvider>{children}</NextThemesProvider>;
}

export default ThemeProvider;
