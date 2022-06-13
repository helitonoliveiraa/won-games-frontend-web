import 'match-media-mock';
import { render, screen } from '@testing-library/react';

import theme from '@/styles/theme';
import { renderWithTheme } from '@/utils/tests/helpers';

import { GameCardSlider } from './index';
import { items } from './mock';

describe('<GameCardSlider/>', () => {
  it('should render vertical carousel', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);

    expect(container.querySelector('.slick-slider')).toBeInTheDocument();
    expect(container.querySelector('.slick-list')).toBeInTheDocument();
  });

  it('should render the cards correctly', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);

    expect(
      screen.getByRole('heading', { name: /Population Zero 0/i }),
    ).toBeInTheDocument();
  });

  it('should render white arrows if arrowColor is passed', () => {
    renderWithTheme(<GameCardSlider items={items} arrowColor="white" />);

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA',
    });
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render black arrows if arrowColor is passed', () => {
    renderWithTheme(<GameCardSlider items={items} arrowColor="black" />);

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#030517',
    });

    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#030517',
    });
  });
});
