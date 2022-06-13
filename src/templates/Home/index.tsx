import { Banner } from '@/components/Banner';
import { BannerSlider } from '@/components/BannerSlider';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { GameCardSlider } from '@/components/GameCardSlider';
import { Heading } from '@/components/Heading';
import { Highlight } from '@/components/Highlight';
import { Menu } from '@/components/Menu';
import { HomeTemplateProps } from '@/types';

import * as S from './styles';

export function Home({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames,
  freeGames,
  freeHighlight,
}: HomeTemplateProps) {
  return (
    <section>
      <Container full>
        <Menu />

        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary" color="black">
            News Releases
          </Heading>

          <GameCardSlider items={newGames} arrowColor="black" />
        </Container>
      </S.SectionNews>

      <Container>
        <S.SectionMostPopular>
          <Heading lineLeft lineColor="secondary">
            Most Popular
          </Heading>

          <Highlight {...mostPopularHighlight} />

          <GameCardSlider items={mostPopularGames} />
        </S.SectionMostPopular>

        <S.SectionUpcoming>
          <Heading lineLeft lineColor="secondary">
            Coming Soon
          </Heading>

          <GameCardSlider items={upcomingGames} />

          <Highlight {...upcomingHighlight} />

          <GameCardSlider items={upcomingMoreGames} />
        </S.SectionUpcoming>

        <S.SectionFreeGames>
          <Heading lineLeft lineColor="secondary">
            Free Games
          </Heading>

          <Highlight {...freeHighlight} />

          <GameCardSlider items={freeGames} />
        </S.SectionFreeGames>
      </Container>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  );
}
