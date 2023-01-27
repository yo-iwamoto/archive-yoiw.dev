'use client';

import { HamburgerIcon } from './HamburgerIcon';
import { MenuItem } from './MenuItem';
import { MENUS } from '../const';
import { cn } from '@/lib/cn';
import { useState } from 'react';

export const NavSp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onClickMenuButton = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className='md:hidden'>
      <button type='button' aria-label='メニューを開く' onClick={onClickMenuButton}>
        <HamburgerIcon isOpen={isMenuOpen} />
      </button>

      <nav
        className={cn(
          'absolute top-14 right-0 h-0 w-full overflow-hidden bg-slate-700 text-white shadow-xl transition-all',
          {
            'h-[128px]': isMenuOpen,
          }
        )}
      >
        <ul>
          {MENUS.map(({ label, href }) => (
            <li key={label}>
              <MenuItem label={label} href={href} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
