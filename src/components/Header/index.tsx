import { NavSp } from './NavSP';
import { NavPC } from './NavPc';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='sticky top-0 bg-slate-700 py-2 px-4 md:py-4 md:px-12'>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        <Link href='/' className='text-xl font-bold text-white md:text-3xl'>
          yoiw.dev
        </Link>

        <NavSp />
        <NavPC />
      </div>
    </header>
  );
};
