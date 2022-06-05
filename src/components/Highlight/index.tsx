import { HighlightProps } from '@/types';

import { Button } from '../Button';

import * as S from './styles';

export function Highlight({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right',
}: HighlightProps) {
  return (
    <S.Container backgroundImage={backgroundImage} alignment={alignment}>
      {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}

      <S.Content>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>

        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Container>
  );
}
