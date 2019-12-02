import styled from 'styled-components/macro';

export const UserCardWrapper = styled.div`
    overflow: hidden;
`;

export const CoverColor = styled.div`
    background-color: ${({ color }) => color};
    width: 100%;
    height: 150px;
    position: relative;
`;

export const BottomHalf = styled.div`
    background-color: ${({
        theme: {
            colors: { white },
        },
    }) => white};
    padding: ${({
        theme: {
            globalPadding,
            spacing: { large },
        },
    }) => `${large} ${globalPadding} ${large} ${globalPadding}`};
`;

export const ImageWrapper = styled.div`
    height: 128px;
    width: 128px;
    border-radius: 6px;
    overflow: hidden;
    border: ${({
        theme: {
            colors: { lightGrey },
        },
    }) => `solid 1px ${lightGrey}`};
    position: absolute;
    bottom: -40px;
`;

export const ImageContainer = styled.img`
    height: 128px;
    width: 128px;
`;
