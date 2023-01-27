import { Blogs } from './components/Blogs';
import { Heading } from '@/components/Heading';

const HEADING_ID = 'blogs';

export const TopPage = () => {
  return (
    <>
      <section aria-labelledby={HEADING_ID}>
        <Heading anchor={HEADING_ID} accessibleName='ブログ' as='h2'>
          Blogs
        </Heading>
        {/* @ts-expect-error Server Component */}
        <Blogs />
      </section>
    </>
  );
};
