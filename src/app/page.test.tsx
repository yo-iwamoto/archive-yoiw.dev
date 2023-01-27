import Page from './page';
import { render } from '@testing-library/react';

describe('IndexPage', () => {
  it('renders unchanged', () => {
    const { getByRole, asFragment } = render(<Page />);

    expect(getByRole('heading', { name: 'Hello world', level: 1 })).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
