import styled, { css } from 'styled-components';

type ContainerProps = {
  full?: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, full }) => css`
    max-width: ${full ? theme.grid.container : '104rem'};
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`;
