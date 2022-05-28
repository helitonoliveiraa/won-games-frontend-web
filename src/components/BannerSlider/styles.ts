import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as BannerStyles from '../Banner/styles';

export const Container = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};

      li {
        background: ${theme.colors.white};
        width: 1rem;
        height: 1rem;
        border-radius: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xsmall};
        cursor: pointer;

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button {
        width: 1rem;
        height: 1rem;
        opacity: 0;
        cursor: pointer;
      }
    }

    ${media.greaterThan('large')`
      ${BannerStyles.Container} {
        max-width: 104rem;
        margin: 0 auto;
      }

      .slick-dots {
        height: 100%;
        flex-direction: column;
        margin: 0;
        position: absolute;
        top: 0;
        right: 0;

        li {
          margin: ${theme.spacings.xsmall} 0;
        }
      }
    `}
  `}
`;
