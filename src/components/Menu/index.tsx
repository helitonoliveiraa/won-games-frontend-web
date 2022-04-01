import { useState } from 'react';
import { FiSearch, FiAlignLeft, FiShoppingCart, FiX } from 'react-icons/fi';

import { Button } from '../Button';
import { MediaMatch } from '../MediaMatch';
import { Logo } from '@/components/Logo';

import * as S from './styles';

type MenuProps = {
  username?: string;
};

export function Menu({ username }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      <MediaMatch lessThan="medium">
        <button type="button" onClick={() => setIsOpen(true)}>
          <FiAlignLeft aria-label="open menu" />
        </button>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explorar</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <div>
          <FiSearch aria-label="search" />
        </div>

        <div>
          <FiShoppingCart aria-label="open shopping cart" />
        </div>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign In</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <button
          type="button"
          aria-label="button close menu"
          onClick={() => setIsOpen(false)}
        >
          <FiX aria-label="icon close menu" />
        </button>

        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explorar</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button fullWidth>Entrar</Button>
            <span>ou</span>
            <a href="#">Crie sua conta</a>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Container>
  );
}
