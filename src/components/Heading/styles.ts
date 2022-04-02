import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import { HeadingProps, LineColors } from '@/types';

type LinePros = {
  theme: DefaultTheme;
  lineColor?: LineColors;
};

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxxlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `};
  `,

  lineLeft: ({ theme, lineColor }: LinePros) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor!]};
  `,

  lineBottomDefault: ({ theme, lineColor }: LinePros) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      width: ${theme.spacings.small};
      border-bottom: 0.4rem solid ${theme.colors[lineColor!]};
      position: absolute;
      left: 0;
      bottom: -${theme.spacings.xxsmall};
    }
  `,

  lineBottomLarge: ({ theme, lineColor }: LinePros) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      width: ${theme.spacings.large};
      border-bottom: 0.4rem solid ${theme.colors[lineColor!]};
      position: absolute;
      left: 0;
      bottom: -${theme.spacings.xxsmall};
    }
  `,
};

export const Container = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, size, lineColor }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size](theme)};
    ${lineLeft && wrapperModifiers.lineLeft({ theme, lineColor })}
    ${lineBottom === 'default' &&
    wrapperModifiers.lineBottomDefault({ theme, lineColor })};
    ${lineBottom === 'large' &&
    wrapperModifiers.lineBottomLarge({ theme, lineColor })};
  `}
`;
