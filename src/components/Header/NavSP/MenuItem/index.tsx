import Link from 'next/link';

type Props = {
  label: string;
  href: string;
};

export const MenuItem = ({ label, href }: Props) => {
  return (
    <Link href={href} className='block px-4 py-5'>
      {label}
    </Link>
  );
};
