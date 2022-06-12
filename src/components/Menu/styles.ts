import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type MenuFullProps = {
  isOpen: boolean;
};

const iconStyled = css`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`;

export const Container = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} 0;
    position: relative;

    button {
      ${iconStyled};
    }
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `}
`;

export const IconWrapper = styled.div`
  ${iconStyled}
`;

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: flex-end;
    gap: ${theme.spacings.xsmall};

    div {
      ${iconStyled};
    }
  `}
`;

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan(`medium`)`
      margin-left: ${theme.spacings.large};
    `}
  `}
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`;

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    height: 100vh;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > button {
      ${iconStyled};
      color: ${theme.colors.black};
      position: absolute;
      top: ${theme.spacings.medium};
      right: ${theme.spacings.small};
    }

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.semiBold};
      font-size: ${theme.font.sizes.xxxlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`;

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }

    a {
      text-decoration: none;
      color: ${theme.colors.primary};
      border-bottom: 0.2rem solid ${theme.colors.primary};
    }
  `}
`;
