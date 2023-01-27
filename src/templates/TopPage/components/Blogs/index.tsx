import { NEWT_BLOG_APP_UID, NEWT_CDN_API_BASE_URL, NEWT_POST_MODEL_UID } from '@/config/const';
import { env } from '@/config/env';
import Link from 'next/link';
import type { Contents } from 'newt-client-js';
import type { Blog } from '@/types/Api';

const LIMIT = 5;
const ORDER = '_created_at';
const REVALIDATE = 5;

const getPosts = async () =>
  fetch(`${NEWT_CDN_API_BASE_URL}/${NEWT_BLOG_APP_UID}/${NEWT_POST_MODEL_UID}?limit=${LIMIT}&order=${ORDER}`, {
    headers: {
      Authorization: `Bearer ${env.NEWT_CDN_API_TOKEN}`,
    },
    next: {
      revalidate: REVALIDATE,
    },
  }).then((v) => v.json()) as Promise<Contents<Blog>>;

export const Blogs = async () => {
  const posts = await getPosts();

  return (
    <>
      {posts.items.map(({ slug, _id, title }) => (
        <Link href={`/entries/${slug}`} key={_id}>
          <p>{title}</p>
        </Link>
      ))}
    </>
  );
};
