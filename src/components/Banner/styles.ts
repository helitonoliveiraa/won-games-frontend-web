import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type WrapperProps = {
  src: string;
};

export const Container = styled.section`
  position: relative;

  ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  `}
`;

export const Background = styled.div<WrapperProps>`
  ${({ src, theme }) => css`
    width: 100%;
    height: 23rem;
    background-color: ${theme.colors.lightGray};
    background-image: url(${src});
    background-position: center;
    background-size: cover;

    ${media.greaterThan('medium')`
      height: 58.4rem;
    `}
  `}
`;

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};

    h2 {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.semiBold};
      color: ${theme.colors.white};
    }

    h3 {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.normal};
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.xsmall};

      strong {
        font-weight: ${theme.font.bold};
        color: ${theme.colors.primary};
      }
    }

    ${media.greaterThan('medium')`
    padding: ${theme.spacings.medium} ${theme.spacings.large};
      border-radius: 0 0 ${theme.border.radius.default} ${theme.border.radius.default};
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;

      h2 {
        font-size: ${theme.font.sizes.xxxlarge};
      }

      h3 {
        font-size: ${theme.font.sizes.xlarge};
      }
    `}
  `}
`;
