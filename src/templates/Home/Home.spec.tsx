import 'match-media-mock';
import { screen } from '@testing-library/react';

import { items as bannersMock } from '@/components/BannerSlider/mock';
import { items as gamesMock } from '@/components/GameCardSlider/mock';
import { item as highlightMock } from '@/components/Highlight/mock';
import { renderWithTheme } from '@/utils/tests/helpers';

import { Home } from './index';

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  upcomingMoreGames: gamesMock,
  freeHighlight: highlightMock,
  freeGames: gamesMock,
};

describe('<Home/>', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /contato/i }),
    ).toBeInTheDocument();
  });

  it('should render 4 sections', () => {
    renderWithTheme(<Home {...props} />);

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
