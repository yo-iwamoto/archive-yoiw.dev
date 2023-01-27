import { Blogs } from './components/Blogs';

export const TopPage = () => {
  // @ts-expect-error Server Component
  return <Blogs />;
};
