import { fireEvent, screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { Menu } from './index';

describe('<Menu/>', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
  });

  it('should render open/close mobile menu', () => {
    renderWithTheme(<Menu />);

    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    fireEvent.click(screen.getByLabelText(/button close menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />);

    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/My account/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Entrar/i)).toBeInTheDocument();
    expect(screen.getByText(/crie sua conta/i)).toBeInTheDocument();
  });

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="Héliton Oliveira" />);

    expect(screen.getByText(/wishlist/i)).toBeInTheDocument();
    expect(screen.getByText(/My account/i)).toBeInTheDocument();
    expect(screen.queryByText(/Entrar/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/crie sua conta/i)).not.toBeInTheDocument();
  });
});
