import { Header } from '.';
import { render } from '@testing-library/react';

describe.skip('components/Header', () => {
  it('正しく表示されること', () => {
    const { getByRole, getAllByRole, asFragment } = render(<Header />);

    expect(getByRole('banner', { name: '' })).toBeDefined();
    expect(getByRole('link', { name: 'yoiw.dev' })).toBeDefined();
    expect(getByRole('button', { name: 'メニューを開く' })).toBeDefined();

    // tailwind で PC/SP 表示を制御しているため、以下は2つずつ存在する
    expect(getAllByRole('navigation')).toHaveLength(2);
    expect(getAllByRole('link', { name: 'Blog' })).toHaveLength(2);
    expect(getAllByRole('link', { name: 'Resume' })).toHaveLength(2);

    expect(asFragment()).toMatchSnapshot();
  });
});
