import { PageProps } from './index.server';
import { TopPage } from '@/templates/TopPage';

export { getServerSideProps } from './index.server';

export default function Page(props: PageProps) {
  return <TopPage {...props} />;
}
