import { MENUS } from '../const';
import Link from 'next/link';

export const NavPC = () => {
  return (
    <nav className='hidden md:block'>
      <ul className='flex gap-6'>
        {MENUS.map(({ label, href }) => (
          <li key={label} className='flex flex-col items-center'>
            <Link href={href} className='group block p-1 text-xl text-white transition duration-75'>
              <span>{label}</span>
              <span className='block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full'></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
