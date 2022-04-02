import { HeadingProps } from '@/types';

import * as S from './styles';

export function Heading({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = 'default',
  size = 'medium',
  lineColor = 'primary',
}: HeadingProps) {
  return (
    <S.Container
      color={color}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
      size={size}
      lineColor={lineColor}
    >
      {children}
    </S.Container>
  );
}
