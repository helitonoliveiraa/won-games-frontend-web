import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import { HeadingProps } from '@/types';

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,

  lineBottomDefault: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      width: ${theme.spacings.small};
      border-bottom: 0.4rem solid ${theme.colors.secondary};
      position: absolute;
      left: 0;
      bottom: -${theme.spacings.xxsmall};
    }
  `,

  lineBottomLarge: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      width: ${theme.spacings.large};
      border-bottom: 0.4rem solid ${theme.colors.secondary};
      position: absolute;
      left: 0;
      bottom: -${theme.spacings.xxsmall};
    }
  `,
};

export const Container = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    font-size: ${theme.font.sizes.xxxlarge};
    color: ${theme.colors[color!]};

    ${lineLeft && wrapperModifiers.lineLeft(theme)}

    ${lineBottom === 'default' && wrapperModifiers.lineBottomDefault(theme)};

    ${lineBottom === 'large' && wrapperModifiers.lineBottomLarge(theme)};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `};
  `}
`;
