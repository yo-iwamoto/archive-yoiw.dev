import { cn } from '@/lib/cn';

type Props = {
  isOpen: boolean;
};

export const HamburgerIcon = ({ isOpen }: Props) => {
  return (
    <div
      aria-hidden='true'
      className='relative flex h-10 w-10 transform flex-col items-center justify-center overflow-hidden transition-all duration-500'
    >
      <div
        className={cn('-translate-y-5 transform overflow-hidden transition-all duration-150', {
          'translate-y-3': isOpen,
        })}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 animate-bounce text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
        </svg>
      </div>

      <div className='flex h-[20px] w-[20px] origin-center -translate-y-3 transform flex-col justify-between overflow-hidden transition-all duration-300'>
        <div
          className={cn('mb-1.5 h-[2px] w-7 origin-left transform bg-white transition-all duration-300', {
            'translate-y-6': isOpen,
          })}
        />
        <div
          className={cn('mb-1.5 h-[2px] w-7 transform rounded bg-white transition-all delay-75 duration-300', {
            'translate-y-6': isOpen,
          })}
        />
        <div
          className={cn('h-[2px] w-7 origin-left transform bg-white transition-all delay-100 duration-300', {
            'translate-y-6': isOpen,
          })}
        />
      </div>
    </div>
  );
};
