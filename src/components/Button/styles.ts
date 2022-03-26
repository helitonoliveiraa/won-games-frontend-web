import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '@/types';

type ContainerProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth'
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
  `,
  widthIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

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
  ${({ theme, size, fullWidth, hasIcon }) => css`
    border: none;
    border-radius: ${theme.border.radius.default};
    background: ${`linear-gradient(180deg, ${theme.colors.lightOrange} 0%, ${theme.colors.lightPink}) 50%`};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;

    ${!!size && ContainerModifiers[size](theme)};
    ${fullWidth && ContainerModifiers.fullWidth()}
    ${hasIcon && ContainerModifiers.widthIcon(theme)}
  `}
`;
