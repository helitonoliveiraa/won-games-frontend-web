import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { GameCardSliderProps } from '@/types';

type ContainerProps = Pick<GameCardSliderProps, 'arrowColor'>;

export const Container = styled.section<ContainerProps>`
  ${({ theme, arrowColor }) => css`
    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xxsmall};
      }

      .slick-list {
        margin: 0 -${theme.spacings.xxsmall};
      }
    `}

    .slick-prev,
    .slick-next {
      display: block;
      cursor: pointer;
      width: 3.2rem;
      height: 3.2rem;
      padding: 0;
      position: absolute;
      top 50%;
      transform: translateY(-50%);
      color: ${theme.colors[arrowColor!]};

      > svg {
        width: 3.2rem;
        height: 3.2rem;
      }
    }

    .slick-arrow.slick-prev,
    .slick-arrow.slick-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .slick-arrow.slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-arrow.slick-next {
      right:-${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`;
