import { AiFillHeart } from 'react-icons/ai';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

import { Button } from '../Button';
import { Ribbon } from '../Ribbon';
import { GameCardProps } from '@/types';

import * as S from './styles';

export function GameCard({
  title,
  developer,
  price,
  image,
  promotionalPrice,
  favorite = false,
  onFavorite,
  ribbonTitle,
  ribbonColor,
  ribbonSize,
}: GameCardProps) {
  return (
    <S.Container>
      {!!ribbonTitle && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbonTitle}
        </Ribbon>
      )}

      <S.ImageBox>
        <img src={image} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Info>
          <h3>{title}</h3>
          <h4>{developer}</h4>

          <button type="button" onClick={onFavorite}>
            {favorite ? (
              <AiFillHeart aria-label="remove from wishlist" />
            ) : (
              <FiHeart aria-label="Add to Wishlist" />
            )}
          </button>
        </S.Info>

        <S.BuyBox>
          {!!promotionalPrice && <S.Price isPromotion>{price}</S.Price>}
          <S.Price>{promotionalPrice || price}</S.Price>

          <Button size="small" icon={<FiShoppingCart />} />
        </S.BuyBox>
      </S.Content>
    </S.Container>
  );
}
