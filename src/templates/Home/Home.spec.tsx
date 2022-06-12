import 'match-media-mock';
import { screen } from '@testing-library/react';

import { items as bannersMock } from '@/components/BannerSlider/mock';
import { items as gamesMock } from '@/components/GameCardSlider/mock';
import { item as highlightMock } from '@/components/Highlight/mock';
import { renderWithTheme } from '@/utils/tests/helpers';

import { Home } from './index';

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeHighlight: highlightMock,
  freeGames: [gamesMock[0]],
};

describe('<Home/>', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /contato/i }),
    ).toBeInTheDocument();

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

    expect(screen.getAllByText(/Population/i)).toHaveLength(5);
  });
});
