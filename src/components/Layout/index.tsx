import { Header } from '../Header';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const Layout = ({ children }: Props) => {
  return (
    <div className='font-mono text-gray-700'>
      <Header />
      <main className='mb:pt-8 min-h-screen px-4 pt-4'>
        <div className='mx-auto max-w-6xl'>{children}</div>
      </main>
    </div>
  );
};
