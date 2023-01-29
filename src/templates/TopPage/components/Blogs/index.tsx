import { BlogPost } from '@/types/Api';
import Link from 'next/link';

type Props = {
  posts: BlogPost[];
};

export const Blogs = ({ posts }: Props) => {
  return (
    <>
      {posts.map(({ slug, _id, title }) => (
        <Link href={`/entries/${slug}`} key={_id}>
          <p>{title}</p>
        </Link>
      ))}
    </>
  );
};
