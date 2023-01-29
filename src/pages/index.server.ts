import { NEWT_BLOG_APP_UID, NEWT_POST_MODEL_UID } from '@/config/const';
import { newtCDNApi } from '@/lib/newt';
import { BlogPost } from '@/types/Api';
import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = async () => {
  const res = await newtCDNApi.getContents<BlogPost>({
    appUid: NEWT_BLOG_APP_UID,
    modelUid: NEWT_POST_MODEL_UID,
    query: {
      limit: 5,
      order: ['-created_at'],
    },
  });

  return {
    props: {
      posts: res.items,
    },
  };
};

export type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;
