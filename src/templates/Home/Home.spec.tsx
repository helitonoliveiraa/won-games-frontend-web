import { render, screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { Home } from './index';

describe('<Home/>', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /contato/i }),
    ).toBeInTheDocument();
  });

  it('should render 4 sections', () => {
    renderWithTheme(<Home />);

    expect(
      screen.getByRole('heading', { name: /News Releases/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Most Popular/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Coming Soon/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Free Games/i }),
    ).toBeInTheDocument();
  });
});
