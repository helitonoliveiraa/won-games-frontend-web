import styled, { css } from 'styled-components';

import { RadioProps } from '@/types';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const InputRadio = styled.input`
  ${({ theme }) => css`
    width: 2rem;
    height: 2rem;
    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: 50%;
    background: transparent;
    appearance: none;
    outline: none;
    position: relative;
    transition: background ${theme.transition.fast};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: ${theme.colors.primary};
      opacity: 0;
      transition: opacity ${theme.transition.fast};
      position: absolute;
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      border-color: ${theme.colors.primary};

      &::before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label<Pick<RadioProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    margin-left: ${theme.spacings.xxsmall};
    line-height: 1;
  `}
`;
