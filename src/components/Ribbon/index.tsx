import { RibbonProps } from '@/types';

import * as S from './styles';

export function Ribbon({
  children,
  color = 'primary',
  size = 'default',
}: RibbonProps) {
  return (
    <S.Container color={color} size={size}>
      {children}
    </S.Container>
  );
}
