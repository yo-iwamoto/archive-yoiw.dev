import { Header } from '@/components/Header';
import type { PropsWithChildren } from 'react';
import '@/styles/global.css';

type Props = PropsWithChildren;

export default function Layout({ children }: Props) {
  return (
    <html lang='ja'>
      <body className='font-mono text-gray-700'>
        <Header />
        <main className='min-h-screen px-4 pt-8'>
          <div className='mx-auto max-w-7xl'>{children}</div>
        </main>
      </body>
    </html>
  );
}
