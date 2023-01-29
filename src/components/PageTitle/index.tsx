import Head from 'next/head';

type Props = {
  title: string;
};

export const PageTitle = ({ title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
