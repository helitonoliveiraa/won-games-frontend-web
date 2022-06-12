import 'match-media-mock';
import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { BannerSlider } from './index';
import { items } from './mock';

describe('<BannerSlider/>', () => {
  it('should render a vertical slide', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument();
  });

  it('should render with one active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2);
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1);

    expect(
      screen.getByRole('heading', { name: /Test Game 1/i, hidden: false }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Test Game 2/i, hidden: true }),
    ).toBeInTheDocument();
  });

  it('should render with the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelectorAll('.slick-dots li')).toHaveLength(2);
    expect(
      container.querySelectorAll('.slick-dots li.slick-active'),
    ).toHaveLength(1);
  });
});
