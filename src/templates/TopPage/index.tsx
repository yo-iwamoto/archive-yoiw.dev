import { Blogs } from './components/Blogs';
import { Heading } from '@/components/Heading';
import { PageProps } from '@/pages/index.server';

const HEADING_ID = 'blogs';

export const TopPage = ({ posts }: PageProps) => {
  return (
    <>
      <section aria-labelledby={HEADING_ID}>
        <Heading anchor={HEADING_ID} accessibleName='ブログ' as='h2'>
          Blogs
        </Heading>
        <Blogs posts={posts} />
      </section>
    </>
  );
};
