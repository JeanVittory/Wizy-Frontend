import { Open_Sans } from 'next/font/google';

export const openSansInit = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const openSans = openSansInit.className;
