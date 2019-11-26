import styled from 'styled-components/macro';

export const PageWrapper = styled.div`
    min-height: 100%;
    width: 100%;
    padding: 20px;
`;

export const PageContent = styled.div`
    width: 100%;
    max-width: ${({
        theme: {
            breakpoints: { large },
        },
    }) => large};
    margin: 0 auto;
`;
