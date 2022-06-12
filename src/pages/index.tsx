import { GetServerSideProps } from 'next';

import { items as bannersMock } from '@/components/BannerSlider/mock';
import { items as gamesMock } from '@/components/GameCardSlider/mock';
import { item as highlightMock } from '@/components/Highlight/mock';
import { Home } from '@/templates/Home';
import { HomeTemplateProps } from '@/types';

export default function Index(homeProps: HomeTemplateProps) {
  return <Home {...homeProps} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeHighlight: highlightMock,
      freeGames: gamesMock,
    },
  };
};
