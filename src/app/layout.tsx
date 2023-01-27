import { Header } from '@/components/Header';
import type { PropsWithChildren } from 'react';
import '@/styles/global.css';

type Props = PropsWithChildren;

export default function Layout({ children }: Props) {
  return (
    <html lang='ja'>
      <body className='font-mono text-gray-800'>
        <Header />
        <main className='mx-auto min-h-screen max-w-7xl pt-8'>{children}</main>
      </body>
    </html>
  );
}
