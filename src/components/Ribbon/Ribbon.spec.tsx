import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { Ribbon } from './index';

describe('<Ribbon/>', () => {
  it('should render correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument();
  });

  it('should render with primary color on background as default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      background: '#F231A5',
    });
  });

  it('should render with the secondary color on background', () => {
    renderWithTheme(<Ribbon color="secondary">Secondary Color</Ribbon>);

    expect(screen.getByText(/Secondary color/i)).toHaveStyle({
      background: '#3CD3C1',
    });
  });

  it('should render with the normal size as default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.3rem',
      'font-size': '1.4rem',
    });
  });
});
