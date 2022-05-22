import { fireEvent, screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { GameCard } from './index';
import * as S from './styles';

const gameCardProps = {
  title: 'Read Dead Redemption',
  developer: 'Rockstar Games',
  image: '/game.png',
  price: 'R$ 984,00',
};

describe('<GameCard/>', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<GameCard {...gameCardProps} />);

    expect(container.firstChild).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /read dead redemption/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /rockstar games/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('img')).toHaveAttribute('src', '/game.png');

    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument();
  });

  it('should render price label', () => {
    renderWithTheme(<GameCard {...gameCardProps} />);

    const labelPrice = screen.getByText(/R\$ 984,00/i);

    expect(labelPrice).toBeInTheDocument();
    expect(labelPrice).toHaveStyle({
      background: '#3CD3C1',
    });
    expect(labelPrice).not.toHaveStyle({
      textDecoration: 'line-trough',
    });
    expect(labelPrice).not.toHaveStyle({
      color: '#BBBBBB',
    });
  });

  it('should render price with line-though when isPromotion to be true', () => {
    renderWithTheme(
      <GameCard {...gameCardProps} promotionalPrice="R$ 15,00" />,
    );

    const promotionalPrice = screen.getByText(/R\$ 15,00/i);

    expect(promotionalPrice).toBeInTheDocument();
    expect(promotionalPrice).not.toHaveStyle({
      'text-decoration': 'line-through',
    });
    expect(screen.getByText(/R\$ 984,00/i)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 984,00/i)).toHaveStyle({
      'text-decoration': 'line-through',
    });
  });

  it('should render a filled icon when favorite is true', () => {
    renderWithTheme(<GameCard {...gameCardProps} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
    expect(screen.queryByText(/add to wishlist/i)).not.toBeInTheDocument();
  });

  it('should call onFavorite when favorite is clicked', () => {
    const onFavorite = jest.fn();

    renderWithTheme(
      <GameCard {...gameCardProps} favorite onFavorite={onFavorite} />,
    );

    fireEvent.click(screen.getAllByRole('button')[0]); //getting the first button

    expect(onFavorite).toBeCalled();
  });

  it('should render a ribbon correctly', () => {
    renderWithTheme(
      <GameCard
        {...gameCardProps}
        ribbonTitle="10% OFF"
        ribbonSize="small"
        ribbonColor="secondary"
      />,
    );

    const ribbon = screen.getByText(/10% OFF/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({
      background: '#3CD3C1',
    });
    expect(ribbon).toHaveStyle({
      height: '2.4rem',
      fontSize: '1rem',
    });
  });
});
