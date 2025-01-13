'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
'next-themes';

export function ThemeProvider({ children, ...props }) {
  return <NextThemeProvider { ...props }>{children}</NextThemeProvider>;
}