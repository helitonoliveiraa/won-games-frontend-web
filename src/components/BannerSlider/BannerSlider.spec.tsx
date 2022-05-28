import 'match-media-mock';
import { getByRole, render, screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { BannerSlider } from './index';

const items = [
  {
    image:
      'https://images.unsplash.com/photo-1511882150382-421056c89033?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtZSUyMHJhbmRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500',
    title: 'Test Game 1',
    subtitle: '<p>Just teste game one, just play it</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/test-game-1',
    ribbonTitle: 'Bestselling',
  },
  {
    image:
      'https://images.unsplash.com/photo-1594652634010-275456c808d0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZSUyMHJhbmRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500',
    title: 'Test Game 2',
    subtitle: '<p>Just teste game one, just play it</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/test-game-1',
    ribbonTitle: 'Bestselling',
  },
];

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
