import { BannerProps } from '@/types';

import { Button } from '../Button';
import { Ribbon } from '../Ribbon';

import * as S from './styles';

export function Banner({
  image,
  title,
  subtitle = 'Play the new <strong>CrashLands</strong> season',
  buttonLabel,
  buttonLink,
  ribbonTitle,
  ribbonColor,
  ribbonSize,
}: BannerProps) {
  return (
    <S.Container>
      {!!ribbonTitle && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbonTitle}
        </Ribbon>
      )}

      <S.Background src={image} role="img" aria-label={title} />
      <S.Caption>
        <h2>{title}</h2>
        <h3
          dangerouslySetInnerHTML={{
            __html: subtitle,
          }}
        />

        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Container>
  );
}
