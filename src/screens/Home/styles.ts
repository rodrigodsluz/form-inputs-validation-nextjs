import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.grey};

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
  `}
`;
