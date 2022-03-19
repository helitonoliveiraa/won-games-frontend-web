import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { LogoProps } from '@/types';

const wrapperModifiers = {
  large: () => css`
    width: 20rem;
    height: 6rem;
  `,
  normal: () => css`
    width: 11rem;
    height: 3rem;
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;

      svg {
        height: 4.5rem;
        pointer-events: none;
      }

      .text {
        display: none;
      }
    `}
  `,
};

export const Container = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`;
