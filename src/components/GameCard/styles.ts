import styled, { css, DefaultTheme } from 'styled-components';

type PriceProps = {
  isPromotion?: boolean;
};

export const Container = styled.article`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background: ${theme.colors.white};
    position: relative;
    display: flex;
    flex-direction: column;
  `}
`;

export const ImageBox = styled.div`
  ${({ theme }) => css`
    height: 13.8rem;
    width: 100%;
    background: ${theme.colors.shimmerPrimary};
    background-image: linear-gradient(
      to right,
      ${theme.colors.shimmerPrimary} 0%,
      ${theme.colors.shimmerSecondary} 20%,
      ${theme.colors.shimmerPrimary} 40%,
      ${theme.colors.shimmerPrimary} 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall} ${theme.spacings.xsmall}
      ${theme.spacings.xsmall};
    position: relative;
  `}
`;

export const Info = styled.footer`
  ${({ theme }) => css`
    max-width: calc(100% - 2.5rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.semiBold};
      color: ${theme.colors.black};
    }

    h4 {
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.medium};
      color: ${theme.colors.gray};
    }

    button {
      position: absolute;
      top: 0;
      right: 0;

      svg {
        width: 2.4rem;
        height: 2.4rem;
        color: ${theme.colors.primary};
        transition: filter 0.3s ease-in-out;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  `}
`;

export const BuyBox = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `}
`;

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    display: inline-block;
    padding: 0.55rem ${theme.spacings.xxsmall};
    background: ${theme.colors.secondary};
    border-radius: ${theme.border.radius.default};
    margin-right: calc(${theme.spacings.xxsmall} / 2);
    color: ${theme.colors.white};
  `,

  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.middleGray};
    text-decoration: line-through;
    margin-right: ${theme.spacings.xsmall};
  `,
};

export const Price = styled.strong<PriceProps>`
  ${({ theme, isPromotion }) => css`
    font-weight: ${theme.font.semiBold};
    font-size: ${theme.font.sizes.small};

    ${!isPromotion && priceModifiers.default(theme)}
    ${isPromotion && priceModifiers.promotional(theme)}
  `}
`;
