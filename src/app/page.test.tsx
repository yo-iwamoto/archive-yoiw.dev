import Page from './page';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('IndexPage', () => {
  it('renders unchanged', () => {
    const { getByRole, asFragment } = render(<Page />);

    expect(getByRole('heading', { name: 'Hello world', level: 1 })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
