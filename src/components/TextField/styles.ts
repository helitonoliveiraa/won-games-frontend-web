import styled, { css, DefaultTheme } from 'styled-components';

import { TextFieldProps } from '@/types';

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid ${theme.colors.lightGray};
    border-radius: 0.2rem;
    background: ${theme.colors.lightGray};

    display: flex;
    align-items: center;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    width: 100%;
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xxsmall};
    border: none;
    background: transparent;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    outline: none;

    &::placeholder {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    margin-bottom: calc(${theme.spacings.xxsmall} / 2);
    cursor: pointer;
  `}
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: ${theme.spacings.small};
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 100%;
    }
  `}
`;

const ContainerModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      color: ${theme.colors.middleGray1};
      cursor: not-allowed;

      &::placeholder {
        color: currentColor;
      }
    }
    cursor: not-allowed;
  `,
};

export const Container = styled.div<Pick<TextFieldProps, 'disabled'>>`
  ${({ theme, disabled }) => css`
    ${disabled && ContainerModifiers.disabled(theme)}
  `}
`;
