import Link from 'next/link';

export const Header = () => {
  return (
    <header className='sticky top-0 z-10 bg-slate-700 py-3 px-4 md:py-4'>
      <div className='mx-auto flex max-w-6xl items-center justify-between'>
        <Link href='/' className='text-xl font-bold text-white md:text-2xl'>
          yoiw.dev
        </Link>
      </div>
    </header>
  );
};
