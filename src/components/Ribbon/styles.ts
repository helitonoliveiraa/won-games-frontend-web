import { darken } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';

import { RibbonColors, RibbonProps, RibbonSizes } from '@/types';

type ContainerProps = Omit<RibbonProps, 'children'>;
type Color = {
  color: RibbonColors;
  theme: DefaultTheme;
};

const wrapperModifiers = {
  color: ({ theme, color }: Color) => css`
    background: ${theme.colors[color]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,
  default: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    height: 3.3rem;
    padding: 0 ${theme.spacings.large};
    right: -1.6rem;

    &::before {
      top: 3.3rem;
      border-top-width: 1rem;
      border-right-width: 1.6rem;
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxsmall};
    height: 2.4rem;
    padding: 0 ${theme.spacings.small};
    right: -1.2rem;

    &::before {
      top: 2.4rem;
      border-top-width: 1rem;
      border-right-width: 1.2rem;
    }
  `,
  large: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.semiBold};
    font-size: ${theme.font.sizes.large};
    height: 4rem;
    padding: 0 ${theme.spacings.medium};
    right: -2.2rem;

    &::before {
      top: 4rem;
      border-top-width: 1rem;
      border-right-width: 2.2rem;
    }
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, color, size }) => css`
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    position: absolute;

    &::before {
      content: '';
      right: 0;
      top: 0;
      position: absolute;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!color &&
    wrapperModifiers.color({
      theme,
      color,
    })}
    ${!!size && wrapperModifiers[size](theme)};
  `}
`;
