import { cn } from '@/lib/cn';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  anchor: string;
  accessibleName: string;
  as: 'h1' | 'h2' | 'h3' | 'h4';
}>;

export const Heading = ({ anchor, accessibleName, as: As, children }: Props) => {
  return (
    <div className='group relative'>
      <Link href={{ hash: anchor }}>
        <As
          id={anchor}
          className={cn('font-bold', {
            'py-2 text-4xl': As === 'h1',
            'py-1.5 text-3xl': As === 'h2',
            'py-1 text-2xl': As === 'h3',
            'py-0.5 text-xl': As === 'h4',
          })}
        >
          <span className='sr-only'>{accessibleName}</span>
          <span aria-hidden='true'>{children}</span>
        </As>
      </Link>
      <span
        aria-hidden='true'
        className={cn('absolute hidden text-gray-500 group-hover:inline', {
          'top-2 -left-6 text-3xl': As === 'h1',
          'top-1.5 -left-5 text-2xl': As === 'h2',
          'top-1 -left-4 text-xl': As === 'h3',
          'top-0.5 -left-3.5 text-lg': As === 'h4',
        })}
      >
        #
      </span>
    </div>
  );
};
