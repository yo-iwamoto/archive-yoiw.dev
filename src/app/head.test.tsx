import Head from './head';
import { render } from '@testing-library/react';

describe('Head', () => {
  it('renders unchanged', () => {
    const { getByText, asFragment } = render(<Head />);

    expect(getByText('yoiw.dev')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
