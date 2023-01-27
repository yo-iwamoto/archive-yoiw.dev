import type { PropsWithChildren } from 'react';
import '@/styles/global.css';

type Props = PropsWithChildren;

export default function Layout({ children }: Props) {
  return (
    <html lang='ja'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
