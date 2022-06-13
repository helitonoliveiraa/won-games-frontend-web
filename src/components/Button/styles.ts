import { darken } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from '@/types';

type ContainerProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'minimal'
>;

const ContainerModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
    border: none;
  `,
  minimal: (theme: DefaultTheme) => css`
    background: transparent;
    color: ${theme.colors.primary};

    &:hover {
      background: transparent;
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
  widthIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.8rem;
      height: 1.8rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radius.default};
    background: ${`linear-gradient(180deg, ${theme.colors.lightOrange} 0%, ${theme.colors.lightPink}) 50%`};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    cursor: pointer;

    transition: background 0.3s ease-in-out;

    &:hover {
      background: ${`linear-gradient(180deg, ${theme.colors.darkOrange} 0%, ${theme.colors.darkPink})`};
    }

    ${!!size && ContainerModifiers[size](theme)};
    ${fullWidth && ContainerModifiers.fullWidth()}
    ${hasIcon && ContainerModifiers.widthIcon(theme)}
    ${!!minimal && ContainerModifiers.minimal(theme)}
  `}
`;
