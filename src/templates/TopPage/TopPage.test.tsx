import { TopPage } from '.';
import { render } from '@testing-library/react';

// Server Component
vi.mock('./components/Blogs', () => ({
  Blogs: () => <div>mock Blogs</div>,
}));

describe('templates/TopPage', () => {
  it('正しく表示されること', () => {
    const { getByRole, asFragment } = render(<TopPage />);

    expect(getByRole('region', { name: 'ブログ' })).toBeDefined();
    expect(getByRole('heading', { name: 'ブログ', level: 2 })).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
