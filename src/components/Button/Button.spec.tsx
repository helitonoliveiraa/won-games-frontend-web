import { FiShoppingCart } from 'react-icons/fi';

import { screen } from '@testing-library/react';

import theme from '@/styles/theme';
import { renderWithTheme } from '@/utils/tests/helpers';

import { Button } from './index';

describe('<Button/>', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render small size', () => {
    renderWithTheme(<Button size="small">buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    });
  });

  it('should render large size', () => {
    renderWithTheme(<Button size="large">buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem',
    });
  });

  it('should render fullWidth version', () => {
    renderWithTheme(<Button fullWidth>buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render icon version', () => {
    renderWithTheme(
      <Button icon={<FiShoppingCart data-testid="icon" />}>buy now</Button>,
    );

    expect(
      screen.getByRole('button', { name: /buy now/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render a minimal version', () => {
    renderWithTheme(
      <Button icon={<FiShoppingCart data-testid="icon" />} minimal>
        Wish list
      </Button>,
    );

    expect(screen.getByRole('button', { name: /wish list/i })).toHaveStyle({
      background: 'transparent',
      color: theme.colors.primary,
    });

    expect(screen.getByRole('button', { name: /wish list/i })).toHaveStyleRule(
      'background',
      'transparent',
      {
        modifier: ':hover',
      },
    );
  });

  it('should render button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        buy now
      </Button>,
    );

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link',
    );
  });
});
