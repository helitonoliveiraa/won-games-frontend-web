import { lighten, rgba } from 'polished';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { HighlightProps } from '@/types';

type ContainerProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>;

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.5fr 2.5fr;

    ${Content} {
      margin-left: auto;
      text-align: right;
    }
  `,

  left: () => css`
    grid-template-areas: 'content floatimage';
    grid-template-columns: 2.5fr 1.5fr;

    ${Content} {
      margin-right: auto;
      text-align: left;
    }

    ${FloatImage} {
      justify-self: end;
    }
  `,
};

export const Container = styled.section<ContainerProps>`
  ${({ theme, backgroundImage, alignment }) => css`
    position: relative;
    height: 23rem;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;
    display: grid;

    ${wrapperModifiers[alignment!]}

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${rgba(theme.colors.dark, 0.8)};
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`;

export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;
    align-self: end;

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 48.3rem;
    width: 100%;

    grid-area: content;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};

    h2 {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.semiBold};
      color: ${theme.colors.white};
    }

    h3 {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.light};
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.xsmall};
    }

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.xlarge};

      h2 {
        font-size: ${theme.font.sizes.xxxlarge};
      }

      h3 {
        font-size: ${theme.font.sizes.large};
      }
    `}
  `}
`;
