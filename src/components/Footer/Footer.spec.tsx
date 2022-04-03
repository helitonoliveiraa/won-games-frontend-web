import { render, screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { Footer } from './index';

/**
 * Verify if exists the below columns
 *
 * contact
 * follow us
 * locale
 * links
 */

describe('<Footer/>', () => {
  it('should render 4 columns topics', () => {
    const { container } = renderWithTheme(<Footer />);

    expect(
      screen.getByRole('heading', { name: /contato/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /NOS ACOMPANHE/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /LOCALIZAÇÃO/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
