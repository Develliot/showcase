import styled from 'styled-components/macro';

export const PageWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: ${({
        theme: {
            colors: { lightGrey },
        },
    }) => lightGrey};
`;

export const PageContent = styled.div`
    width: 100%;
    height: 100%;
    max-width: ${({
        theme: {
            breakpoints: { large },
        },
    }) => large};
    margin: 0 auto;
`;
