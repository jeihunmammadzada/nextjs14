import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Demo Next App',
    default: 'Demo application',
  },
  description: 'Demo application of NextJS 14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
