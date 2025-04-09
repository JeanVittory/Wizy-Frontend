import type { Metadata } from 'next';
import { Provider } from '@/components/ui/provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wizybot AI',
  description: 'Powered by AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
