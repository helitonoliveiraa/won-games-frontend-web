import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Heading } from '@/components/Heading';
import { Menu } from '@/components/Menu';

import * as S from './styles';

export function Home() {
  return (
    <section>
      <Container>
        <Menu />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News Releases
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Coming Soon
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  );
}
