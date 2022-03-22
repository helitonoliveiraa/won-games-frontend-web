import { HeadingProps } from '@/types';
import * as S from './styles';

export function Heading({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = 'default',
}: HeadingProps) {
  return (
    <S.Container color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
    </S.Container>
  );
}
