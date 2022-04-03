import Link from 'next/link';

import { Heading } from '../Heading';
import { Logo } from '../Logo';

import * as S from './styles';

export function Footer() {
  return (
    <S.Container>
      <Logo color="black" />

      <S.Content>
        <S.Column>
          <Heading
            color="black"
            lineBottom="default"
            lineColor="secondary"
            size="small"
          >
            Contato
          </Heading>

          <Link href="mailto:sac@hoswongames.com">
            <a>sac@wongames.com</a>
          </Link>

          <Link href="tel:+552133283719">
            <a>+55 (21) 9 0000-0000</a>
          </Link>
        </S.Column>

        <S.Column>
          <Heading
            color="black"
            lineBottom="default"
            lineColor="secondary"
            size="small"
          >
            Nos Acompanhe
          </Heading>

          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/helitonoliveira.me/"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/helitonoliveir/"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/helitonoliveira/"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/helitonoliveira/"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column aria-labelledby="footer resources">
          <Heading
            color="black"
            lineBottom="default"
            lineColor="secondary"
            size="small"
          >
            Links
          </Heading>

          <Link href="/">
            <a>Página inicial</a>
          </Link>
          <Link href="/games">
            <a>Loja</a>
          </Link>
          <Link href="/">
            <a>Explorar</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </S.Column>

        <S.Column aria-labelledby="footer contact">
          <Heading
            color="black"
            lineBottom="default"
            lineColor="secondary"
            size="small"
          >
            localização
          </Heading>

          <span>Rua 7 lorem</span>
          <span>000 - 0000000</span>
          <span>Rio de Janeiro, Brasil</span>
        </S.Column>
      </S.Content>

      <S.Copyright>Won Games 2020 © Todos os Direitos Reservados</S.Copyright>
    </S.Container>
  );
}
